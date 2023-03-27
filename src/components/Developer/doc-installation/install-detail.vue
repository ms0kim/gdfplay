<template>
  <div :class="`doc-container ${doc_banner ? 'mt-70 sm-m0' : 'top-border'}`">
    <div class="container">
      <div class="row flex-xl-nowrap g-0">
        <DocSidebar />
        <!-- ****************************** DOC MAIN BODY ********************************* -->
        <main class="col-xl-9 col-md-8 doc-main-body">
          <h2 id="installation">
            {{ $t('documentation.getting_started.installation') }}
          </h2>
          <h3 id="requirements">
            {{ $t('documentation.getting_started.requirements') }}
          </h3>
          <h5 class="mb-15">
            {{ $t('documentation.getting_started.minimum_requirements.title') }} :
          </h5>
          <p style="padding-left: 10px;">
            {{ $t('documentation.getting_started.minimum_requirements.context') }}
          </p>
        </main> <!-- /.doc-main-body -->
      </div>
    </div>
  </div>
</template>
  
  <script>
  import DocSidebar from '../doc-sidebar.vue'
  
  export default {
    name: 'QuickStartArea',
    components: {DocSidebar},
    // eslint-disable-next-line vue/prop-name-casing
    props: { doc_banner: Boolean },
    data() {
      return {
        
      }
    },
    mounted() {
      // console.log(this.$route.hash)
    },
    methods: {
      onSubmit() {
        console.log('Submitted');
      },
      checkActive(href) {
        if (this.$route.hash == href) {
          return "active"
        }
        return ""
      }
    },
  }
  </script>