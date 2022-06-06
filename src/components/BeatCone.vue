<template>
  <div class="beat-item">
    <div class="roate-item">
      <p>63%</p>
      <span>完成率</span>
    </div>
    <div class="cicle"></div>
    <p class="pm">No.1</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.beat-item {
  position: relative;
  width: 130px;
  height: 166px;
  background: url(../assets/imgs/beat/4.png) no-repeat bottom center;
  background-size: 90%;
  margin-top: 5%;
  margin-left: 2%;
  animation: float3 8s linear infinite;
}

.cicle {
  width: 100%;
  height: 50%;
  background: url(../assets/imgs/beat/cicle3.png) no-repeat center;
  background-size: 80%;
  position: relative;
}

.roate-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: 20px;
  top: 0;
  width: 90px;
  height: 90px;
  background: url(../assets/imgs/beat/yuan2-01.png) no-repeat center;
  background-size: 100%;
  box-sizing: border-box;
  color: #fff;
  animation: item-float 4s linear infinite;
}
.roate-item p {
  margin: 0;
  color: #fff;
}

.pm {
  text-align: center;
  color: #fff;
  font-size: 14px;
  margin: 0;
}

@keyframes float3 {
  0% {
    transform: translateY(0%);
  }

  50% {
    transform: translateY(50%);
  }

  100% {
    transform: translateY(0%);
  }
}
@keyframes item-float {
  0% {
    transform: translateY(-50%);
  }

  50% {
    transform: translateY(0%);
  }

  100% {
    transform: translateY(-50%);
  }
}
</style>