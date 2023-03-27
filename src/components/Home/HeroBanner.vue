<template>
  <div class="hero-banner-two">
    <div class="container">
      <div class="row align-items-start justify-content-between">
        <div class="col-xl-4 col-lg-4 order-lg-first">
          <div class="hero-text-wrapper md-mt-50">
            <h1>
              {{ $t('home.title1') }}
              <span>
                {{ $t('home.title2') }}
                <img
                  src="../../assets/images/shape/line-shape-1.svg"
                  alt=""
                  class="cs-screen"
                >
              </span>
            </h1>
            <p class="pb-0 sub-text">
              {{ $t('home.subtitle') }}
            </p>
            <div class="illustration-holder text-center">
              <router-link to="/product/sdk">
                <a
                  alt=""
                  class="theme-btn-five mt-3 mx-auto shapes shape-one"
                >{{ $t('menu.mobile_sdk') }}</a>
              </router-link>
              
              <a
                href="https://pikavue.com"
                class="theme-btn-one mt-3 mx-auto shapes shape-two"
              >{{ $t('menu.pikavue') }}</a>

              <a
                href="https://gdfenhancer.com"
                class="theme-btn-two mt-3 mx-auto shapes shape-three"
                style="white-space:nowrap"
              >{{ $t('menu.genhancer') }}</a>
            </div>

            <!-- <div class="illustration-holder">
              
              <img
                src="@/assets/images/assets/ils-01.2.png"
                alt=""
                class="shapes shape-two"
              >
              <img
                src="@/assets/images/assets/ils-01.3.png"
                alt=""
                class="shapes shape-three"
              >
            </div> -->
            
            <!-- <form @submit.prevent="onSubmit">
              <input type="email" placeholder="Enter your email">
              <button>Get Started</button>
            </form>
            <ul class="list-item d-flex mt-20">
              <li>Live chat</li>
              <li>Ticketing</li>
              <li>14 days free trial</li>
            </ul> -->
          </div> <!-- /.hero-text-wrapper -->
        </div>
        <div class="col-lg-8 order-lg-last">
          <!-- <div class="illustration-holder"> -->
          <!-- <img src="@/assets/images/assets/ils-01.png" alt="" class="illustration_01"> -->
          <ImgComparisonSlider class="compare">
            <img
              slot="first"
              style="width: 100%"
              src="@/assets/images/gdflab/Rock_bic_crop.png"
            >
            <img 
              slot="second"
              style="width: 100%"
              src="@/assets/images/gdflab/Rock_sr_crop.png"
            >
          </ImgComparisonSlider>
          <!-- <img src="@/assets/images/assets/ils-01.1.png" alt="" class="shapes shape-one">
          <img src="@/assets/images/assets/ils-01.2.png" alt="" class="shapes shape-two">
          <img src="@/assets/images/assets/ils-01.3.png" alt="" class="shapes shape-three"> -->
          <!-- </div> -->
        </div>
      </div> <!-- /.row -->
    </div> <!-- /.container -->

    <!-- <div class="mt-65 md-mt-50 trusted-companies">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12">
            <p>Over <span>13,000+ Client</span> all over the world.</p>
          </div>
          <div class="col-12">
            <carousel
              :items-to-show="6"
              :wrap-around="true"
              :autoplay="4000" 
              :mouse-drag="true"
              :breakpoints="breakpoints"
              class="companies-logo-slider"
            >
              <slide
                v-for="logo in logoSliderData"
                :key="logo.id"
              >
                <div class="item">
                  <img
                    :src="logo.img"
                    alt=""
                  >
                </div>
              </slide>
            </carousel>
          </div>
        </div>
      </div>
    </div> /.trusted-companies -->
  </div>
</template>

<script>
// import { Carousel, Slide } from 'vue3-carousel';
import { ImgComparisonSlider } from '@img-comparison-slider/vue';

export default {
  name: "HeroBanner",
  components: {
    // Carousel,
    // Slide,
    ImgComparisonSlider
  },
  data() {
    return {
      logoSliderData: [
        {
          id: 1,
          img: new URL('@/assets/images/logo/logo-1.png', import.meta.url),
        },
        {
          id: 2,
          img: new URL(`@/assets/images/logo/logo-2.png`, import.meta.url),
        },
        {
          id: 3,
          img: new URL(`@/assets/images/logo/logo-3.png`, import.meta.url),
        },
        {
          id: 4,
          img: new URL(`@/assets/images/logo/logo-4.png`, import.meta.url),
        },
        {
          id: 5,
          img: new URL(`@/assets/images/logo/logo-5.png`, import.meta.url),
        },
        {
          id: 6,
          img: new URL(`@/assets/images/logo/logo-6.png`, import.meta.url),
        },
        {
          id: 7,
          img: new URL(`@/assets/images/logo/logo-7.png`, import.meta.url),
        },
        {
          id: 8,
          img: new URL(`@/assets/images/logo/logo-3.png`, import.meta.url),
        },
        {
          id: 9,
          img: new URL(`@/assets/images/logo/logo-1.png`, import.meta.url),
        },
      ],
      breakpoints: {
        0: {
          itemsToShow: 2,
          snapAlign: 'left'
        },
        576: {
          itemsToShow: 3,
          snapAlign: 'left'
        },
        768: {
          itemsToShow: 4,
          snapAlign: 'left'
        },
        992: {
          itemsToShow: 5,
          snapAlign: 'left'
        },
        1200: {
          itemsToShow: 6,
          snapAlign: 'left'
        }
      },
    }
  },
   methods: {
    onSubmit() {
      console.log('Submitted');
    },
  },
}
</script>

<style>
.compare {
  /* border-start-start-radius: 25% 40%; */
  /* border-end-end-radius: 25% 40%; */
  /* border-start-end-radius: 25% 40%; */
  /* border-end-start-radius: 25% 40%; */
  box-shadow: -1px 3px 16px 14px #f0dbaa;
  outline-offset: solid 1px white;;
  outline: solid 1px white;
  --divider-width: 2px;
}
@media (max-width: 991px) {
  .compare {
    display: none
  }
}
</style>