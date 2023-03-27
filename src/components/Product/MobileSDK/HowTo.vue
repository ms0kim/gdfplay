<template>
  <div class="fancy-text-block-sixteen pt-100 md-mt-80">
    <div class="container">
      <div class="row">
        <div class="col-xl-12 m-auto">
          <div class="title-style-four text-center mb-80 md-mb-30">
            <h2>
              {{ $t('product.sdk.how-title1') }}
              <span> {{ $t('product.sdk.how-title2') }} <img
                src="@/assets/images/shape/line-shape-3.svg"
                alt=""
              ></span>
              {{ $t('product.sdk.how-title3') }}
            </h2>
          </div>
        </div>
      </div>
      <carousel
        :items-to-show="1"
        :wrap-around="true"
        :autoplay="4000" 
        :mouse-drag="true"
        class="img-slick-slider"
      >
        <slide
          v-for="testimonial in testimonialData"
          :key="testimonial.id"
        >
          <div class="item">
            <img
              :src="testimonial.img"
              alt=""
            >
          </div>
        </slide>

        <template #addons>
          <pagination />
          <p style="font-size: 10px; text-align: right">
            Image by <a href="https://www.freepik.com/author/mamewmy">mamewmy</a> / <a href="https://www.flaticon.com/authors/freepik">freepik</a>
          </p>
        </template>
      </carousel>

      <div class="row justify-content-between">
        <div
          v-for="item in blockData"
          :key="item.id"
          class="col-lg-3 col-md-4"
        >
          <div class="block-style-eleven mt-40">
            <div class="num font-rubik">
              0{{ item.id }}
            </div>
            <div class="title">
              {{ item.title }}
            </div>
            <p class="font-rubik">
              {{ item.subtitle }}
            </p>
          </div> <!-- /.block-style-eleven -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide, Pagination } from 'vue3-carousel';

export default {
  name: 'FancyTextBlock',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      testimonialData: [
        {
          id: 1,
          img: new URL(`@/assets/images/gdflab/process1.png`, import.meta.url),
        },
        {
          id: 2,
          img: new URL(`@/assets/images/gdflab/process2.png`, import.meta.url),
        },
        {
          id: 3,
          img: new URL(`@/assets/images/gdflab/process3.png`, import.meta.url),
        },
      ],
      blockData:[
        {
          id:1,
          title:this.$t('product.sdk.how-work.0.title'),
          subtitle:this.$t('product.sdk.how-work.0.desc')
        },
        {
          id:2,
          title:this.$t('product.sdk.how-work.1.title'),
          subtitle:this.$t('product.sdk.how-work.1.desc')
        },
        {
          id:3,
          title:this.$t('product.sdk.how-work.2.title'),
          subtitle:this.$t('product.sdk.how-work.2.desc')
        },
      ]
    };
  },
}
</script>