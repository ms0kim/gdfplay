<template>
  <div class="main-page-wrapper overflow-hidden">
    <Header />
    <TermsConditionArea />
    <Footer />
  </div>
</template>

<script>
import Header from '../common/Headers/Header.vue';
import TermsConditionArea from './terms-condition-area.vue';
import Footer from '../common/Footers/Footer.vue'

export default {
  name:'TermsConditionMain',
  components: { Header, TermsConditionArea,Footer },
}
</script>