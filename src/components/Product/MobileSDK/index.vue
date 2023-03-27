<template>
  <div class="main-page-wrapper home-three">
    <Header />
    <HeroBanner />
    <!-- <FancyFeature /> -->
    <FancyTextBlock />
    <Compare />
    <HowWork />
    <!-- <FancyFeatureTwo /> -->
    <!-- <ClientFeedback /> -->
    <!-- <UseableTools /> -->
    <!-- <Pricing/> -->
    <!-- <FaqArea /> -->
    <!-- <ShortBanner /> -->
    <FloatBtn />
    <Footer />
  </div>
</template>

<script>
import Header from '../../common/Headers/Header.vue';
import HeroBanner from './HeroBanner.vue';
// import FancyFeature from './FancyFeature.vue';
import FancyTextBlock from './FancyTextBlock.vue'
import HowWork from './HowTo.vue';
import Compare from './compare.vue';
// import FancyFeatureTwo from './FancyFeatureTwo.vue';
// import ClientFeedback from './ClientFeedback.vue';
// import UseableTools from './UseableTools.vue';
// import FaqArea from './FaqArea.vue';
// import ShortBanner from './ShortBanner.vue';
import FloatBtn from '../../common/float-btn.vue'
import Footer from '../../common/Footers/Footer.vue';
// import Pricing from '../Pricing/pricing/pricing-section.vue';

export default {
  name: "DocLandingMain",
  components: {
    Header,
    HeroBanner,
    // FancyFeature,
    HowWork,
    FancyTextBlock,
    Compare,
    FloatBtn,
    // FancyFeatureTwo,
    // ClientFeedback,
    // UseableTools,
    // FaqArea,
    // ShortBanner,
    Footer,
    // Pricing,
},

};
</script>