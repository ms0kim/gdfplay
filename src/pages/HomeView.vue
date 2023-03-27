<template>
  <HomeIndex />
</template>

<script>
import HomeIndex from '../components/Home/index';
import { useI18n } from 'vue-i18n'

export default {
  name:'HomeView',
  components:{
    HomeIndex
  },
  setup() {
    const { t } = useI18n() // use as global scope
    return { t }
  }
}
</script>