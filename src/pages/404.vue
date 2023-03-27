<template>
  <div class="main-page-wrapper p0 overflow-hidden">
    <div class="error-page d-lg-flex align-items-center">
      <div class="img-holder order-lg-last">
        <img
          src="../assets/images/media/404.svg"
          alt=""
          class="w-100 illustration"
        >
        <img
          src="../assets/images/media/404-q.svg"
          alt=""
          class="shapes qus"
        >
      </div>
      <div class="text-wrapper order-lg-first">
        <div class="logo">
          <router-link to="/">
            <img
              src="../assets/images/logo/GDFLAB_svg.svg"
              alt=""
              style="max-width: 140px;"
            >
          </router-link>
        </div>
        <h1 class="font-slab">
          {{ $t( "error.not_found_1" ) }} <br>{{ $t( "error.not_found_2" ) }} <br>{{ $t( "error.not_found_3" ) }}
        </h1>
        <p class="font-rubik">
          {{ $t( "error.not_found_detail" ) }}
        </p>
        <router-link
          to="/"
          class="back-home font-rubik d-flex align-items-center justify-content-center"
        >
          <span>{{ $t( "common.back_to_home" ) }}</span>
          <img
            src="../assets/images/icon/53.svg"
            alt=""
          >
        </router-link>
      </div> <!-- /.text-wrapper -->
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>