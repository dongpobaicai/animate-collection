<template>
  <div class="container">
    <fire-cracker
      v-if="!finished"
      class="center"
      @onBoom="onBoom"
    ></fire-cracker>
    <img-break
      v-if="clientHeight && clientWidth && !finished"
      ref="breaker"
      :canvas-width="clientWidth"
      :canvas-height="clientHeight"
      img-url="/juejin.png"
      :on-finished="onFinished"
    ></img-break>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import FireCracker from "../firecracker";
import ImgBreak from "../imgBreak";

export default {
  name: "PageBreaker",
  components: {
    FireCracker,
    ImgBreak,
  },
  setup() {
    const body = window.document.querySelector("body");
    const { clientHeight, clientWidth } = body;
    const finished = ref(false);
    const breaker = ref(null);

    const onRepeat = () => {
      finished.value = false;
    };
    const onBoom = () => {
      breaker.value.breakPage();
    };
    const onFinished = () => {
      finished.value = true;
    };
    return {
      finished,
      breaker,
      onRepeat,
      onBoom,
      onFinished,
      clientHeight,
      clientWidth,
    };
  },
};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  padding: 0;
  overflow: hidden;
}
.center-btn {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  transform: translateY(-50%);
}
.center {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}
</style>