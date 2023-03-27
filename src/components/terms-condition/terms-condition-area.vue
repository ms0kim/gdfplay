<template>
  <div class="terms_and_policy">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a
                id="website-tab" 
                class="nav-link" 
                data-bs-toggle="tab" 
                style="cursor: pointer"
                :class="active == '#website'? 'active' : ''"
                @click="mvPage('#website')"
              >1. {{ $t('website_terms.title') }}</a>
            </li>
            <li class="nav-item">
              <a
                id="terms-tab" 
                class="nav-link" 
                data-bs-toggle="tab" 
                style="cursor: pointer"
                :class="active == '#terms'? 'active' : ''"
                @click="mvPage('#terms')"
              >2. {{ $t('terms_and_conditions.title') }}</a>
            </li>
            <li class="nav-item">
              <a
                id="privacy-tab" 
                class="nav-link" 
                data-bs-toggle="tab" 
                style="cursor: pointer"
                :class="active == '#privacy'? 'active' : ''"
                @click="mvPage('#privacy')"
              >3. {{ $t('privacy.title') }}</a>
            </li>
            <li class="nav-item">
              <a
                id="privacy-tab" 
                class="nav-link" 
                data-bs-toggle="tab" 
                style="cursor: pointer"
                :class="active == '#gdfplay'? 'active' : ''"
                @click="mvPage('#gdfplay')"
              >4. {{ $t('sdk_terms.menu_title') }}</a>
            </li>
            <!-- <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                href="#opt4"
              >4. Cookie policy</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                href="#opt5"
              >5. Third Party Links</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                href="#opt6"
              >6. GDPR</a>
            </li> -->
          </ul>
        </div>

        <div class="col-lg-8">
          <!-- Tab panes -->
          <div class="tab-content">
            <WebsiteTerms
              v-if="active=='#website'"
              id="website"
            />
            <TermsCondition
              v-else-if="active=='#terms'"
              id="terms"
            />
            <PrivacyPolicy
              v-else-if="active=='#privacy'"
              id="privacy"
            />
            <GDFPlayAgreement
              v-else-if="active=='#gdfplay'"
              id="privacy"
            />
          </div> <!-- /.tab-content -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WebsiteTerms from './website-terms-use.vue'
import TermsCondition from './terms-condition.vue'
import PrivacyPolicy from './privacy-policy.vue';
import GDFPlayAgreement from './gdfplay-sdk-agreement.vue'
export default {
  name: 'TermsConditionArea',
  components: {
    WebsiteTerms,
    TermsCondition,
    PrivacyPolicy,

    GDFPlayAgreement
  },
  data () {
    return {
      active: '#opt1',
    }
  },
  watch: {
    $route(to) {
      this.active = to.hash
    } 
  },
  mounted() {
    this.active = this.$route.hash
    console.log(this.active)
  },
  methods: {
    mvPage(to) {
      this.$router.push(`/terms${to}`)
    }
  }
}
</script>