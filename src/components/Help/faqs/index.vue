<template>
  <div class="main-page-wrapper overflow-hidden">
    <Header />
    <HeroArea />
    <FaqArea />
    <Footer />
  </div>
</template>

<script>
import Header from '../../common/Headers/Header.vue';
import HeroArea from './hero-area.vue';
import FaqArea from './faq-area.vue';
import Footer from '../../common/Footers/Footer.vue';

export default {
    name: "FaqsMain",
    components: { Header,HeroArea,FaqArea,Footer }
}
</script>