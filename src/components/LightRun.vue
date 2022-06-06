<template>
  <ul class="line">
    <li class="arrow-start"></li>
    <li class="rect-item"></li>
    <li class="rect-item"></li>
    <li class="rect-item"></li>
    <li class="rect-item"></li>
    <li class="rect-item"></li>
    <li class="rect-item"></li>
    <li class="rect-item"></li>
    <li class="rect-item"></li>
    <li class="rect-item"></li>
    <li class="rect-item"></li>
    <li class="arrow-end"></li>
  </ul>
</template>

<script>
import { onBeforeUnmount, onMounted } from 'vue'

export default {
  setup() {
    let interval = null
    onMounted(() => {
      const items = document.getElementsByClassName('rect-item')
      var i = 0;
      interval = window.setInterval(function() {
        if (i === 10) {
          i = 0
        }
        for(var j=0;j<items.length;j++) {
          items[j].style.opacity = ((j - i) * 1 + 10) % 10 / 10
        }
        i++;
      }, 100)
    })
    onBeforeUnmount(() => {
      interval && clearInterval(interval)
    })
  }
};
</script>

<style lang="less" scoped>
.line {
  width: 18px;
}

.arrow-start {
  width: 0;
  border-top: 8px solid #ff7a9a;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  margin: 0 auto;
}

.arrow-end {
  width: 0;
  border-bottom: 8px solid #ff7a9a;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  margin: 0 auto;
}

.rect-item {
  width: 4px;
  height: 11px;
  background-color: #ff7a9a;
  margin: 1.5px auto;
}
</style>