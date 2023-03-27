<template>
  <div class="fancy-hero-one">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 m-auto">
          <router-link to="/help/faqs">
            <h2 class="font-rubik">
              {{ $t('faq.title') }}
            </h2>
          </router-link>
          <p class="sub-heading">
            {{ $t('faq.context') }}
          </p>
        </div>
      </div>
      <form
        class="search-form"
        @submit.prevent="onSubmit"
      >
        <input
          type="text"
          :placeholder="$t('search.placeholder')"
        >
        <button>
          <img
            src="@/assets/images/icon/47.svg"
            alt=""
          >
        </button>
      </form>
    </div>
    <div class="bubble-one" />
    <div class="bubble-two" />
    <div class="bubble-three" />
    <div class="bubble-four" />
    <div class="bubble-five" />
    <div class="bubble-six" />
  </div>
</template>

<script>
export default {
  name: 'HeroArea',
  methods: {
    onSubmit() {
      console.log('Submitted');
    },
  },
}
</script>