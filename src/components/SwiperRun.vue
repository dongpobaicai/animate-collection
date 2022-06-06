<template>
  <div>
    <a-card title="不规则轮播图" class="swiper-card">
      <div class="certify1">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../assets/imgs/swiper/li2.png" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="../assets/imgs/swiper/li3.png" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="../assets/imgs/swiper/li4.png" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="../assets/imgs/swiper/li5.png" alt="" />
            </div>
          </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </a-card>
    <a-card title="3d方块切换" class="swiper-card">
      <div class="certify2">
        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../assets/imgs/swiper/nature-1.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="../assets/imgs/swiper/nature-2.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="../assets/imgs/swiper/nature-3.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="../assets/imgs/swiper/nature-4.jpg" />
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </a-card>
    <a-card title="3d滚动切换" class="swiper-card">
      <h3 style="color: #fff;">这里直接demo展示</h3>
      <iframe style="width: 100%; height: 500px;" src="https://www.swiper.com.cn/demo/240-effect-coverflow.html" frameborder="0"></iframe>
    </a-card>
    <a-card title="3D翻转切换" class="swiper-card">
      <iframe style="width: 100%; height: 500px;" src="https://www.swiper.com.cn/demo/250-effect-flip.html" frameborder="0"></iframe>
    </a-card>
    <a-card title="卡片切换" class="swiper-card">
      <iframe style="width: 100%; height: 500px;" src="https://www.swiper.com.cn/demo/255-effect-cards.html" frameborder="0"></iframe>
    </a-card>
    <a-card title="多种创意切换" class="swiper-card">
      <iframe style="width: 100%; height: 500px;" src="https://www.swiper.com.cn/demo/257-effect-creative.html" frameborder="0"></iframe>
    </a-card>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      new window.Swiper(".certify1 .swiper-container", {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        navigation: {
          nextEl: ".certify1 .swiper-button-next",
          prevEl: ".certify1 .swiper-button-prev",
        },
      });

      new window.Swiper(".certify2 .swiper", {
        effect: "cube",
        grabCursor: true,
        autoplay: true,
        loop: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        pagination: {
          el: ".certify2 .swiper-pagination",
        },
      });
    });
  },
};
</script>

<style lang="less" scoped>
.swiper-card {
  background-color: transparent;
  /deep/.ant-card-head-title {
    color: #fff;
  }
}
.certify1 {
  position: relative;
  width: 600px;
  margin: 0 auto;

  .swiper-container {
    width: 100%;
  }
  .swiper-slide {
    text-align: center;
    width: 100px;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    transition: 300ms;
    transform: scale(0.8);
    opacity: 0.6;
    & > img {
      display: block;
      width: 100%;
    }
  }
  .swiper-slide-active,
  .swiper-slide-duplicate-active {
    transform: scale(1);
    opacity: 1;
  }
  .swiper-button-prev {
    left: -70px;
    width: 45px;
    height: 45px;
    background: url(../assets/imgs/swiper/left.png) no-repeat;
    background-size: 100%;
  }
  .swiper-button-next {
    right: -60px;
    width: 45px;
    height: 45px;
    background: url(../assets/imgs/swiper/right.png) no-repeat;
    background-size: 100%;
  }
}
.certify2 {
  height: 200px;
  .swiper {
    width: 150px;
    height: 150px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -75px;
    margin-top: -75px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
}
</style>