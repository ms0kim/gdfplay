<template>
  <div class="fancy-portfolio-five lg-container top-border bottom-border pb-90 pt-90">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-md-6 col-sm-8">
          <div class="title-style-one white-vr text-center text-sm-start">
            <h2>{{ $t('home.news') }}</h2>
          </div>
        </div>
        <div class="col-lg-5 col-md-6 col-sm-4 d-flex justify-content-center justify-content-sm-end">
          <ul class="slider-arrows d-flex style-none">
            <li
              class="prev_case1 ripple-btn slick-arrow"
              style=""
            >
              <i class="flaticon-right-arrow" />
            </li>
            <li
              class="next_case1 ripple-btn slick-arrow"
              style=""
            >
              <i class="flaticon-right-arrow" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="slider-wrapper pt-80 md-pt-50">
      <div class="portfolio_slider_one">
        <swiper
          ref="mySwiper"
          class="clientSliderOne"
          :modules="modules"
          :loop="true"
          :breakpoints="breakpoints"
          :navigation="{ nextEl: '.prev_case1', prevEl: '.next_case1' }"
        >
          <swiper-slide
            v-for="item in portfolioItems"
            :key="item.id"
          >
            <div class="item">
              <div class="portfolio-block-three">
                <router-link
                  :to="`/gdfnews/${item.slug}`"
                  class="img-holder"
                >
                  <img
                    :src="media_img(item.img)"
                    alt=""
                    class="w-100 tran5s"
                    style="height:400px; object-fit:contain"
                  >
                </router-link>
                <div class="text">
                  <div class="tag">
                    {{ item.category_name }}
                  </div>
                  <h4>
                    <router-link :to="`/gdfnews/${item.slug}`">
                      {{ item.title }}
                    </router-link>
                  </h4>
                </div>
              </div> <!-- /.portfolio-block-three -->
            </div>
          </swiper-slide>
        </swiper>
      </div> <!-- /.portfolio_slider_one -->
    </div> <!-- /.slider-wrapper -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import portfolioMixin from "@/mixin/portfolio-mixin";
import urls from "@/api/urls";

export default {
  name: 'PortfolioSlider',
  components: {
    Swiper,
    SwiperSlide,
  },
  mixins:[portfolioMixin],
  setup() {
    return {
      modules: [Navigation],
    };
  },
  data () {
    return {
        breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      }
    }
  },
  methods: {
    media_img(img) {
      return urls.SERVER_URL + img
    }
  },
}
</script>