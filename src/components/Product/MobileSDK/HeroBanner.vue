<template>
  <div class="hero-banner-ten d-flex align-items-center">
    <div
      class="d-flex justify-content-center align-items-center bg-con shapes"
      style="width:100%;"
    >
      <img
        src="@/assets/images/assets/ils_17.svg"
        alt=""
        class="bg-trans round-bg"
      >
    </div>
    <div class="container"> 
      <div class="row">
        <div class="col-xl-9 col-lg-11 col-md-8 mb-25 mx-auto">
          <h3
            class="font-rubik"
          >
            {{ $t('product.sdk.title') }}<br>
          </h3>
        </div>
        <div class="col-xl-9 col-lg-11 col-md-8 m-auto">
          <h1
            class="font-rubik"
          >
            {{ $t('product.sdk.ecotitle') }}<br>
          </h1>
        </div>
        <div class="col-xl-8 col-lg-9 m-auto">
          <p class="sub-text font-rubik">
            {{ $t('product.sdk.subtitle') }}
          </p>
        </div>
      </div>
      <div class="d-sm-flex align-items-center justify-content-center button-group mt-3">
        <a
          href="https://gdfplay.io"
          class="d-flex align-items-center gdf-play-btn"
        >
          <img
            src="@/assets/images/icon/happy.svg"
            alt=""
            class="icon"
            style="max-width:32px;"
          >
          <div>
            <span>{{ $t('product.sdk.gdfplay-btn.desc') }} </span>
            <strong>{{ $t('product.sdk.gdfplay-btn.title') }}</strong>
          </div>
        </a>
        <!-- <a
          href="#"
          class="d-flex align-items-center gdf-player-btn"
          @click="download_sdk()"
        >
          <img
            src="@/assets/images/icon/183.svg"
            alt=""
            class="icon"
            style="max-width:32px;"
          >
          <div>
            <span>{{ $t('product.sdk.googleplay-btn.desc') }} </span>
            <strong>{{ $t('product.sdk.gdfplay-btn.title') }}</strong>
          </div>
        </a> -->
        <a
          href="https://play.google.com/store/apps/details?id=com.gdflab.gdfplayer2"
          class="d-flex align-items-center windows-button"
        >
          <img
            src="@/assets/images/icon/playstore.svg"
            alt=""
            class="icon"
          >
          <div>
            <span>{{ $t('product.sdk.googleplay-btn.desc') }} </span>
            <strong>{{ $t('product.sdk.googleplay-btn.title') }}</strong>
          </div>
        </a>
        <a
          href="#"
          class="d-flex align-items-center ios-button"
        >
          <img
            src="@/assets/images/icon/apple.svg"
            alt=""
            class="icon"
          >
          <div>
            <!-- <span>{{ $t('product.sdk.appstore-btn.desc') }} </span> -->
            <strong>{{ $t('product.sdk.appstore-btn.title') }}</strong>
          </div>
        </a>
      </div>
      <!-- <div class="search-filter-form">
        <form @submit.prevent="onSubmit">
          <input type="text" placeholder="Search Somthing..">
          <button><img src="@/assets/images/icon/54.svg" alt=""></button>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>All</option>
            <option>Layout</option>
            <option>API</option>
            <option>Doc</option>
          </select>
        </form>
      </div>
      <p class="sing-in-call">Already using deski? 
        <router-link to="/login" class="font-rubik">Sign in</router-link>.
      </p> -->
    </div> <!-- /.container -->
    <!-- <img
      src="@/assets/images/shape/68.svg"
      alt=""
      class="shapes shape-one"
    >
    <img
      src="@/assets/images/shape/69.svg"
      alt=""
      class="shapes shape-two"
    >
    <img
      src="@/assets/images/shape/70.svg"
      alt=""
      class="shapes shape-three"
    >
    <img
      src="@/assets/images/shape/71.svg"
      alt=""
      class="shapes shape-four"
    >
    <img
      src="@/assets/images/shape/72.svg"
      alt=""
      class="shapes shape-five"
    >
    <img
      src="@/assets/images/shape/73.svg"
      alt=""
      class="shapes shape-six"
    >
    <img
      src="@/assets/images/shape/74.svg"
      alt=""
      class="shapes shape-seven"
    >
    <img
      src="@/assets/images/shape/75.svg"
      alt=""
      class="shapes shape-eight"
    >
    <img
      src="@/assets/images/shape/76.svg"
      alt=""
      class="shapes shape-nine"
    >
    <img
      src="@/assets/images/shape/77.svg"
      alt=""
      class="shapes shape-ten"
    > -->
  </div>
</template>

<script>
export default {
  name: 'HeroBanner',
  methods: {
    onSubmit() {
      console.log('Submitted');
    },
    comingsoon() {
      alert(this.$t('common.soon'))
    },
    download_sdk() {
      window.open("https://storage.googleapis.com/srplayervideo/player/GDFPlay.io.apk")
    }
  },
}
</script>

<style>
.bg-trans {
  opacity: 0.2;
  min-width: 788px;
  width: 100%;
  margin-top: 10rem;
  align-content: center;
  justify-content: center;
  justify-items: center;
  position: relative;
}

/* .gdf-play-btn:hover {
  transform: translateY(-5px);
  box-shadow: -5px 10px 30px rgba(0, 0, 0, 0.1);
} */

</style>