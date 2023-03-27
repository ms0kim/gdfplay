<template>
  <div class="fancy-feature-eight mt-110 md-mt-80">
    <div
      id="home-video-box"
      class="video-box"
    >
      <video 
        :src="videos[crtVid]"
        :poster="key_frames[crtVid]"
        muted
        autoplay
        @ended="iterVid()"
      />
      <div class="over-video">
        <div class="row">
          <div class="col-xl-12 m-auto">
            <div class="title-style-four text-center mb-80 md-mb-30">
              <h2 style="line-height:1.5em;">
                {{ $t('home.whytitle1') }}
                <span> {{ $t('home.whytitle2') }} <img
                  src="../../assets/images/shape/line-shape-3.svg"
                  alt=""
                ></span>
                {{ $t('home.whytitle3') }}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="container">
      <div class="row">
        <div class="col-xl-11 m-auto">
          <div class="row">
            <div
              v-for="item in fancyFeatureData"
              :key="item.id"
              class="col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              :data-aos-delay="item.delay"
            >
              <div class="block-style-ten">
                <div class="icon">
                  <img
                    :src="item.img"
                    alt=""
                  >
                </div>
                <h6 class="title">
                  {{ item.category }}
                </h6>
                <p>{{ item.title }}</p>
                <!-- <a href="#"><img src="../../assets/images/icon/56.svg" alt=""></a> -->
              </div> <!-- /.block-style-ten -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FancyFeature',
  data () {
    return {
      fancyFeatureData:[
        {
          id:1,
          img: new URL('@/assets/images/icon/24.svg', import.meta.url),
          category:this.$t('home.performance'),
          title:this.$t('home.performance_detail'),
        },
        {
          id:2,
          img: new URL('@/assets/images/icon/12.svg', import.meta.url),
          category:this.$t('home.quality'),
          title:this.$t('home.quality_detail'),
          delay:'100'
        },
      ],
      videos: [
        new URL("https://storage.googleapis.com/gdflab_web/media/video/home/all_concat.mp4"),
        new URL("https://storage.googleapis.com/gdflab_web/media/video/home/all_concat.mp4"),
      ],
      key_frames: [
        new URL("https://storage.googleapis.com/gdflab_web/media/image/home/key_frame/all_concat.png"),
        new URL("https://storage.googleapis.com/gdflab_web/media/image/home/key_frame/all_concat.png"),
      ],
      crtVid: 0
    }
  },
  methods: {
    iterVid() {
      this.crtVid = ++this.crtVid % this.videos.length;
    }
  },
}
</script>