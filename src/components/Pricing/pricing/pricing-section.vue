<template>
  <div class="pricing-section-two">
    <div class="fancy-hero-four">
      <div class="shapes shape-one" />
      <div class="shapes shape-two" />
      <div class="shapes shape-three" />
      <div class="shapes shape-four" />
      <div class="shapes shape-five" />
      <div class="shapes shape-six" />
      <div class="bg-wrapper">
        <div class="container">
          <div class="row">
            <div
              id="pricing-table"
              class="col-xl-10 col-lg-11 m-auto"
            >
              <h2>{{ $t('pricing.mobile_sdk.title') }}</h2>
            </div>
            <!-- <div class="col-12 m-auto">
              <p class="font-rubik sub-heading">
                5 minute installation · Try Team plan features for 14 days · No credit
                card required
              </p>
            </div> -->
          </div>

          <!-- Nav tabs -->
          <ul class="nav nav-tabs justify-content-center pricing-nav-two">
            <!-- <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                href="#month"
              >Monthly</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                href="#year"
              >Yearly</a>
            </li> -->
            <li class="nav-item">
              <a
                id="month-tab" 
                class="nav-link active" 
                data-bs-toggle="tab" 
                data-bs-target="#month" 
                role="tab" 
                aria-controls="month" 
                aria-selected="true"
                style="cursor: pointer"
                @click="active = 'month'"
              >{{ $t('pricing.mobile_sdk.monthly') }}</a>
            </li>
            <li class="nav-item">
              <a
                id="month-tab" 
                class="nav-link" 
                data-bs-toggle="tab" 
                data-bs-target="#month" 
                role="tab" 
                aria-controls="month" 
                aria-selected="true"
                style="cursor: pointer"
                @click="active = 'year'"
              >{{ $t('pricing.mobile_sdk.yearly') }}</a>
            </li>
          </ul>
        </div>
      </div> <!-- /.bg-wrapper -->
    </div> <!-- /.fancy-hero-four -->

    <div class="container">
      <div class="pricing-table-area">
        <div class="clearfix">
          <div class="tab-content">
            <div
              v-for="(pricing, index1) in pricing_data"
              :id="pricing.id"
              :key="index1"
              role="tabpanel" 
              aria-labelledby="month-tab"
              :class="`tab-pane ${active === pricing.id ? 'show active' : 'fade'}`"
            >
              <div class="row g-0">
                <div
                  v-for="item in pricing.pricing_items"
                  :key="item.id" 
                  class="col-lg-4 col-sm-6 pr-bg d-flex"
                >
                  <div class="pr-table-wrapper">
                    <div class="pack-name">
                      {{ item.pac_name }}
                    </div>
                    <div class="price">
                      <sup>{{ item.unit }}</sup>{{ item.price }}
                    </div>
                    <div class="bill-cycle">
                      {{ item.bill_cycle }}
                    </div>
                    <!-- <router-link to="/pricing/sdk#request-sdk"> -->
                    <a
                      :class="item.id==1?'btn-enabled':'btn-disabled'"
                      class="theme-btn-three"
                      href="/pricing/sdk#request-sdk"
                    >{{ $t("pricing.mobile_sdk.request_form.title") }}</a>
                    <!-- </router-link> -->
                    <ul class="pr-feature">
                      <li
                        v-for="(list_item, index2) in item.list_items"
                        :key="index2"
                      >
                        {{ list_item.list }}
                      </li>
                    </ul>
                  </div> <!-- /.pr-table-wrapper -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="@/assets/images/shape/64.svg"
          alt=""
          class="shapes shape-one"
        >
        <img
          src="@/assets/images/shape/65.svg"
          alt=""
          class="shapes shape-two"
        >
      </div> <!-- /.pricing-table-area -->
    </div>
  </div>
</template>


