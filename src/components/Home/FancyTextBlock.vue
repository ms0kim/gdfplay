<template>
  <div class="fancy-text-block-sixteen mt-200 md-mt-80">
    <div class="container">
      <div class="row">
        <div class="col-xl-12 m-auto">
          <div class="title-style-four text-center mb-80 md-mb-30">
            <h2>
              How
              <span> GDFLAB's <img
                src="../../assets/images/shape/line-shape-3.svg"
                alt=""
              ></span>
              Mobile SDK Work?
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
          img: require(`@/assets/images/assets/feature-img-12.png`),
        },
        {
          id: 2,
          img: require(`@/assets/images/assets/feature-img-12.png`),
        },
        {
          id: 3,
          img: require(`@/assets/images/assets/feature-img-12.png`),
        },
      ],
      blockData:[
        {
          id:1,
          title:'Compress',
          subtitle:"Compressing media files from GDFLAB's transcoding server."
        },
        {
          id:2,
          title:'Transmit',
          subtitle:"Transmitting highly compressed media files over the Internet."
        },
        {
          id:3,
          title:'Play',
          subtitle:'Playing restored media files in real time with our Mobile SDK.'
        },
      ]
    };
  },
}
</script>