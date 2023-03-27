<template>
  <footer class="theme-footer-three pt-100">
    <div class="top-footer">
      <div class="container">
        <div class="row justify-content-between">
          <div
            class="col-lg-2 col-12 footer-about-widget"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <router-link
              to="/"
              class="logo"
            >
              <img
                src="../../../assets/images/logo/GDFLAB_svg.svg"
                alt=""
              >
            </router-link>
          </div> <!-- /.about-widget -->

          <div
            class="col-lg-4 col-md-4 footer-list"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <h5 class="footer-title">
              {{ $t('footer.about_us') }}
            </h5>
            <ul>
              <!-- <li><router-link to="/about-us-doc">{{ $t('footer.about_us') }}</router-link></li> -->
              <!-- <li><a href="#">Work Portfolio</a></li> -->
              <!-- <li><a href="#">{{ $t('footer.team') }}</a></li>
              <li><a href="#">{{ $t('footer.pricing_plan') }}</a></li>
              <li><a href="/help/faqs">{{ $t('menu.faq') }}</a></li> -->
              <li><small>{{ $t('common.name') }} <strong class="fot-val no-wrap">{{ $t('common.gdflab_full') }}</strong></small></li>
              <li><small>{{ $t('footer.ceo_key') }} <strong class="fot-val no-wrap">{{ $t('footer.ceo_value') }}</strong></small></li>
              <li><small>{{ $t('footer.regis_num_key') }} <strong class="fot-val no-wrap">173-87-01007</strong></small></li>
              <li><small>{{ $t('footer.sale_regis_key') }} <strong class="fot-val no-wrap">2022-서울마포-3279</strong></small></li>
              <li />
            </ul>
          </div> <!-- /.footer-list -->

          <div
            class="col-lg-4 col-md-4 address-list"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="150"
          >
            <h5 class="footer-title">
              {{ $t('footer.contact_info') }}
            </h5>
            <p class="font-rubik break-word">
              {{ $t('footer.gdf_address') }}
            </p>
            <ul class="info">
              <li><a href="mailto:operation@gdflab.com">operation@gdflab.com</a></li>
              <li>
                <a
                  href="tel:+82260861862"
                  class="mobile-num"
                >+82) 2. 6086. 1862</a>
              </li>
            </ul>
            <ul class="social-icon d-flex pt-15">
              <li><a href="https://www.facebook.com/GDFLab/"><i class="fa fa-facebook" /></a></li>
              <!-- <li><a href="https://www.instagram.com/gdf_lab/"><i class="fa fa-instagram"></i></a></li> -->
              <li><a href="https://www.linkedin.com/company/gdflab/"><i class="fa fa-linkedin" /></a></li>
              <li><a href="https://www.youtube.com/channel/UCJhfLRhiWLR7JZzciXvNreA"><i class="fa fa-youtube" /></a></li>
            </ul>
          </div> <!-- /.footer-list -->

          <div
            class="col-lg-2 col-md-4 footer-list"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="50"
          >
            <h5 class="footer-title">
              {{ $t('footer.services') }}
            </h5>
            <ul>
              <li><a href="https://pikavue.com">{{ $t('menu.pikavue') }}</a></li>
              <li><a href="https://gdfenhancer.com">{{ $t('menu.genhancer') }}</a></li>
              <li>
                <router-link to="/product/sdk">
                  <a>{{ $t('menu.mobile_sdk') }}</a>
                </router-link>
              </li>
              <!-- <li><a href="#">{{ $t('') }}</a></li> -->
              <!-- <li><a href="#">Content</a></li> -->
            </ul>
          </div> <!-- /.footer-list -->
        </div> <!-- /.row -->
      </div> <!-- /.container -->
    </div> <!-- /.top-footer -->

    <div class="container">
      <div class="bottom-footer-content">
        <div class="row">
          <div class="col-lg-12 ms-auto">
            <div class="d-md-flex align-items-center justify-content-between">
              <ul>
                <li>
                  <a> {{ $t( 'footer.language' ) }} &nbsp; </a>
                </li>
                <li>
                  <select
                    v-model="crt_locale"
                    class="form-select"
                    @change="setLocale()"
                  >
                    <option
                      v-for="locale in $i18n.availableLocales"
                      :key="`locale-${locale}`"
                      :value="locale"
                    >
                      <p>{{ locale }}</p>
                    </option>
                  </select>
                </li>
              </ul>
              <ul
                class="order-md-last"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="50"
                data-aos-anchor=".theme-footer-three"
              >
                <li>
                  <router-link to="/terms#privacy">
                    <a>{{ $t('footer.privacy') }}</a>
                  </router-link>
                </li>
                <!-- <li><a href="#">Security</a></li> -->
                <li>
                  <router-link to="/terms#website">
                    <a>{{ $t('footer.terms') }}</a>
                  </router-link>
                </li>
              </ul>
              <p
                class="order-md-first"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="50"
                data-aos-anchor=".theme-footer-three"
              >
                Copyright @2022 {{ $t('common.gdflab_full') }}
              </p>
            </div>
          </div>
        </div>
      </div> <!-- /.bottom-footer -->
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterThree',
  data() {
    return {
      crt_locale: ""
    }
  },
  mounted() {
    this.crt_locale = this.$i18n.locale
  },
  methods: {
    setLocale() {
      console.log('onchange')
      const locale = this.crt_locale
      this.$store.commit('saveLang', locale)
      this.$i18n.locale = locale
      location.reload()
    }
  },
}
</script>

<style>
.break-word {
  word-break: keep-all;
}
.fot-val {
  padding-left: 5px;
}
.no-wrap {
  white-space: nowrap;
}
</style>