<script>
export default {
  name: 'PricingSection',
  data() {
    return {
      active: 'month',
      pricing_data: [
        {
          id: 'month',
          active: true,
          pricing_items: [
          {
              id: 1,
              pac_name: this.$t('pricing.mobile_sdk.m_free.pac_name'),
              unit: this.$t('pricing.mobile_sdk.m_free.unit'),
              price: this.$t('pricing.mobile_sdk.m_free.price'),
              bill_cycle: this.$t('pricing.mobile_sdk.m_free.bill_cycle'),
              list_items: [
                { list: this.$t('pricing.mobile_sdk.m_free.list1') },
                { list: this.$t('pricing.mobile_sdk.m_free.list2') },
                { list: this.$t('pricing.mobile_sdk.m_free.list3') },
              ]
            },
            {
              id: 2,
              pac_name: this.$t('pricing.mobile_sdk.m_network_saving.pac_name'),
              unit: this.$t('pricing.mobile_sdk.m_network_saving.unit'),
              price: this.$t('pricing.mobile_sdk.m_network_saving.price'),
              bill_cycle: this.$t('pricing.mobile_sdk.m_network_saving.bill_cycle'),
              list_items: [
                { list: this.$t('pricing.mobile_sdk.m_network_saving.list1') },
                { list: this.$t('pricing.mobile_sdk.m_network_saving.list2') },
                { list: this.$t('pricing.mobile_sdk.m_network_saving.list3') },
              ]
            },
            {
              id: 3,
              pac_name: this.$t('pricing.mobile_sdk.m_device.pac_name'),
              unit: this.$t('pricing.mobile_sdk.m_device.unit'),
              price: this.$t('pricing.mobile_sdk.m_device.price'),
              bill_cycle: this.$t('pricing.mobile_sdk.m_device.bill_cycle'),
              list_items: [
                { list: this.$t('pricing.mobile_sdk.m_device.list1') },
                { list: this.$t('pricing.mobile_sdk.m_device.list2') },
              ]
            },
          ]
        },

        {
          id: 'year',
          active: false,
          pricing_items: [
          {
              id: 1,
              pac_name: this.$t('pricing.mobile_sdk.y_free.pac_name'),
              unit: this.$t('pricing.mobile_sdk.y_free.unit'),
              price: this.$t('pricing.mobile_sdk.y_free.price'),
              bill_cycle: this.$t('pricing.mobile_sdk.y_free.bill_cycle'),
              list_items: [
                { list: this.$t('pricing.mobile_sdk.y_free.list1') },
                { list: this.$t('pricing.mobile_sdk.y_free.list2') },
                { list: this.$t('pricing.mobile_sdk.y_free.list3') },
              ]
            },
            {
              id: 2,
              pac_name: this.$t('pricing.mobile_sdk.y_network_saving.pac_name'),
              unit: this.$t('pricing.mobile_sdk.y_network_saving.unit'),
              price: this.$t('pricing.mobile_sdk.y_network_saving.price'),
              bill_cycle: this.$t('pricing.mobile_sdk.y_network_saving.bill_cycle'),
              list_items: [
                { list: this.$t('pricing.mobile_sdk.y_network_saving.list1') },
                { list: this.$t('pricing.mobile_sdk.y_network_saving.list2') },
                { list: this.$t('pricing.mobile_sdk.y_network_saving.list3') },
              ]
            },
            {
              id: 3,
              pac_name: this.$t('pricing.mobile_sdk.y_device.pac_name'),
              unit: this.$t('pricing.mobile_sdk.y_device.unit'),
              price: this.$t('pricing.mobile_sdk.y_device.price'),
              bill_cycle: this.$t('pricing.mobile_sdk.y_device.bill_cycle'),
              list_items: [
                { list: this.$t('pricing.mobile_sdk.y_device.list1') },
                { list: this.$t('pricing.mobile_sdk.y_device.list2') },
              ]
            },
          ]
        },
      ]
    }
  },
}
</script>


