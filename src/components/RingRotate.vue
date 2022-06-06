<template>
  <div class="ring-main">
    <a-card title="样式一" class="ring-card">
      <div class="ring-box style1">
        <span>今日抓拍</span>
        <span>1245条</span>
      </div>
    </a-card>
    <a-card title="样式二" class="ring-card">
      <div class="ring-box style2">
        <span>今日抓拍</span>
        <span>1245条</span>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.ring-main {
  display: flex;
  .ring-card {
    width: 400px;
    background-color: transparent;
    /deep/.ant-card-head-title {
      color: #fff;
    }
  }
}
.ring-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 155px;
  height: 155px;
  position: relative;
}

.ring-box::before {
  width: 100%;
  height: 100%;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background-size: 100% 100%;
  animation: animation-rotate 4s linear infinite;
}
.style1.ring-box::before {
  background: url(../assets/imgs/ring/bqzlbg001.png) no-repeat;
}
.style2.ring-box::before {
  background: url(../assets/imgs/ring/bqzlbg002.png) no-repeat;
}

.ring-box > span:first-child {
  font-size: 18px;
  font-weight: bold;
}
.style1.ring-box > span:first-child {
  color: #9df9fc;
}
.style2.ring-box > span:first-child {
  color: #d3fca0;
}
.ring-box > span:last-child {
  color: #ffffff;
  font-size: 14px;
  margin-top: 10px;
}

@keyframes animation-rotate {
  0% {
    transform: rotatez(360deg);
  }

  100% {
    transform: rotatez(0deg);
  }
}
</style>