<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="main-page-wrapper overflow-hidden">
    <Header />
    <HeroArea />
    <!-- faq details area start -->
    <div class="faqs-inner-page">
      <img
        src="../../assets/images/shape/66.svg"
        alt=""
        class="shapes shape-one"
      >
      <div class="shapes shape-two" />
      <div class="shapes shape-three" />
      <div class="shapes shape-four" />
      <div class="container">
        <div class="row">
          <div class="col-xl-11 m-auto">
            <div class="all-faqs">
              <div class="faqs-all-qus md-m0">
                <div class="article-preview">
                  <div class="d-flex">
                    <img
                      :src="faq.img"
                      alt=""
                      class="avatar-img"
                    >
                    <div>
                      <h3 class="font-rubik">
                        {{ faq.title }}
                      </h3>
                      <div
                        class="avatar-info"
                        v-html="faq.info"
                      />
                    </div>
                  </div>

                  <div class="article-details">
                    <p>
                      To activate 2FA you will need an authenticator app installed on your smartphone. This could be
                      Google Authenticator or Authy, both available for iOs and Android.
                    </p>
                    <ul class="list-meta">
                      <li>Go to ‘Account settings’ from your Ticket Tailor dashboard.</li>
                      <li>Under the heading ‘Two-factor authentication’ click the button labelled ‘Activate 2FA’.</li>
                      <li>
                        From your authenticator app on your phone, add a new login and it will ask you to scan the QR
                        code shown here. Scan the QR code.
                      </li>
                      <li>The app will generate a code. Enter that code in the box below and click 'Activate 2FA'.</li>
                    </ul>
                    <p>
                      <b>Please note:</b> If you lose access to your 2FA app you will need to contact customer support
                      to go through a security questionnaire and have your account unlocked.
                    </p>

                    <div class="reaction-wrapper">
                      <h4>Did this answer your question?</h4>
                      <div class="d-flex align-items-center justify-content-center">
                        <button>
                          <img
                            src="../../assets/images/icon/happy.svg"
                            alt=""
                          >
                        </button>
                        <button>
                          <img
                            src="../../assets/images/icon/sad.svg"
                            alt=""
                          >
                        </button>
                        <button>
                          <img
                            src="../../assets/images/icon/surprised.svg"
                            alt=""
                          >
                        </button>
                      </div>
                    </div> <!-- /.reaction-wrapper -->
                  </div> <!-- /.article-details -->
                </div> <!-- /.article-preview -->
              </div> <!-- /.faqs-all-qus -->
            </div> <!-- /.all-faqs -->
          </div>
        </div>
      </div>
    </div>
    <!-- faq details area end -->
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/common/Headers/Header.vue';
import HeroArea from '@/components/Help/faqs/hero-area.vue';
import Footer from '@/components/common/Footers/Footer.vue';
import faqMixin from '@/mixin/faq-mixin';

export default {
  name: 'DynamicFaqDetails',
  components: { Header, HeroArea, Footer },
  mixins: [faqMixin],
  data() {
    return {
      id: this.$route.params.id,
      faq: {}
    }
  },
  created() {
    this.getFaq(this.id);
  },
  methods: {
    getFaq(faqId) {
      this.faq = this.faq_data.find(item => item.id == faqId);
    }
  }
}
</script>