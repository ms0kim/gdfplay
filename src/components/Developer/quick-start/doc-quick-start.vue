<template>
  <div :class="`doc-container ${doc_banner ? 'mt-70 sm-m0' : 'top-border'}`">
    <div class="container">
      <div class="row flex-xl-nowrap g-0">
        <DocSidebar />
        <!--***************************** DOC MAIN BODY******************************** -->
        <main
          class="col-xl-9 col-md-8 doc-main-body"
        >
          <h2 id="quick-start">
            {{ $t('documentation.getting_started.quick_start') }}
          </h2>
          <h3 id="gdfsdk">
            {{ $t('documentation.getting_started.gdfsdk_title') }}
          </h3>
          <p>
            {{ $t('documentation.getting_started.gdfsdk_desc') }}
          </p>
          <h3 id="constraints">
            {{ $t('documentation.getting_started.constraints_title') }}
          </h3>
          <p>
            {{ $t('documentation.getting_started.constraints_desc') }}
          </p>
          <!-- <h3 id="initialize">
            {{ $t('documentation.getting_started.initialize_title') }}
          </h3>
          <p>
            {{ $t('documentation.getting_started.initialize_desc') }}
          </p>
          <div class="mark-blue">
            <pre><span class="s1">java</span> 
<span class="s2">GDFUpscaler</span>.initialize(getApplicationContext());</pre>
          </div> /.mark-blue -->
          <!-- <h3 id="load">
            {{ $t('documentation.getting_started.load_title') }}
          </h3>
          <p>
            {{ $t('documentation.getting_started.load_desc') }}
          </p>
          <div class="mark-blue">
            <pre><span class="s1">java</span>
<span class="s2">GDFUpscaler</span> upscaler = GDFUpscaler.getUpscaler(scale, width, height); </pre>
          </div>
          <p>
            {{ $t('documentation.getting_started.load_desc2') }}
          </p> -->
          <h3 id="execute">
            {{ $t('documentation.getting_started.execute_title') }}
          </h3>
          <p>
            {{ $t('documentation.getting_started.execute_desc') }}
          </p>
          <h5>Example for MediaPlayer</h5>
          <div class="bg-black">
            <pre><span class="s1">java</span>
<span class="s4">class</span> <span class="s3">VideoPlayActivity</span> <span class="s4">extends</span> <span class="s3">AppCompatActivity</span> <span class="s2">{</span>
  <span class="s1">// this ImageView must be placed in layout, where the video will be showed.</span>
  <span class="s4">private</span> <span class="s3">ImageView</span> <span class="s2">displayView;</span>
  <span class="s1">// play button should be placed in layout also.</span>
  <span class="s4">private </span><span class="s3">Button </span><span class="s2">btnPlay;</span>

  <span class="s3">MediaPlayer</span> <span class="s2">player = null;</span>
  <span class="s3">GDFSRProcessor</span> <span class="s2">videoSR = null;</span>

  <span class="s5">@Override</span>
  <span class="s4">protected void</span> <span class="s7">onCreate</span><span class="s2">(</span><span class="s3">Bundle</span> <span class="s2">savedInstanceState</span><span class="s2">) {</span>
      <span class="s1">// media resolution should be one of:
      // 320x180, 426x240, 480x270, 640x360, 854x480</span>
      <span class="s3">String</span> <span class="s2">mediaPath = </span><span class="s8">"https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_10MB.mp4"</span><span class="s2">;</span>
      <span class="s2">player = </span><span class="s4">new</span> <span class="s3">MediaPlayer</span><span class="s2">()</span>
      <span class="s2">player.</span><span class="s7">setDataSource</span><span class="s2">(mediaPath);</span>
      <span class="s2">player.</span><span class="s7">prepareAsync</span><span class="s2">();
      player.</span><span class="s7">setOnPreparedListener</span><span class="s2">(mp -> {
          videoSR = </span><span class="s4">new</span> <span class="s3">GDFSRProcessor</span><span class="s2">(activity, player.</span><span class="s7">getVideoWidth</span><span class="s2">(), player.</span><span class="s7">getVideoHeight</span><span class="s2">());
          videoSR.</span><span class="s7">setDisplayView</span><span class="s2">(displayView);
          player.</span><span class="s7">setSurface</span><span class="s2">(videoSR.</span><span class="s7">getPlayerSurface</span><span class="s2">());
          player.</span><span class="s7">setOnCompletionListener</span><span class="s2">(p -> {
              videoSR.</span><span class="s7">release</span><span class="s2">();
              player.</span><span class="s7">release</span><span class="s2">();
              videoSR = null;
              player = null;
          });
          player.</span><span class="s7">start</span><span class="s2">();
      });
  }
  <span class="s1">...</span>
}</span>
</pre>
          </div>
          <h5>Example for ExoPlayer</h5>
          <div class="bg-black">
            <pre><span class="s1">java</span>
