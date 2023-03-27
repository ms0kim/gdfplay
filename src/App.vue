<template>
  <router-view />
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";


onMounted(() => {
  AOS.init({
    duration: 1200,
  });
});
</script>

