<template>
  <div
    v-if="canvasWidth && canvasHeight"
    class="page-breaker"
    ref="containerRef"
  >
    <div
      v-if="showFullImage"
      ref="imageRef"
      className="page-breaker__full-image"
      :style="imageStyle"
    ></div>
  </div>
  <div v-else>加载中...</div>
</template>

<script>
import { loadImage, triangulate, initFragments } from "@/utils/util";
import anime from "animejs";
import { ref, toRefs } from "vue";

export default {
  name: "ImgBreak",
  props: ["canvasWidth", "canvasHeight", "imgUrl", "onFinished"],
  setup(props) {
    const { canvasWidth, canvasHeight, imgUrl } = toRefs(props);
    const containerRef = ref(null);
    const imageRef = ref(null);
    const showFullImage = ref(true);
    const imageStyle = {
      backgroundImage: `url(${imgUrl.value})`,
    };

    const randomRange = (min, max) => {
      return min + (max - min) * Math.random();
    };

    const sign = (x) => {
      return x < 0 ? -1 : 1;
    };

    let fragments = [];
    const renderImage = async (el) => {
      console.log("imgUrl", imgUrl.value);
      const image = await loadImage(imgUrl.value);
      const { vertices, indices } = triangulate({
        canvasWidth: canvasWidth.value,
        canvasHeight: canvasHeight.value,
      });
      const result = initFragments({
        vertices,
        indices,
        canvasWidth: canvasWidth.value,
        canvasHeight: canvasHeight.value,
        container: el,
        img: image,
      });
      fragments = result.fragments;
    };
    const shake = ({ fragments }) => {
      const tl = anime.timeline();
      tl.add(
        {
          targets: fragments.map((t) => t.canvas),
          rotateX: {
            value: randomRange(-5, 15),
          },
          rotateY: {
            value: randomRange(-5, 15),
          },
          scale: 0.95,
          easing: "easeInOutSine",
          duration: 300,
        },
        0
      );
      return tl;
    };

    const shatter = ({ fragments, canvasWidth, canvasHeight }) => {
      const tl = anime.timeline();
      fragments.forEach((fragment) => {
        const dx = fragment.centroid[0] - canvasWidth / 2;
        const dy = fragment.centroid[1] - canvasHeight / 2;
        const d = Math.sqrt(dx * dx + dy * dy);
        const rx = 30 * sign(dy);
        const ry = 90 * -sign(dx);
        const delay = d * 3 * randomRange(0.9, 1.2);
        fragment.canvas.style.zIndex = Math.floor(d).toString();
        tl.add(
          {
            targets: fragment.canvas,
            scale: {
              value: 0,
              duration: 1000,
            },
            opacity: {
              value: 0,
              duration: 400,
              delay: delay + 600,
            },
            left: canvasWidth / 2 - fragment.box.w / 2,
            top: canvasHeight / 2 - fragment.box.h / 2,
            rotateX: {
              value: rx,
              duration: 400,
              delay: delay + 600,
            },
            rotateY: {
              value: ry,
              duration: 400,
              delay: delay + 600,
            },
            easing: "cubicBezier(0.420, 0.000, 1.000, 1.000)",
            duration: 1000,
          },
          delay
        );
      });
      return tl;
    };
    const breakPage = async () => {
      containerRef.value && renderImage(containerRef.value);
      await anime({
        targets: imageRef.value,
        opacity: 0,
        duration: 2000,
      }).finished;
      await (containerRef.value &&
        shake({
          fragments,
          canvasWidth: canvasWidth.value,
          canvasHeight: canvasHeight.value,
          container: containerRef.value,
        }).finished);
      await (containerRef.value &&
        shatter({
          fragments,
          canvasWidth: canvasWidth.value,
          canvasHeight: canvasHeight.value,
          container: containerRef.value,
        }).finished);
      props.onFinished && props.onFinished();
    };
    return {
      containerRef,
      imageRef,
      showFullImage,
      imageStyle,
      breakPage,
    };
  },
};
</script>

<style>
.page-breaker {
  position: relative;
  width: 100%;
  height: 100%;
}

.page-breaker__fragment-canvas {
  position: absolute;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
}

.page-breaker__full-image {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>