<span class="s4">class </span><span class="s3">VideoPlayActivity </span><span class="s4">extends </span><span class="s3">AppCompatActivity <span class="s2">{</span>
    </span><span class="s1">// this ImageView must be placed in layout, where the video will be showed.
    </span><span class="s4">private </span><span class="s3">ImageView </span><span class="s2">displayView;
    </span><span class="s1">// play button should be placed in layout also.
    </span><span class="s4">private </span><span class="s3">Button </span><span class="s2">btnPlay;

    </span><span class="s3">ExoPlayer </span><span class="s2">player = null;
    </span><span class="s3">GDFSRProcessor </span><span class="s2">videoSR = null;

    </span><span class="s5">@Override
    </span><span class="s4">protected void </span><span class="s7">onCreate</span><span class="s2">(</span><span class="s3">Bundle </span><span class="s2">savedInstanceState) {
        </span><span class="s1">// media resolution should be one of:
        // 320x180, 426x240, 480x270, 640x360, 854x480
        </span><span class="s3">String </span><span class="s2">mediaPath = </span><span class="s8">"https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_10MB.mp4"</span><span class="s2">;
        </span><span class="s3">Uri </span><span class="s2">uri = </span><span class="s3">Uri</span><span class="s7">.parse</span><span class="s2">(mediaPath);
        </span><span class="s3">DataSource.Factory </span><span class="s2">dataSourceFactory = </span><span class="s4">new </span><span class="s3">DefaultDataSource.Factory</span><span class="s2">(this);
        </span><span class="s3">MediaSource </span><span class="s2">mediaSource;
        </span><span class="s5">@C.</span><span class="s2">ContentType </span><span class="s4">int </span><span class="s2">type = </span><span class="s3">Util.</span><span class="s7">inferContentType</span><span class="s2">(uri);
        </span><span class="s4">if </span><span class="s2">(type == C.CONTENT_TYPE_DASH) {
            mediaSource =
                </span><span class="s4">new </span><span class="s3">DashMediaSource.Factory</span><span class="s2">(dataSourceFactory)
                    .</span><span class="s7">createMediaSource</span><span class="s2">(</span><span class="s3">MediaItem.</span><span class="s7">fromUri</span><span class="s2">(uri));
        } </span><span class="s4">else if</span><span class="s2"> (type == C.CONTENT_TYPE_OTHER) {
            mediaSource =
                </span><span class="s4">new </span><span class="s3">ProgressiveMediaSource.Factory</span><span class="s2">(dataSourceFactory)
                    .</span><span class="s2">createMediaSource</span><span class="s2">(</span><span class="s3">MediaItem</span><span class="s2">.</span><span class="s7">.fromUri</span><span class="s2">(uri));
        } </span><span class="s4">else </span><span>{
            </span><span class="s4">throw new </span><span class="s3">IllegalStateException</span><span class="s2">()</span><span class="s2">;
        }

        </span><span class="s3">int </span><span class="s2">videoWidth, videoHeight, videoDuration</span><span class="s2">;
        </span><span class="s4">try </span><span class="s2">(</span><span class="s3">MediaMetadataRetriever </span><span class="s2">retriever = </span><span class="s4">new </span><span class="s3">MediaMetadataRetriever</span><span class="s2">()) {
            retriever.</span><span class="s7">setDataSource</span><span class="s2">(</span><span class="s2">uri.</span><span class="s7">toString</span><span class="s2">(), </span><span class="s4">new </span><span class="s3">HashMap&lt;></span><span class="s2">());
            </span><span class="s3">String </span><span class="s2">height = retriever.</span><span class="s7">extractMetadata</span><span class="s2">(MediaMetadataRetriever.METADATA_KEY_VIDEO_HEIGHT);
            </span><span class="s3">String </span><span class="s2">width = retriever.</span><span class="s7">extractMetadata</span><span class="s2">(MediaMetadataRetriever.METADATA_KEY_VIDEO_WIDTH);
            </span><span class="s3">String </span><span class="s2">duration = retriever.</span><span class="s7">extractMetadata</span><span class="s2">(MediaMetadataRetriever.METADATA_KEY_DURATION);
            videoWidth = </span><span class="s3">Integer.</span><span class="s7">parseInt</span><span class="s2">(width);
            videoHeight = </span><span class="s3">Integer.</span><span class="s7">parseInt</span><span class="s2">(height);
            videoDuration = </span><span class="s3">Integer.</span><span class="s7">parseInt</span><span class="s2">(duration);
        } </span><span class="s4">catch</span><span class="s2"> (</span><span class="s3">IOException </span><span class="s2">e) {
            </span><span class="s4">throw new </span><span class="s3">RuntimeException(</span><span class="s8">"cannot get video information: "</span><span class="s2">+uri.</span><span class="s7">toString</span><span class="s2">()</span><span class="s2">, e);
        }
        player = </span><span class="s4">new </span><span class="s3">ExoPlayer.Builder</span><span class="s2">(this).</span><span class="s7">build</span><span class="s2">();
        player.</span><span class="s7">setMediaSource</span><span class="s2">(mediaSource);
        player.</span><span class="s7">prepare</span><span class="s2">();
        videoSR = </span><span class="s4">new </span><span class="s3">GDFSRProcessor</span><span class="s2">(this, videoWidth, videoHeight);
        videoSR.</span><span class="s7">setDisplayView</span><span class="s2">(displayView);
        player.</span><span class="s7">setVideoSurface</span><span class="s2">(videoSR.</span><span class="s7">getPlayerSurface</span><span class="s2">());
        player.</span><span class="s7">addListener(</span><span class="s4">new </span><span class="s3">Player.Listener</span><span class="s7">() {
            </span><span class="s5">@Override
            </span><span class="s4">public void </span><span class="s7">onPlaybackStateChanged</span><span class="s2">(</span><span class="s3">int </span><span class="s2">playbackState) {
                </span><span class="s3">Player.Listener.super.</span><span class="s7">onPlaybackStateChanged</span><span class="s2">(playbackState);
                </span><span class="s4">if </span><span class="s2">(playbackState == </span><span class="s3">Player</span><span class="s2">.STATE_ENDED) {
                    videoSR.</span><span class="s7">release</span><span class="s2">();
                    player.</span><span class="s7">release</span><span class="s2">();
                    videoSR = null;
                    player = null;
                }
            }
        });
        player.</span><span class="s7">play</span><span class="s2">();
    }
    </span><span class="s1">...</span>
<span class="s2">}</span></pre>
          </div>
          
          <!-- <h3 id="release">
            {{ $t('documentation.getting_started.release_title') }}
          </h3>
          <p>
            {{ $t('documentation.getting_started.execute_desc') }}
          </p>
          <div class="mark-red">
            <pre><span class="s1">java</span>
 upscaler.close()</pre>
          </div> -->
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