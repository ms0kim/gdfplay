<template>
  <div class="fancy-feature-eight pt-150 md-pt-100">
    <div class="container">
      <div class="title-style-four text-center mb-60 md-mb-40">
        <div class="row">
          <div class="col-lg-10 m-auto">
            <h6>{{ $t('home.service_name') }}</h6>
            <h2 style="line-height: 1.4em;">
              {{ $t('home.service_title1') }}
              <span>{{ $t('home.aisr') }} <img
                src="../../assets/images/shape/line-shape-2.svg"
                alt=""
              ></span>
              {{ $t('home.service_title2') }}
            </h2>
          </div>
        </div>
      </div>

      <div
        v-for="item in block_style_data"
        :key="item.id"
        class="block-style-twelve"
      >
        <div class="row">
          <div
            :class="`col-lg-6 col-md-8 ${item.m} mx-auto ${item.order_first ? item.order_first : ''}`"
            :data-aos="item.fade_first"
            data-aos-duration="1200"
          >
            <div class="illustration-holder d-flex align-items-center justify-content-center">
              <img
                :src="item.img"
                alt=""
              >
            </div>
            <a
              v-if="item.id===1"
              style="font-size: 8px;position:absolute;right: 20px;top: 72%;"
              href="https://www.freepik.com/free-vector/digital-device-mockup_4122505.htm"
            >Image by rawpixel.com on Freepik</a> 
          </div>
          <div
            :class="`col-lg-5 ${item.order_last ? item.order_last : ''}`" 
            :data-aos="item.fade_last"
            data-aos-duration="1200"
          >
            <div class="text-wrapper">
              <h6>{{ item.sm_text }}</h6>
              <h2 class="font-rubik title">
                {{ item.title }}
              </h2>
              <p> {{ item.subtitle }} </p>
              <a
                :href="item.url"
                class="theme-btn-one mt-3"
              >{{ item.btn }}</a>
            </div> <!-- /.text-wrapper -->
          </div>
        </div>
      </div> <!-- /.block-style-twelve -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'FancyFeatureTwo',
  data () {
    return {
      block_style_data : [
        {
          id:1,
          // img: new URL(`@/assets/images/gdflab/GDFPLAY_svg.png`, import.meta.url),
          img: new URL(`@/assets/images/gdflab/gdflab services.png`, import.meta.url),
          // img: new URL(`@/assets/images/assets/feature-img-08.png`, import.meta.url),
          order_first:'order-lg-last',
          order_last:'order-lg-first',
          fade_first:'fade-left',
          fade_last:'fade-right',
          m:'ms-auto',
          sm_text: this.$t('menu.mobile_sdk'),
          title: this.$t('home.sdk.title'),
          subtitle: this.$t('home.sdk.subtitle'),
          url:"/product/sdk",
          btn: this.$t('home.sdk.btn')
        },
        {
          id:2,
          // img:new URL(`@/assets/images/gdflab/Pikavue_3x.png`, import.meta.url),
          img:new URL(`@/assets/images/gdflab/pikavue_capture.png`, import.meta.url),
          // img: new URL(`@/assets/images/assets/feature-img-08.png`, import.meta.url),
          fade_first:'fade-right',
          fade_last:'fade-left',
          m:'me-auto',
          sm_text: this.$t('menu.pikavue'),
          title: this.$t('home.pikavue.title'),
          subtitle: this.$t('home.pikavue.subtitle'),
          url:"https://pikavue.com",
          btn:this.$t('home.pikavue.btn')
        },
        {
          id:3,
          // img:new URL(`@/assets/images/gdflab/GEnhancer_logo_1_000.png`, import.meta.url),
          img:new URL(`@/assets/images/gdflab/genhancer_capture.png`, import.meta.url),
          // img: new URL(`@/assets/images/assets/feature-img-08.png`, import.meta.url),
          order_first:'order-lg-last',
          order_last:'order-lg-first',
          fade_first:'fade-left',
          fade_last:'fade-right',
          m:'ms-auto',
          sm_text: this.$t('menu.genhancer'),
          title: this.$t('home.genhancer.title'),
          subtitle: this.$t('home.genhancer.subtitle'),
          url:"https://gdfenhancer.com",
          btn:this.$t('home.genhancer.btn')
        },
      ]
    }
  }
}
</script>