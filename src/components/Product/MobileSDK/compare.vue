<template>
  <div class="feature-blog-four mt-250 md-mt-200">
    <div class="container">
      <div class="title-style-five text-center mb-70 md-mb-50">
        <h6>{{ $t('product.sdk.comparison_stitle') }}</h6>
        <h2>{{ $t('product.sdk.comparison_title') }}</h2>
      </div>
  
      <div class="row">
        <div
          v-for="blog in blogs.slice(0, 3)"
          :key="blog.id"
          class="col-lg-4"
          data-aos="fade-up"
          data-aos-duration="1200"
          :data-aos-delay="blog.delay"
        >
          <div class="feature-article-meta">
            <div
              class="img-meta"
              @click="openImg(total_img)"
            >
              <img
                :src="blog.img"
                alt=""
              >
            </div>
            <div class="post-meta">
              <h3>
                <router-link :to="`/blog-details/${blog.id}`">
                  {{ blog.title }}
                </router-link>
              </h3>
              <div class="author_info">
                {{ blog.author }} <span class="text-yellow">{{ blog.position }}</span>
              </div>
            </div>
          </div> <!-- /.feature-article-meta -->
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>

  
  export default {
    name: 'FeatureBlog',
    data() {
        return {
            blogs: [
                {
                    id: 1,
                    img: new URL('https://storage.googleapis.com/gdflab_web/media/image/product/mobile_sdk/270x4_upscaled.png'),
                    title:this.$t('product.sdk.comps.0.title'),
                    author:this.$t('product.sdk.save_traffic'),
                    position:'84%',
                },
                {
                    id: 2,
                    img: new URL('https://storage.googleapis.com/gdflab_web/media/image/product/mobile_sdk/360x3_upscaled.png'),
                    title:this.$t('product.sdk.comps.1.title'),
                    author:this.$t('product.sdk.save_traffic'),
                    position:'70%',
                },
                {
                    id: 3,
                    img: new URL('https://storage.googleapis.com/gdflab_web/media/image/product/mobile_sdk/480x2_upscaled.png'),
                    title:this.$t('product.sdk.comps.2.title'),
                    author:this.$t('product.sdk.save_traffic'),
                    position:'60%',
                },
            ],
            total_img: new URL("https://storage.googleapis.com/gdflab_web/media/image/product/mobile_sdk/all_upscaled.png")
        }
    },
    methods: {
        openImg(img) {
            window.open(img)
        }
    },
  }
  </script>