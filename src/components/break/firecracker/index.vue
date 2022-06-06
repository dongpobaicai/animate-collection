<template>
  <div v-if="showBoom" ref="maskRef" class="center mask" @click="startRun">
    <div ref="sparkRef" class="spark">
      <firecracker-svg></firecracker-svg>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import anime from "animejs";
import FirecrackerSvg from "./FirecrackerSvg.vue";

export default {
  name: "FireCracker",
  components: {
    FirecrackerSvg,
  },
  setup(props, context) {
    const maskRef = ref(null);
    const sparkRef = ref(null);
    const showBoom = ref(true);
    const displaying = ref(false);
    /**
     * 开始运行
     */
    const startRun = async () => {
      if (displaying.value) {
        return;
      }
      displaying.value = true;
      const body = window.document.querySelector("body");
      const { clientHeight, clientWidth } = body;
      const timeline = anime.timeline();
      timeline.add({
        targets: "#fuse",
        strokeDashoffset: (target) => -target.getTotalLength(),
        duration: 2000,
        begin: (animation) => {
          const target = animation.animatables[0].target;
          const length = target.getTotalLength();
          target.setAttribute("stroke-dasharray", length);
        },
        easing: "linear",
      });
      const motionPath = document.querySelector("#fuse");
      const path = anime.path(motionPath);
      timeline.add(
        {
          targets: "#spark",
          translateX: path("x"),
          translateY: path("y"),
          rotate: path("angle"),
          duration: 2000,
          easing: "linear",
        },
        "-=2000"
      );
      // 星星
      timeline.add(
        {
          targets: "#ember",
          transform: Array(21)
            .fill("scale(2.5)")
            .map((scale, index) => (index % 2 === 0 ? "scale(1.4)" : scale)),
          duration: 2000,
          easing: "easeInOutSine",
          direction: "alternate",
        },
        "-=2000"
      );
      // 点缀
      timeline.add(
        {
          targets: "#sparkles",
          transform: Array(21)
            .fill("scale(1.5)")
            .map((scale, index) => (index % 2 === 0 ? "scale(0)" : scale)),
          duration: 2000,
          easing: "easeInOutSine",
          direction: "alternate",
        },
        "-=2000"
      );
      // 爆炸
      timeline.add({
        targets: "#spark",
        scale: 4.5,
        opacity: 0,
        duration: 250,
        easing: "easeInOutSine",
      });
      timeline.add({
        targets: "#bomb",
        opacity: 0,
        duration: 250,
        easing: "easeInOutSine",
      });
      // 增加内容
      timeline.add(
        {
          targets: sparkRef.value,
          backgroundColor: {
            value: "#fff",
            duration: 300,
          },
          width: 1 * Math.max(clientHeight, clientWidth),
          height: 1 * Math.max(clientHeight, clientWidth),
          duration: 1000,
          complete: () => {
            context.emit("onBoom");
          },
        },
        "+=10"
      );
      // 增加背景
      timeline.add(
        {
          targets: maskRef.value,
          backgroundColor: "rgba(0,0,0,0.8)",
          duration: 800,
          easing: "easeInOutCirc",
        },
        "-=1000"
      );
      timeline.add({
        targets: sparkRef.value,
        width: 0,
        height: 0,
        opacity: 0,
        duration: 3000,
        easing: "easeInOutCirc",
      });
      timeline.add(
        {
          targets: maskRef.value,
          backgroundColor: "rgba(0,0,0,0)",
          duration: 3000,
          opacity: 0,
          easing: "easeInOutCirc",
        },
        "-=3000"
      );

      await timeline.finished;
      showBoom.value = false;
    };
    return {
      maskRef,
      sparkRef,
      showBoom,
      startRun,
    };
  },
};
</script>

<style scoped>
.spark {
  position: fixed;
  display: inline-block;
  border-radius: 50%;
}
</style>