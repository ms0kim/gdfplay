<template>
  <div class="contact-style-two">
    <div class="container">
      <div class="contact-info-wrapper">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-sm-6 d-lg-flex">
            <div class="address-info">
              <div class="icon d-flex align-items-end">
                <img
                  src="../../assets/images/icon/44.svg"
                  alt=""
                >
              </div>
              <div class="title">
                {{ $t('contact_us.location') }}
              </div>
              <p class="font-rubik">
                {{ $t('footer.gdf_address') }}
              </p>
            </div> <!-- /.address-info -->
          </div>
          <div class="col-lg-4 col-sm-6 d-lg-flex">
            <div class="address-info">
              <div class="icon d-flex align-items-end">
                <img
                  src="../../assets/images/icon/45.svg"
                  alt=""
                >
              </div>
              <div class="title">
                {{ $t('contact_us.contact') }}
              </div>
              <p class="font-rubik">
                <a href="mailto:operation@gdflab.com">operation@gdflab.com</a><br><a href="tel:+82260861862">+82) 2. 6086. 1862</a>
              </p>
            </div> <!-- /.address-info -->
          </div>
          <div class="col-lg-4 col-sm-6 d-lg-flex">
            <div class="address-info">
              <div class="icon d-flex align-items-end">
                <img
                  src="../../assets/images/icon/46.svg"
                  alt=""
                >
              </div>
              <div class="title">
                {{ $t('contact_us.sns') }}
              </div>
              <p class="font-rubik">
                {{ $t('contact_us.sns_hello') }}
              </p>
              <ul class="d-flex justify-content-center">
                <li>
                  <a href="https://www.facebook.com/GDFLab/"><i
                    class="fa fa-facebook"
                    aria-hidden="true"
                  /></a>
                </li>
                <!-- <li><a href="https://www.instagram.com/gdf_lab/"><i class="fa fa-instagram"></i></a></li> -->
                <li>
                  <a href="https://www.linkedin.com/company/gdflab/"><i
                    class="fa fa-linkedin"
                    aria-hidden="true"
                  /></a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCJhfLRhiWLR7JZzciXvNreA"><i
                    class="fa fa-youtube"
                    aria-hidden="true"
                  /></a>
                </li>
              </ul>
            </div> <!-- /.address-info -->
          </div>
        </div>
        <img
          src="../../assets/images/shape/64.svg"
          alt=""
          class="shapes shape-one"
        >
      </div> <!-- /.contact-info-wrapper -->

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
                  v-model="email"
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
                  required="required"
                  :data-error="$t('error.no_message')"
                />
                <div class="help-block with-errors" />
              </div>
            </div>
            <div
              class="col-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <button :class="`${contact_doc ? 'theme-btn-six lg' : 'theme-btn-two'}`">
                {{ $t('contact_us.send') }}
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
  name: 'ContactStyle',
  // eslint-disable-next-line vue/prop-name-casing
  props:{contact_doc:Boolean},
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      message: ""
    }
  },
  methods: {
    onSubmit() {
      console.log('Submitted');
      const payloads = {
        first_name : this.first_name,
        last_name : this.last_name,
        email : this.email,
        message: this.message,
        version: 1,
        language: this.$i18n.locale
      }
      uploaderApi
        .post(
          paths.CONTACT, payloads
        )
        .then((response) => {
          this.first_name = "";
          this.last_name = "";
          this.email = "";
          this.message = "";
          alert(response.data.message)
        })
    },
  },
}
</script>