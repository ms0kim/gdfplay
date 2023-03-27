<template>
  <div class="request-sdk-style contact-style-two">
    <div class="container">
      <div class="row">
        <div
          id="request-sdk"
          class="col-x1-10 col-lg-11 m-auto pt-150"
        >
          <h2>{{ $t('pricing.mobile_sdk.request_form.title') }}</h2>
        </div>
      </div>
  
      <div class="form-style-classic mt-150 md-mt-80">
        <form
          id="contact-form"
          data-bs-toggle="validator"
          @submit.prevent="onSubmit"
        >
          <div class="messages" />
          <div class="row controls">
            <div
              class="col-md-6"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div class="input-group-meta form-group mb-60">
                <label>{{ $t('user.first_name') }}</label>
                <input
                  v-model="first_name"
                  type="text"
                  :placeholder="$t('label.firstname')"
                  name="Fname"
                  required="required"
                  :data-error="$t('error.required')"
                >
                <div class="help-block with-errors" />
              </div>
            </div>
            <div
              class="col-md-6"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div class="input-group-meta form-group mb-60">
                <label>{{ $t('user.last_name') }}</label>
                <input
                  v-model="last_name"
                  type="text"
                  :placeholder="$t('label.lastname')"
                  name="Lname"
                  required="required"
                  :data-error="$t('error.required')"
                >
                <div class="help-block with-errors" />
              </div>
            </div>
            <div
              class="col-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div class="input-group-meta form-group mb-60">
                <label>{{ $t('user.email') }}</label>
                <input
                  v-model="business_email"
                  type="email"
                  :placeholder="$t('label.email')"
                  name="email"
                  required="required"
                  :data-error="$t('error.not_valid_email')"
                >
                <div class="help-block with-errors" />
              </div>
            </div>
            <div
              class="col-md-6"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div class="input-group-meta form-group mb-60">
                <label>{{ $t('user.phone') }}</label>
                <input
                  v-model="phone"
                  type="tel"
                  :placeholder="$t('label.phone')"
                  name="phone"
                  required="required"
                  :data-error="$t('error.required')"
                >
                <div class="help-block with-errors" />
              </div>
            </div>
            <div
              class="col-md-6"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div class="input-group-meta form-group mb-60">
                <label>{{ $t('user.job_title') }}</label>
                <input
                  v-model="job_title"
                  type="text"
                  :placeholder="$t('label.job_title')"
                  name="Jobtitle"
                  required="required"
                  :data-error="$t('error.required')"
                >
                <div class="help-block with-errors" />
              </div>
            </div>
            <div
              class="col-md-6"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div class="input-group-meta form-group mb-60">
                <label>{{ $t('user.company_name') }}</label>
                <input
                  v-model="company_name"
                  type="text"
                  :placeholder="$t('label.company_name')"
                  name="CompanyName"
                  required="required"
                  :data-error="$t('error.required')"
                >
                <div class="help-block with-errors" />
              </div>
            </div>
            <div
              class="col-md-6"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div class="input-group-meta form-group mb-60">
                <label>{{ $t('pricing.mobile_sdk.request_form.os') }}</label>
                <input
                  v-model="os"
                  type="text"
                  :placeholder="$t('label.os')"
                  name="OS"
                  required="required"
                  :data-error="$t('error.required')"
                  disabled
                >
                <div class="help-block with-errors" />
              </div>
            </div>
            <!-- <div
              class="col-md-6"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div class="input-group-meta form-group mb-60">
                <label>{{ $t('pricing.mobile_sdk.request_form.company_size') }}</label>
                <input
                  v-model="company_size"
                  type="text"
                  :placeholder="$t('label.company_size')"
                  name="CompanySize"
                  :data-error="$t('error.required')"
                >
                <div class="help-block with-errors" />
              </div>
            </div> -->
            <!-- <div
              class="col-12"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div class="input-group-meta form-group mb-60">
                <label>{{ $t('pricing.mobile_sdk.request_form.website') }}</label>
                <input
                  v-model="website"
                  type="text"
                  :placeholder="$t('label.website')"
                  name="Website"
                  :data-error="$t('error.required')"
                >
                <div class="help-block with-errors" />
              </div>
            </div> -->
            

            <!-- <div
              class="col-md-6"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div class="input-group-meta form-group mb-60">
                <label>{{ $t('pricing.mobile_sdk.request_form.device_count') }}</label>
                <input
                  v-model="device_count"
                  type="number"
                  :placeholder="$t('label.device_count')"
                  name="DeviceCount"
                  :data-error="$t('error.required')"
                >
                <div class="help-block with-errors" />
              </div>
            </div> -->
            <!-- <div
              class="col-12"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div class="input-group-meta form-group mb-60">
                <label>{{ $t('pricing.mobile_sdk.request_form.package_name') }}</label>
                <input
                  v-model="package_name"
                  type="text"
                  :placeholder="$t('label.package')"
                  name="package_name"
                  :data-error="$t('error.required')"
                >
                <div class="help-block with-errors" />
              </div>
            </div> -->
            <div
              class="col-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div class="input-group-meta form-group lg mb-40">
                <label>{{ $t('contact_us.message') }}</label>
                <textarea
                  v-model="message"
                  :placeholder="$t('label.message')"
                  name="message"
                  :data-error="$t('error.no_message')"
                />
                <div class="help-block with-errors" />
              </div>
            </div>
            <div
              class="agree-and-send col-xl-10 col-lg-9 col-md-8"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <p>
                {{ $t('pricing.mobile_sdk.request_form.agree1') }}
                <router-link to="/terms#privacy">
                  <strong>{{ $t('privacy.title') }}</strong>
                </router-link> {{ $t('pricing.mobile_sdk.request_form.agree2') }} 
                <router-link to="/terms#gdfplay">
                  <strong>{{ $t('terms_and_conditions.title') }}</strong>
                </router-link>
                {{ $t('pricing.mobile_sdk.request_form.agree3') }}
              </p>
            </div>
            <div
              class="col-xl-2 col-lg-3 col-md-4 sdk-send-btn"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <button :class="`${contact_doc ? 'theme-btn-six lg' : 'theme-btn-two'}`">
                {{ $t('pricing.mobile_sdk.request_form.claim') }}
              </button>
            </div>
          </div>
        </form>
      </div> <!-- /.form-style-classic -->
    </div>
  </div>
