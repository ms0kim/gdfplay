<template>
  <div class="faqs-inner-page">
    <img
      src="@/assets/images/shape/66.svg"
      alt=""
      class="shapes shape-one"
    >
    <div class="shapes shape-two" />
    <div class="shapes shape-three" />
    <div class="shapes shape-four" />
    <div class="container">
      <div class="row">
        <div class="col-xl-11 m-auto">
          <div class="faqs-header pb-60 md-pb-50">
            <div class="row">
              <div class="col-lg-12">
                <div class="d-flex">
                  <img
                    src="@/assets/images/icon/48.svg"
                    alt=""
                    class="icon"
                  >
                  <div class="md-mb-30">
                    <h3>{{ $t('faq.faq') }}</h3>
                    <p class="collection-preview">
                      {{ $t('faq.faq_detail') }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> <!-- /.faqs-header -->


          <div class="all-faqs">
            <div class="faqs-all-qus">
              <div
                v-for="faq in faq_data"
                :key="faq.id"
                class="article-preview d-flex"
              >
                <router-link :to="`/help/faq-details/${faq.id}`">
                  <img
                    :src="faq.img"
                    alt=""
                    class="avatar-img"
                  >
                  <div>
                    <h3 class="font-rubik">
                      {{ faq.title }}
                    </h3>
                    <!-- eslint-disable vue/no-v-html -->
                    <div
                      class="avatar-info"
                      v-html="faq.info"
                    />
                  </div>
                </router-link>
              </div> <!-- /.article-preview -->
            </div> <!-- /.faqs-all-qus -->
          </div> <!-- /.all-faqs -->

          <div class="text-center more-faq-ask">
            <h3 class="mb-35 font-rubik">
              {{ $t('faq.no_answer') }}
            </h3>
            <router-link
              to="/help/contact-us"
              class="theme-btn-one"
            >
              {{ $t('menu.contact_us') }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import faqMixin from '@/mixin/faq-mixin';

export default {
  name: 'FaqArea',
  mixins: [faqMixin]
}
</script>