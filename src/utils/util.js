class Fragment {
  constructor(pointA, pointB, pointC) {
    this.pointA = pointA;
    this.pointB = pointB;
    this.pointC = pointC;
    this.box = this.computeBoundingBox();
    this.centroid = this.computeCentroid();
    this.canvas = document.createElement("canvas");
    this.ctx = this.createCanvas();
    // this.clip(img)
  }

  computeBoundingBox() {
    const xMin = Math.min(this.pointA[0], this.pointB[0], this.pointC[0]),
      xMax = Math.max(this.pointA[0], this.pointB[0], this.pointC[0]),
      yMin = Math.min(this.pointA[1], this.pointB[1], this.pointC[1]),
      yMax = Math.max(this.pointA[1], this.pointB[1], this.pointC[1]);

    return {
      x: xMin,
      y: yMin,
      w: xMax - xMin,
      h: yMax - yMin,
    };
  }

  computeCentroid() {
    var x = (this.pointA[0] + this.pointB[0] + this.pointC[0]) / 3,
      y = (this.pointA[1] + this.pointB[1] + this.pointC[1]) / 3;
    return [x, y];
  }

  createCanvas() {
    this.canvas.className = "page-breaker__fragment-canvas";
    this.canvas.width = this.box.w;
    this.canvas.height = this.box.h;
    this.canvas.style.width = this.box.w + "px";
    this.canvas.style.height = this.box.h + "px";
    this.canvas.style.left = this.box.x + "px";
    this.canvas.style.top = this.box.y + "px";
    return this.canvas.getContext("2d");
  }

  clip(image, canvasWidth, canvasHeight) {
    this.ctx?.translate(-this.box.x, -this.box.y);
    this.ctx?.beginPath();
    this.ctx?.moveTo(this.pointA[0], this.pointA[1]);
    this.ctx?.lineTo(this.pointB[0], this.pointB[1]);
    this.ctx?.lineTo(this.pointC[0], this.pointC[1]);
    this.ctx?.closePath();
    this.ctx?.clip();
    this.ctx?.drawImage(image, 0, 0, canvasWidth, canvasHeight);
  }
}

export const loadImage = (path) => {
  return new Promise((resolve) => {
    let img = new window.Image();
    img.setAttribute("crossOrigin", "anonymous");
    img.src = path;
    img.onload = () => {
      resolve(img);
    };
  });
};
const clamp = (x, min, max) => {
  return x < min ? min : x > max ? max : x;
};

const randomRange = (min, max) => {
  return min + (max - min) * Math.random();
};

const TWO_PI = Math.PI * 2;

/**
 * 生成三角形顶点数据
 * @param { canvasWidth, canvasHeight }
 * @returns
 */
export function triangulate({ canvasWidth, canvasHeight }) {
  const rings = [
    { r: 50, c: 12 },
    { r: 150, c: 12 },
    { r: 300, c: 12 },
    { r: 1200, c: 12 }, // very large in case of corner clicks
  ];
  const centerX = canvasWidth / 2;
  const centerY = canvasHeight / 2;
  const vertices = [];
  vertices.push([centerX, centerY]);
  vertices.push([0, 0]);
  vertices.push([0, canvasHeight]);
  vertices.push([canvasWidth, 0]);
  vertices.push([canvasWidth, canvasHeight]);
  rings.forEach(function (ring) {
    var radius = ring.r,
      count = ring.c,
      variance = radius * 0.25;

    for (var i = 0; i < count; i++) {
      let x = Math.cos((i / count) * TWO_PI) * radius + centerX + randomRange(-variance, variance);
      let y = Math.sin((i / count) * TWO_PI) * radius + centerY + randomRange(-variance, variance);
      vertices.push([x, y]);
    }
  });

  vertices.forEach(function (v) {
    v[0] = clamp(v[0], 0, canvasWidth);
    v[1] = clamp(v[1], 0, canvasHeight);
  });

  const indices = window.Delaunay.triangulate(vertices);

  return {
    vertices,
    indices,
  };
}

/**
 * 生成碎片数组
 * @param {vertices, indices, canvasWidth, canvasHeight, container, img}
 * @returns
 */
export function initFragments({ vertices, indices, canvasWidth, canvasHeight, container, img }) {
  let p0, p1, p2, fragment;
  const fragments = [];

  for (let i = 0; i < indices.length; i += 3) {
    p0 = vertices[indices[i + 0]];
    p1 = vertices[indices[i + 1]];
    p2 = vertices[indices[i + 2]];
    fragment = new Fragment(p0, p1, p2);
    fragment.clip(img, canvasWidth, canvasHeight);
    fragments.push(fragment);
    container.appendChild(fragment.canvas);
  }
  return {
    fragments,
  };
}
