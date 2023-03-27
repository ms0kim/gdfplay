<template>
  <!-- ****************************** DOC SIDEBAR ********************************* -->
  <div class="col-xl-3 col-md-4 doc-sidebar">
    <div class="clearfix">
      <button
        class="btn btn-link d-md-none collapsed"
        type="button"
        data-bs-target="#doc-sidebar-nav"
        data-bs-toggle="collapse"
        aria-controls="doc-sidebar-nav"
        aria-expanded="false"
        aria-label="Toggle docs navigation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="30"
          height="30"
          focusable="false"
        >
          <title>Menu</title>
          <path
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-miterlimit="10"
            d="M4 7h22M4 15h22M4 23h22"
          />
        </svg>
      </button>
    </div>
    <nav
      id="doc-sidebar-nav"
      class="doc-links collapse clearfix nav-fix"
    >
      <!-- <div class="search-form">
              <form @submit.prevent="onSubmit">
                <input
                  type="text"
                  placeholder="Search here.."
                >
                <button>
                  <img
                    src="@/assets/images/icon/59.svg"
                    alt=""
                  >
                </button>
              </form>
            </div> -->
      <ul class="list-item">
        <li class="dropdown-holder">
          <h4>{{ $t('documentation.getting_started.getting_started') }}</h4>
          <ul class="sub-menu show">
            <li>
              <a
                href="/developer/doc/sdk/get-started/installation#installation"
              >
                {{ $t('documentation.getting_started.installation') }}
              </a>
            </li>
            <li>
              <a
                href="/developer/doc/sdk/get-started/quick-start#quick-start"
                class="sec-menu"
              >{{ $t('documentation.getting_started.quick_start') }}</a>
              <ul
                class="main-side-nav sub-menu open"
              >
                <li>
                  <a
                    v-for="menu, idx in menus"
                    :key="idx"
                    :href="menu.href"
                    class="nav-link"
                  >{{ menu.title }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="dropdown-holder show">
          <a @click="open_doc_api()">
            <h4>API</h4>
          </a>
          <!-- <ul class="sub-menu">
                  <li><a href="#">Getting started</a></li>
                  <li><a href="#">Subscriptions</a></li>
                  <li><a href="#">Invoices</a></li>
                  <li><a href="#">Refunds</a></li>
                </ul> -->
        </li>
      </ul>
    </nav> <!-- /.doc-links -->
  </div> <!-- /.doc-sidebar -->
</template>

<script>
import paths from '@/api/paths';
import urls from '@/api/urls';
export default {
    data() {
        return {
            menus: [
                {
                    "href": "/developer/doc/sdk/get-started/quick-start#gdfsdk",
                    "title": this.$t('documentation.getting_started.gdfsdk_title'),
                },
                {
                    "href": "/developer/doc/sdk/get-started/quick-start#constraints",
                    "title": this.$t('documentation.getting_started.constraints_title'),
                },
                // {
                //     "href": "/developer/doc/sdk/get-started/quick-start#initialize",
                //     "title": this.$t('documentation.getting_started.initialize_title'),
                // },
                // {
                //     "href": "/developer/doc/sdk/get-started/quick-start#load",
                //     "title": this.$t('documentation.getting_started.load_title'),
                // },
                {
                    "href": "/developer/doc/sdk/get-started/quick-start#execute",
                    "title": this.$t('documentation.getting_started.execute_title'),
                },
                // {
                //     "href": "/developer/doc/sdk/get-started/quick-start#release",
                //     "title": this.$t('documentation.getting_started.release_title'),
                // },
            ],
        }
    },
    methods: {
        open_doc_api() {
            const doc_url = urls.BASE_URL + paths.API_DOC
            window.open(doc_url, '_blank')
        },
    }
}
</script>