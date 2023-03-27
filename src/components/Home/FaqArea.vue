<template>
  <div class="faq-classic with-bg">
    <img
      src="../../assets/images/shape/86.svg"
      alt=""
      class="shapes shape-one"
    >
    <img
      src="../../assets/images/shape/87.svg"
      alt=""
      class="shapes shape-two"
    >
    <img
      src="../../assets/images/shape/88.svg"
      alt=""
      class="shapes shape-three"
    >
    <img
      src="../../assets/images/shape/89.svg"
      alt=""
      class="shapes shape-four"
    >
    <img
      src="../../assets/images/shape/90.svg"
      alt=""
      class="shapes shape-five"
    >
    <img
      src="../../assets/images/shape/91.svg"
      alt=""
      class="shapes shape-six"
    >
    <div class="container">
      <div class="title-style-four text-center mb-100 md-mb-70">
        <div class="row">
          <div class="col-lg-7 m-auto">
            <h6>FAQ’s</h6>
            <h2>
              <span>Questions & Answers<img
                src="../../assets/images/shape/line-shape-2.svg"
                alt=""
              ></span>
            </h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6">
          <!-- ================== FAQ Panel ================ -->
          <div id="accordionExample">
            <div
              v-for="item in faqData.slice(0, 4)"
              :key="item.id"
              class="accordion-item"
            >
              <div
                :id="item.headingNum"
                class="accordion-header"
              >
                <h5 class="mb-0">
                  <button
                    class="btn btn-link"
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
              >
                <div class="accordion-body">
                  <p>{{ item.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <!-- ================== FAQ Panel ================ -->
          <div id="accordionExampleTwo">
            <div
              v-for="item in faqData.slice(4, 8)"
              :key="item.id"
              class="accordion-item"
            >
              <div
                :id="item.headingNum"
                class="accordion-header"
              >
                <h5 class="mb-0">
                  <button
                    class="btn btn-link"
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
                data-bs-parent="#accordionExampleTwo"
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
  </div>
</template>

<script>
export default {
  name: 'FaqArea',
  data() {
    return {
      faqData: [
        {
          id: 1,
          headingNum: 'headingOne',
          collapseNum: "collapseOne",
          btnText: "How the affiliate programe works?",
          desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
          collapseClass: 'accordion-collapse collapse show',
          expanded: true,
        },
        {
          id: 2,
          headingNum: 'headingTwo',
          collapseNum: "collapseTwo",
          btnText: "How delete my account?",
          desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
          collapseClass: 'accordion-collapse collapse',
        },
        {
          id: 3,
          headingNum: 'headingThree',
          collapseNum: "collapseThree",
          btnText: "Ho to invite people with refferel link?",
          desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
          collapseClass: 'accordion-collapse collapse',
        },
        {
          id: 4,
          headingNum: 'headingFour',
          collapseNum: "collapseFour",
          btnText: "Is ios app available for the iphone?",
          desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
          collapseClass: 'accordion-collapse collapse',
        },
        {
          id: 5,
          headingNum: 'headingFive',
          collapseNum: "collapseFive",
          btnText: "How the affiliate programe works?",
          desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
          collapseClass: 'accordion-collapse collapse show',
          expanded: true,
        },
        {
          id: 6,
          headingNum: 'headingSix',
          collapseNum: "collapseSix",
          btnText: "How to create customer panel?",
          desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
          collapseClass: 'accordion-collapse collapse',
        },
        {
          id: 7,
          headingNum: 'headingSeven',
          collapseNum: "collapseSeven",
          btnText: "How delete my account?",
          desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
          collapseClass: 'accordion-collapse collapse',
        },
        {
          id: 8,
          headingNum: 'headingEight',
          collapseNum: "collapseEight",
          btnText: "Ho to invite people with refferel link?",
          desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
          collapseClass: 'accordion-collapse collapse',
        },
      ]
    }
  }
}
</script>