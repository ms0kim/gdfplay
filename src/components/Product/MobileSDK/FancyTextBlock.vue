<template>
  <div class="fancy-text-block-six mt-250 md-mt-130">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-6"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div class="title-style-three mb-35">
            <p>{{ $t('product.sdk.why-name') }}</p>
            <h2>
              {{ $t('product.sdk.why-title1') }}
              <span>{{ $t('product.sdk.why-title2') }}<img
                src="@/assets/images/shape/line-shape-3.svg"
                alt=""
              ></span>
              {{ $t('product.sdk.why-title3') }}
            </h2>
          </div>

          <!-- Accordion Style Two -->
          <div
            id="accordionExample"
            class="accordion-style-two pe-5"
          >
            <div
              v-for="item in faqData"
              :key="item.id"
              class="accordion-item"
            >
              <div
                :id="item.headingNum"
                class="accordion-header"
              >
                <h5 class="mb-0">
                  <button
                    class="btn btn-link accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="'#' + item.collapseNum"
                    :aria-expanded="item.expanded ? 'true' : 'false'"
                    :aria-controls="item.collapseNum"
                  >
                    {{ item.btnText }}
                  </button>
                </h5>
              </div>
              <div
                :id="item.collapseNum"
                :class="item.collapseClass"
                :aria-labelledby="item.headingNum"
                data-bs-parent="#accordionExample"
                style=""
              >
                <div class="accordion-body">
                  <p>{{ item.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="img-meta-container"
      data-aos="fade-left"
      data-aos-duration="1200"
      data-aos-delay="100"
    >
      <img
        src="@/assets/images/gdflab/best.png"
        alt=""
      >
      <a
        href="https://www.flaticon.com/free-icons/best"
        title="best icons"
        style="font-size: 9px;position:absolute;right:15px;"
      >Best icons created by Freepik - Flaticon</a>
      <img
        src="@/assets/images/shape/22.svg"
        alt=""
        class="shapes shape-one"
      >
      <img
        src="@/assets/images/shape/23.svg"
        alt=""
        class="shapes shape-two"
      >
      <img
        src="@/assets/images/shape/24.svg"
        alt=""
        class="shapes shape-three"
      >
      <img
        src="@/assets/images/shape/25.svg"
        alt=""
        class="shapes shape-four"
      >
      <img
        src="@/assets/images/shape/26.svg"
        alt=""
        class="shapes shape-five"
      >
      <img
        src="@/assets/images/shape/27.svg"
        alt=""
        class="shapes shape-six"
      >
      <img
        src="@/assets/images/shape/28.svg"
        alt=""
        class="shapes shape-seven"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'FancyTextBlock',
  data() {
    return {
      faqData: [
        {
          id: 1,
          headingNum: 'headingOne',
          collapseNum: "collapseOne",
          btnText: this.$t('product.sdk.why-sdk.0.title'),
          desc: this.$t('product.sdk.why-sdk.0.subtitle'),
          collapseClass: 'accordion-collapse collapse show',
          expanded: true,
        },
        {
          id: 2,
          headingNum: 'headingTwo',
          collapseNum: "collapseTwo",
          btnText: this.$t('product.sdk.why-sdk.1.title'),
          desc: this.$t('product.sdk.why-sdk.1.subtitle'),
          collapseClass: 'accordion-collapse collapse'
        },
        {
          id: 3,
          headingNum: 'headingThree',
          collapseNum: "collapseThree",
          btnText: this.$t('product.sdk.why-sdk.2.title'),
          desc: this.$t('product.sdk.why-sdk.2.subtitle'),
          collapseClass: 'accordion-collapse collapse'
        },
      ]
    }
  }
}
</script>