<template>
  <div class="clearfix">
    <Header />
    <DocArea />
    <Footer />
  </div>
</template>
  
<script>
import Header from '../../common/Headers/Header.vue';
import Footer from '../../common/Footers/Footer.vue';
import DocArea from './install-detail.vue';
  
  export default {
    name: 'QuickstartMain',
    components: { Header, DocArea, Footer },
  }
</script>