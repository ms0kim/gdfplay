<template>
  <div
    :class="`useable-tools-section-two bg-shape ${feature ? 'mb-250 mt-150 md-mt-100 md-mb-100' : 'mb-200 mt-150 md-mt-50 md-mb-120'} `"
  >
    <div class="bg-wrapper">
      <div class="shapes shape-one" />
      <div class="shapes shape-two" />
      <div class="shapes shape-three" />
      <div class="shapes shape-four" />
      <div class="container">
        <div class="title-style-two text-center mb-70 md-mb-10">
          <div class="row">
            <div class="col-lg-10 col-md-11 m-auto">
              <p>Integrates with your tools</p>
              <h2>
                Connect deski with the software you
                <span>use every<img
                  src="../../assets/images/shape/line-shape-2.svg"
                  alt=""
                ></span>
                day.
              </h2>
              <a
                href="#"
                class="theme-btn-two mt-60 md-mt-40"
              >Try out now</a>
            </div>
          </div>
        </div> <!-- /.title-style-two -->

        <div class="icon-wrapper">
          <ul class="clearfix">
            <li>
              <div class="icon-box d-flex align-items-center justify-content-center">
                <img
                  src="../../assets/images/logo/09.png"
                  alt=""
                >
              </div>
              <div class="icon-box d-flex align-items-center justify-content-center">
                <img
                  src="../../assets/images/logo/10.png"
                  alt=""
                >
              </div>
            </li>
            <li>
              <div class="icon-box d-flex align-items-center justify-content-center">
                <img
                  src="../../assets/images/logo/11.png"
                  alt=""
                >
              </div>
              <div class="icon-box d-flex align-items-center justify-content-center">
                <img
                  src="../../assets/images/logo/12.png"
                  alt=""
                >
              </div>
            </li>
            <li>
              <div class="icon-box d-flex align-items-center justify-content-center">
                <img
                  src="../../assets/images/logo/13.png"
                  alt=""
                >
              </div>
              <div class="icon-box d-flex align-items-center justify-content-center">
                <img
                  src="../../assets/images/logo/14.png"
                  alt=""
                >
              </div>
            </li>
            <li>
              <div class="icon-box d-flex align-items-center justify-content-center">
                <img
                  src="../../assets/images/logo/15.png"
                  alt=""
                >
              </div>
            </li>
            <li>
              <div class="icon-box d-flex align-items-center justify-content-center">
                <img
                  src="../../assets/images/logo/16.png"
                  alt=""
                >
              </div>
              <div class="icon-box d-flex align-items-center justify-content-center">
                <img
                  src="../../assets/images/logo/17.png"
                  alt=""
                >
              </div>
            </li>
            <li>
              <div class="icon-box d-flex align-items-center justify-content-center">
                <img
                  src="../../assets/images/logo/18.png"
                  alt=""
                >
              </div>
            </li>
            <li>
              <div class="icon-box d-flex align-items-center justify-content-center">
                <img
                  src="../../assets/images/logo/19.png"
                  alt=""
                >
              </div>
              <div class="icon-box d-flex align-items-center justify-content-center">
                <img
                  src="../../assets/images/logo/20.png"
                  alt=""
                >
              </div>
            </li>
            <li>
              <div class="icon-box d-flex align-items-center justify-content-center">
                <img
                  src="../../assets/images/logo/21.png"
                  alt=""
                >
              </div>
              <div class="icon-box d-flex align-items-center justify-content-center">
                <img
                  src="../../assets/images/logo/22.png"
                  alt=""
                >
              </div>
            </li>
            <li>
              <div class="icon-box d-flex align-items-center justify-content-center">
                <img
                  src="../../assets/images/logo/23.png"
                  alt=""
                >
              </div>
              <div class="icon-box d-flex align-items-center justify-content-center">
                <img
                  src="../../assets/images/logo/24.png"
                  alt=""
                >
              </div>
            </li>
          </ul>
        </div> <!-- /.icon-wrapper -->
      </div> <!-- /.container -->
    </div> <!-- /.bg-wrapper -->
  </div> <!-- /.useable-tools-section-two -->
</template>

<script>
export default {
  name: 'UseAbleTools',
  props: {
    feature: Boolean,
  }

}
</script>