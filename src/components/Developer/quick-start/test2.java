class VideoPlayActivity extends AppCompatActivity {
        // this ImageView must be placed in layout, where the video will be showed.
        private ImageView displayView;
        // play button should be placed in layout also.
        private Button btnPlay;
        MediaPlayer player = null;
        GDFSRProcessor videoSR = null;
        @Override
        protected void onCreate(Bundle savedInstanceState) {
            // media resolution should be one of:
            // 320x180, 426x240, 480x270, 640x360, 854x480
            String mediaPath = "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_10MB.mp4";
            player = new MediaPlayer()
            player.setDataSource(mediaPath);
            player.prepareAsync();
            player.setOnPreparedListener(mp -> {
                videoSR = new GDFSRProcessor(activity, player.getVideoWidth(), player.getVideoHeight());
                videoSR.setDisplayView(displayView);
                player.setSurface(videoSR.getPlayerSurface());
                player.setOnCompletionListener(p -> {
                    videoSR.release();
                    player.release();
                    videoSR = null;
                    player = null;
                });
                player.start();
            });
        }
        ...
    }