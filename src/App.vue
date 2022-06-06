<template>
  <div>
    <a-card
      title="动画组件集合"
      :tab-list="tabList"
      :defaultActiveTabKey="key"
      @tabChange="changeTab"
      class="content"
      bodyStyle="background-color: rgb(19 20 41);"
    >
      <beat-cone v-if="key === 'tab1'" />
      <light-run v-if="key === 'tab2'" />
      <ring-rotate v-if="key === 'tab3'" />
      <flash-title v-if="key === 'tab4'" />
      <hover-block v-if="key === 'tab5'" />
      <swiper-run v-if="key === 'tab6'" />
      <plate-hoist v-if="key === 'tab7'" />
      <slide-tab v-if="key === 'tab8'" />
    </a-card>
    <a-card title="炸金蛋">
      <page-breaker></page-breaker>
    </a-card>
  </div>
</template>
<script>
import { defineComponent, ref, onMounted } from "vue";

import BeatCone from "./components/BeatCone.vue";
import FlashTitle from "./components/FlashTitle.vue";
import HoverBlock from "./components/HoverBlock.vue";
import LightRun from "./components/LightRun.vue";
import PlateHoist from "./components/PlateHoist.vue";
import RingRotate from "./components/RingRotate.vue";
import SlideTab from "./components/SlideTab.vue";
import SwiperRun from "./components/SwiperRun.vue";

import PageBreaker from './components/break/pageBreaker'


export default defineComponent({
  components: {
    BeatCone,
    LightRun,
    RingRotate,
    FlashTitle,
    HoverBlock,
    SwiperRun,
    PlateHoist,
    SlideTab,
    PageBreaker
  },
  setup() {
    const tabList = [
      {
        key: "tab1",
        tab: "跳动方块",
      },
      {
        key: "tab2",
        tab: "走马灯",
      },
      {
        key: "tab3",
        tab: "环形组件",
      },
      {
        key: "tab4",
        tab: "闪电标题",
      },
      {
        key: "tab5",
        tab: "悬浮方块",
      },
      {
        key: "tab6",
        tab: "3d轮播图",
      },
      {
        key: "tab7",
        tab: "轮盘飞升",
      },
      {
        key: "tab8",
        tab: "闪动菜单",
      },
    ];
    const key = ref("tab1");
    const changeTab = (activeKey) => {
      key.value = activeKey;
    };
    return {
      tabList,
      key,
      changeTab
    };
  },
});
</script>

<style>
@import "app.css";
</style>
<style lang="less" scoped>
.content {
  padding: 0 20px 20px;
}
</style>