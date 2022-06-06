<template>
  <ul class="slide">
    <li
      v-for="tab in tabList"
      :key="tab.label"
    >
      <a :class="{ active: tab.isOver }" href="#">
        <b>{{ tab.value }}</b>
        <span>{{ tab.label }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const tabList = ref([
      {
        label: "无线专业",
        value: 68,
      },
      {
        label: "交换专业",
        value: 69,
      },
      {
        label: "数据专业",
        value: 70,
      },
      {
        label: "输出专业",
        value: 71,
      },
    ]);
    const overEvent = (tab) => {
      tab.isOver = true;
    };
    const outEvent = (tab) => {
      tab.isOver = false;
    };
    return {
      tabList,
      overEvent,
      outEvent,
    };
  },
});
</script>

<style lang="less" scoped>
.slide {
  width: 120px;
  overflow: visible;
  display: block;
  li {
    font-size: 12px;
    display: block;
    margin-bottom: 1px;
    a {
      font-family: "electronicFont";
      transition: width ease 0.3s;
      display: block;
      border-top: 1px solid transparent;
      height: 26px;
      line-height: 26px;
      color: #fff;
      b {
        float: left;
        display: inline-block;
        height: 26px;
        line-height: 26px;
        background: url(../assets/imgs/tab/bg03submenu.png) 1px 50% no-repeat
          #0050b3;
        min-width: 14px;
        padding: 0 8px;
      }
      span {
        left: -140px;
        padding-left: 5px;
        padding-right: 10px;
        float: left;
        white-space: nowrap;
        font-family: "microsoft yahei", simhei;
        height: 26px;
        line-height: 26px;
        background: #0050b3;
        position: relative;
      }
    }
    &:hover a > span {
      left: 0;
      display: block;
      background: #0067e6;
      animation: bounceInRight 0.2s 0.2s ease both;
    }
    &:hover a.active > span {
      animation: all 0s 0s ease both;
    }
  }
}

.slide li:nth-child(1) a {
  animation: inout1 0.1ms infinite;
}
.slide li:nth-child(2) a {
  animation: inout2 0.2ms infinite;
}
.slide li:nth-child(3) a {
  animation: inout3 0.3ms infinite;
}
.slide li:nth-child(4) a {
  animation: inout4 0.2ms infinite;
}

.slide li a:hover b,
.slide li a.active b {
  background: url(../assets/imgs/tab/bg03submenu.png) 1px 50% no-repeat #0067e6;
}
.slide li a:hover span,
.slide li a.active span {
  left: 0;
  display: block;
  background: #0067e6;
}

.slide li a:hover span {
  animation: bounceInLeft 0.2s 0.2s ease both;
}

@keyframes bounceInLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  60% {
    opacity: 1;
    transform: translateX(0px);
  }
  80% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes inout1 {
  0% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

@keyframes inout2 {
  0% {
    opacity: 0.7;
  }
  100% {
    opacity: 9;
  }
}
@keyframes inout3 {
  0% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes inout4 {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.8;
  }
}
</style>