</template>
  
  <script>
  import uploaderApi from "@/api/api";
  import paths from "@/api/paths";
  export default {
    name: 'RequestSdk',
    // eslint-disable-next-line vue/prop-name-casing
    props:{contact_doc:Boolean},
    data() {
      return {
        first_name: "",
        last_name: "",
        business_email: "",
        phone: "",
        company_name: "",
        website: "",
        job_title: "",
        company_size: "",
        device_count: "",
        message: "",
        os: "android",
        package_name: "",
      }
    },
    methods: {
      onSubmit() {
        console.log('Submitted');
        var device_count = 0
        if (typeof(this.device_count)==="number") {
          device_count = this.device_count
        }
        const payloads = {
          first_name : this.first_name,
          last_name : this.last_name,
          business_email : this.business_email,
          phone : this.phone,
          company_name: this.company_name,
          website: this.website,
          job_title: this.job_title,
          company_size: this.company_size,
          device_count: device_count,
          message: this.message,
          os: this.os,
          package_name: this.package_name,
          version: 1,
          language: this.$i18n.locale
        }
        uploaderApi
          .post(
            paths.REQUEST_SDK, payloads
          )
          .then((response) => {
            this.first_name = "";
            this.last_name = "";
            this.business_email = "";
            this.phone = "";
            this.company_name = "";
            this.website = "";
            this.job_title = "";
            this.company_size = "";
            this.device_count = "";
            this.message = "";
            this.os = "android";
            this.package_name = "";
            alert(response.data.message)
          })
      },
    },
  }
  </script>