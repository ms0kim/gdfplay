<template>
  <div class="faq-section">
    <div class="container">
      <div class="title-style-two text-center mb-100 md-mb-80">
        <p>FAQ</p>
        <h2>Question & Answer</h2>
      </div> <!-- /.title-style-one -->

      <div class="row">
        <div
          class="col-xl-9 col-lg-10 m-auto"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div
            id="accordionExample"
            class="accordion-style-three"
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
                    class="btn btn-link"
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
              >
                <div class="accordion-body">
                  <p>
                    {{ item.desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><!--  /.row -->

      <div
        class="text-center more-faq-meta mt-75 md-mt-50"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h3 class="mb-35 font-rubik">
          Don’t find your answer?
        </h3>
        <router-link to="/contact-us-cs">
          Contact us
        </router-link>
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
          btnText: "How does the free trial work?",
          desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
          collapseClass: 'accordion-collapse collapse',
          expanded: true,
        },
        {
          id: 2,
          headingNum: 'headingTwo',
          collapseNum: "collapseTwo",
          btnText: "How do you weigh different criteria in your process?",
          desc: `That's right. We want to make Ticket Tailor as affordable as possible for event organisers of all sizes. You also have the option to pass on any ticketing costs to your customers through a booking fee. We always aim to be the best value on the market so please let us know if you think you can find a similar product for a lower price.`,
          collapseClass: 'accordion-collapse collapse'
        },
        {
          id: 3,
          headingNum: 'headingThree',
          collapseNum: "collapseThree",
          btnText: "What does First Round look for in an idea?",
          desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
          collapseClass: 'accordion-collapse collapse'
        },
        {
          id: 4,
          headingNum: 'headingFour',
          collapseNum: "collapseFour",
          btnText: "What do you look for in a founding team?",
          desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
          collapseClass: 'accordion-collapse collapse'
        },
        {
          id: 5,
          headingNum: 'headingFive',
          collapseNum: "collapseFive",
          btnText: "Do you recommend Pay as you go or Pre pay?",
          desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
          collapseClass: 'accordion-collapse collapse'
        },
        {
          id: 6,
          headingNum: 'headingSix',
          collapseNum: "collapseSix",
          btnText: "Can I pass the fees on to my customers?",
          desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
          collapseClass: 'accordion-collapse collapse'
        },
        {
          id: 7,
          headingNum: 'headingSeven',
          collapseNum: "collapseSeven",
          btnText: "How do I get paid for the tickets sold?",
          desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
          collapseClass: 'accordion-collapse collapse'
        },
        {
          id: 8,
          headingNum: 'headingEight',
          collapseNum: "collapseEight",
          btnText: "Do you invest in companies located outside of New York?",
          desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
          collapseClass: 'accordion-collapse collapse'
        },
        {
          id: 9,
          headingNum: 'headingNine',
          collapseNum: "collapseNine",
          btnText: "How do i pay fees?",
          desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
          collapseClass: 'accordion-collapse collapse'
        },
      ]
    }
  }
}
</script>