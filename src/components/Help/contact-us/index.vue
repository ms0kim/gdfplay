<template>
  <div class="main-page-wrapper p0 overflow-hidden">
    <Header />
    <FancyHero />
    <ContactStyle :contact_doc="true" />
    <!-- <ShortBanner :spacing="true" /> -->
    <Footer />
  </div>
</template>

<script>
import Header from "../../common/Headers/Header.vue";
import FancyHero from "./fancy-hero.vue";
import ContactStyle from "../../common/contact-style.vue";
// import ShortBanner from "../../Home/ShortBanner.vue";
import Footer from "../../common/Footers/Footer.vue";

export default {
  name: "ContactDocMain",
  components: {
    Header,
    FancyHero,
    ContactStyle,
    Footer,
    // ShortBanner,
  },
};
</script>