<template>
  <div class="main-page-wrapper overflow-hidden">
    <Header />
    <!-- portfolio details start -->
    <div class="portfolio-details-one mt-75 mb-150 md-mb-100">
      <div class="container">
        <div class="row">
          <div class="col-xl-11 m-auto">
            <div class="header text-center">
              <div class="tag">
                {{ news.category_name }}
              </div>
              <div class="title-style-ten">
                <h2>{{ news.title }}</h2>
              </div>
              <!-- <ul class="d-flex justify-content-center social-icon mt-35">
                <li>
                  <a href="#"><i
                    class="fa fa-facebook"
                    aria-hidden="true"
                  /></a>
                </li>
                <li>
                  <a href="#"><i
                    class="fa fa-twitter"
                    aria-hidden="true"
                  /></a>
                </li>
                <li>
                  <a href="#"><i
                    class="fa fa-linkedin"
                    aria-hidden="true"
                  /></a>
                </li>
              </ul> -->
            </div>
          </div>
        </div>

        <div class="main-content mt-75">
          <div class="d-flex justify-content-center">
            <img
              :src="media_img(news.img)"
              alt=""
              class="mb-90 md-mb-50"
            >
          </div>
          <div class="row">
            <div class="col-xl-11 m-auto">
              <div class="row">
                <div class="col-md-4 order-md-last">
                  <ul class="project-info clearfix ps-xl-5">
                    <li
                      v-for="item, idx in news.extras"
                      :key="idx"
                    >
                      <strong>{{ item.key }}</strong>
                      <span>{{ item.value }}</span>
                    </li>
                    <li>
                      <strong>{{ $t('news.written_at') }}</strong>
                      <span>{{ localTime(news.create_time) }}</span>
                    </li>
                    <li>
                      <strong>{{ $t('news.written_by') }}</strong>
                      <span>{{ news.writer }}</span>
                    </li>
                  </ul>
                </div>
                <div class="col-md-8 order-md-first">
                  <h4>{{ $t('news.overview') }}</h4>
                  <p>
                    {{ news.overview }}
                  </p>
                  <h4>{{ $t('news.context') }}</h4>
                  <p>
                    {{ news.context }}
                  </p>
                  <a
                    v-if="news.related_link_title"
                    :href="news.related_link_url"
                    class="theme-btn-eight"
                  >{{ news.related_link_title }}</a>
                </div>
              </div>
              <div class="top-border mt-70 pt-50 md-mt-40">
                <ul class="portfolio-pagination d-flex justify-content-between">
                  <li v-if="news.previous.title.length">
                    <router-link
                      :to="`/gdfnews/${news.previous.slug}`"
                      class="d-flex align-items-center"
                    >
                      <img
                        :src="media_img(news.previous.simg)"
                        alt=""
                        class="d-none d-lg-block"
                        style="max-width:140px;max-height: 100px"
                      >
                      <span class="d-inline-block ps-lg-4">
                        <span class="tp1 d-block">{{ $t('news.previous') }}</span>
                        <span class="tp2 d-block">{{ news.previous.title }}</span>
                      </span>
                    </router-link>
                  </li>
                  <li v-else>
                    <span class="d-inline-block ps-lg-4">
                      <span class="tp1 d-block">{{ $t('news.no_previous') }}</span>
                    </span>
                  </li>
                  <li v-if="news.next.title.length">
                    <router-link
                      :to="`/gdfnews/${news.next.slug}`"
                      class="d-flex flex-row-reverse align-items-center text-end"
                    >
                      <img
                        :src="media_img(news.next.simg)"
                        alt=""
                        class="d-none d-lg-block"
                        style="max-width:140px;max-height: 100px"
                      >
                      <span class="d-inline-block pe-lg-4">
                        <span class="tp1 d-block">{{ $t('news.next') }}</span>
                        <span class="tp2 d-block">{{ news.next.title }}</span>
                      </span>
                    </router-link>
                  </li>
                  <li v-else>
                    <span class="d-inline-block ps-lg-4">
                      <span class="tp1 d-block">{{ $t('news.no_next') }}</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- portfolio details end -->
    <Footer
      :dark_bg="true"
      :dark_btn="true"
    />
  </div>
</template>

<script>
import Header from '@/components/common/Headers/Header.vue';
import Footer from '@/components/common/Footers/Footer.vue';
import paths from '@/api/paths';
import gdflabApi from '@/api/api';
import urls from '@/api/urls';
import timeutil from '@/libs/timeutil';

export default {
  name:'PortfolioDetails',
  components: {
		Header,
		Footer
	},
  data() {
    return {
      news: {
        related_link_title: "",
        related_link_url: "",
        previous: {
          title: ""
        },
        next: {
          title: ""
        }
      }  
    }
  },
  watch: {
    $route () {
      this.get_news_detail()
    }
  },
  mounted() {
    this.get_news_detail()
  },
  methods: {
    get_news_detail() {
      gdflabApi
      .get(paths.NEWS_DETAIL(this.$route.params.news), {params:{language:this.$i18n.locale}})
      .then((response) => {
        this.news = response.data
      })
    },
    localTime(time) {
      return timeutil.getLocalTime(time)
    },
    media_img(img) {
      return urls.SERVER_URL + img
    }
  },
}
</script>