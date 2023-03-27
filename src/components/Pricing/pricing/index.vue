<template>
  <div class="main-page-wrapper p0 overflow-hidden">
    <Header />
    <PricingSection />
    <!-- <TextBlock /> -->
    <!-- <UseAbleTools /> -->
    <!-- <FaqArea /> -->
    <!-- <ShortBanner/> -->
    <RequestSdkStyle />
    <Footer />
  </div>
</template>

<script>
import Header from '../../common/Headers/Header.vue';
import PricingSection from './pricing-section.vue';
// import TextBlock from './text-block.vue';
// import UseAbleTools from '../../common/use-able-tools.vue';
// import FaqArea from './faq-area.vue';
// import ShortBanner from '../../Home/ShortBanner.vue';
import RequestSdkStyle from "../../common/request-sdk-style.vue";
import Footer from '../../common/Footers/Footer.vue';

export default {
  name:'PricingCsMain',
  components: { 
    Header, 
    PricingSection, 
    RequestSdkStyle,
    // TextBlock, 
    // UseAbleTools, 
    // FaqArea, 
    // ShortBanner, 
    Footer }
}
</script>