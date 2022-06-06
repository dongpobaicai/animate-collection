<template>
  <div class="hover-block">
    <p
      style="
        width: 100%;
        height: 100%;
        line-height: 278px;
        color: #fff;
        text-align: center;
      "
    >
      鼠标悬浮上去
    </p>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.hover-block {
  position: relative;
  width: 400px;
  height: 278px;
  border: 1px solid #0bc4e9;
  background: rgba(0, 72, 115, 0.28);
  transition: all 1s;
}
.hover-block:hover {
  box-shadow: -5px 0px 2px rgba(255, 255, 255, 0.1),
    /*左边阴影*/ 0px -5px 2px rgba(255, 255, 255, 0.1),
    /*上边阴影*/ 5px 0px 2px rgba(255, 255, 255, 0.1),
    /*右边阴影*/ 0px 5px 2px rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
}
.hover-block::before {
  content: "";
  position: absolute;
  width: 80%;
  height: 100%;
  bottom: -1px;
  top: -1px;
  left: 10%;
  border-bottom: 1px solid #007297;
  border-top: 1px solid #007297;
  transition: all 0.5s;
  box-sizing: content-box;
}
.hover-block:hover::before {
  width: 0;
}
.hover-block::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 80%;
  left: -1px;
  right: -1px;
  top: 10%;
  border-left: 1px solid #007297;
  border-right: 1px solid #007297;
  transition: all 0.5s;
  box-sizing: content-box;
}
.hover-block:hover::after {
  height: 0;
}
</style>