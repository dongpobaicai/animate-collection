<template>
  <div style="position: relative; height: 440px">
    <div class="circle-bg" :class="{ fadeInUp: start }">
      <div class="circle1" :class="{ rotateIn1: start }"></div>
      <div class="circle2" :class="{ rotateIn2: start }"></div>
      <div class="circle3">100人</div>
    </div>
    <a-button class="bottom-btn" @click="startAnimate">升起</a-button>
  </div>
</template>

<script>
export default {
  name: "PlateHoist",
  data() {
    return {
      start: false,
    };
  },
  methods: {
    async startAnimate() {
      // 开始动画效果
      this.start = false;
      setTimeout(() => {
        this.start = true;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.circle-bg {
  position: absolute;
  left: 50%;
  bottom: 30px;
  width: 200px;
  height: 200px;
  background-image: url(../assets/imgs/plate/circle-bg.png);
  background-size: 100% 100%;
  transform: translateX(-50%);
  .circle1 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 60%;
    background-image: url(../assets/imgs/plate/circle1.png);
    background-size: 100% 100%;
  }
  .circle2 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 60%;
    background-image: url(../assets/imgs/plate/circle2.png);
    background-size: 100% 100%;
  }
  .circle3 {
    position: absolute;
    width: 100%;
    top: 44%;
    text-align: center;
    color: yellow;
    font-weight: bold;
    font-size: 12px;
    animation: zoomOut 3s linear normal both;
  }
}

.bottom-btn {
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
}

.fadeInUp {
  animation: fadeInUp 4s linear 0s 1 normal both;
}

.rotateIn1 {
  animation: rotateIn 3s linear 0s 3 normal both;
}

.rotateIn2 {
  animation: rotateIn 1.3s linear 0s 6 normal both;
}

@keyframes rotateIn {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(1turn);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 1;
    width: 200px;
    height: 200px;
    transform: translate3d(-50%, 0, 0);
  }
  to {
    opacity: 1;
    width: 264px;
    height: 264px;
    transform: translate3d(-50%, -140px, 0);
  }
}

@keyframes zoomOut {
  0% {
    font-size: 12px;
  }
  100% {
    font-size: 18px;
  }
}
</style>