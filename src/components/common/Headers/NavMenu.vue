<template>
  <ul class="navbar-nav">
    <li
      class="nav-item dropdown position-static"
      :class="checkActive('Home')"
    >
      <a
        class="nav-link"
        href="/"
      >{{ $t('menu.home') }}</a>
    </li>

    <li
      class="nav-item dropdown mega-dropdown-md"
      :class="checkActive('Product')"
    >
      <a
        class="nav-link dropdown-toggle"
        href="/"
        data-bs-toggle="dropdown"
      >{{ $t('menu.product') }}</a>
      <ul class="dropdown-menu">
        <li>
          <div class="row">
            <div
              v-for="(item, indexa) in product_data"
              :key="indexa"
              class=""
            >
              <div class="menu-column">
                <h6 class="mega-menu-title">
                  {{ item.title }}
                </h6>
                <ul class="mega-dropdown-list">
                  <li
                    v-for="(list, indexb) in item.dropdown_list"
                    :key="indexb"
                  >
                    <a
                      :href="list.url"
                      class="dropdown-item"
                    >{{
                      list.title
                    }}</a>
                  </li>
                </ul>
                <h6
                  v-if="item.dropdown_list_2"
                  class="mega-menu-title"
                >
                  {{ item.title_2 }}
                </h6>
                <ul
                  v-if="item.dropdown_list_2"
                  class="mega-dropdown-list"
                >
                  <li
                    v-for="(list, indexc) in item.dropdown_list_2"
                    :key="indexc"
                  >
                    <a
                      :href="list.url"
                      class="dropdown-item"
                    >{{
                      list.title
                    }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </li>
    <li
      class="nav-item dropdown mega-dropdown-md"
      :class="checkActive('Developer')"
    >
      <a
        class="nav-link dropdown-toggle"
        href="#"
        data-bs-toggle="dropdown"
      >{{ $t( 'menu.developer' ) }}</a>
      <ul class="dropdown-menu">
        <li>
          <div class="row">
            <div
              v-for="(item, indexd) in doc_menu_data"
              :key="indexd"
              class=""
            >
              <div class="menu-column">
                <h6 class="mega-menu-title">
                  {{ item.title }}
                </h6>
                <ul class="mega-dropdown-list">
                  <li
                    v-for="(list, indexe) in item.dropdown_list"
                    :key="indexe"
                  >
                    <router-link
                      v-if="list.url.startsWith('/')"
                      :to="list.url"
                      class="dropdown-item"
                    >
                      {{
                        list.title
                      }}
                    </router-link>
                    <a
                      v-else
                      class="dropdown-item"
                      @click="newTab(list.url)"
                    >
                      {{ 
                        list.title 
                      }}
                    </a>
                  </li>
                </ul>
                <h6
                  v-if="item.dropdown_list_2"
                  class="mega-menu-title"
                >
                  {{ item.title_2 }}
                </h6>
                <ul
                  v-if="item.dropdown_list_2"
                  class="mega-dropdown-list"
                >
                  <li
                    v-for="(list, indexf) in item.dropdown_list_2"
                    :key="indexf"
                  >
                    <router-link
                      :to="list.url"
                      class="dropdown-item"
                    >
                      {{
                        list.title
                      }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </li>
    <!-- <li
      class="nav-item dropdown position-static"
      :class="checkActive('Pricing')"
    >
      <a
        class="nav-link"
        href="/pricing"
      >{{ $t('menu.pricing') }}</a>
    </li> -->
    <li
      class="nav-item dropdown"
      :class="checkActive('Pricing')"
    >
      <a
        class="nav-link dropdown-toggle"
        href="#"
        data-bs-toggle="dropdown"
      >{{ $t('menu.pricing') }}</a>
      <ul class="dropdown-menu">
        <li
          v-for="(menu, index) in pricing_data"
          :key="index"
        >
          <router-link
            v-if="menu.title.startsWith('/')"
            :to="menu.url"
            class="dropdown-item"
          >
            {{
              menu.title
            }}
          </router-link>
          <a
            v-else
            :href="menu.url"
            class="dropdown-item"
          >
            {{ 
              menu.title 
            }}
          </a>
        </li>
      </ul>
      <!-- /.dropdown-menu -->
    </li>
    <li
      class="nav-item dropdown"
      :class="checkActive('Help')"
    >
      <a
        class="nav-link dropdown-toggle"
        href="#"
        data-bs-toggle="dropdown"
      >{{ $t('menu.help') }}</a>
      <ul class="dropdown-menu">
        <li
          v-for="(menu, index) in help_data"
          :key="index"
        >
          <router-link
            :to="menu.url"
            class="dropdown-item"
          >
            {{
              menu.title
            }}
          </router-link>
        </li>
      </ul>
      <!-- /.dropdown-menu -->
    </li>
  </ul>
</template>

<script>
import paths from "@/api/paths";
import urls from "@/api/urls";

export default {
  name: "NavMenu",
  
  components: {
  },
  data() {
    return {
      active: "Home",
      product_data: [{
        title: this.$t( 'menu.developer' ),
        title_2: this.$t( 'menu.service' ),
        dropdown_list: [
          {
            url: "/product/sdk",
            title: this.$t( 'menu.mobile_sdk' ),
          },
        ],
        dropdown_list_2: [
          {
            url: "https://pikavue.com",
            title: this.$t( 'menu.pikavue' ) ,
          },
          {
            url: "https://gdfenhancer.com",
            title: this.$t( 'menu.genhancer' ),
          },
        ]
      }],
      doc_menu_data: [
        {
          title: this.$t( 'menu.mobile_sdk' ),
          dropdown_list: [{
            url: "/developer/doc/sdk/get-started",
            title: this.$t( 'common.start' ),
          },
          // {
          //   url: "/developer/doc/sdk/guide",
          //   title: this.$t( 'menu.guides' ),
          // },
          {
            url: `${urls.BASE_URL}${paths.API_DOC}`,
            title: this.$t( 'menu.api_references' )
          }]
        }
      ],
      pricing_data: [
        {
          url: "/pricing/sdk",
          title: this.$t( 'menu.mobile_sdk' )
        },
        {
          url: "https://gdfenhancer.com/dashboard/subscribe",
          title: this.$t( 'menu.genhancer' )
        }
      ],
      help_data: [
        // {
        //   url: "/help/faqs",
        //   title: this.$t( 'menu.faq' ),
        // },
        {
          url: "/help/contact-us",
          title: this.$t( 'menu.contact_us' ),
        },
      ],
    };
  },
  methods: {
    newTab(url) {
      window.open(url, '_blank')
    },
    checkActive(menu) {
      switch(menu) {
        case 'Home' :
          if (this.$route.path === "/") {
            return 'active'
          }
          break;
        case 'Product' :
          if (this.$route.path.startsWith('/product')) {
            return 'active'
          }
          break;
        case 'Developer' :
          if (this.$route.path.startsWith('/developer')) {
            return 'active'
          }
          break;
        case 'Pricing' :
          if (this.$route.path.startsWith('/pricing')) {
            return 'active'
          }
          break;
        case 'Help' :
          if (this.$route.path.startsWith('/help')) {
            return 'active'
          }
          break;
      }
    }
  },
};
</script>
