<template>
  <div class="header">
    <div class="header-title">物流大数据展示</div>
    <div class="header-img"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  position: relative;
  width: 475px;
  height: 52px;
}

.header-title {
  text-align: center;
  color: #ffffff;
  font-size: 17px;
  text-shadow: 0 0 14px #00d8ff;
  line-height: 1.05rem;
}

.header-img {
  background: url(../assets/imgs/title/head.gif) no-repeat center center;
  background-size: 100%;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 16px;
}
</style>