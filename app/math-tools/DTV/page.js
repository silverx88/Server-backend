'use client';
import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

export default function DTVPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const videoSrc = 'https://cdn-vod.dltv.ac.th/vod/upload/data/videos/32/video_82180-v-202405141509-93513.mp4/master.m3u8';

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);

      hls.on(Hls.Events.ERROR, function (event, data) {
        console.error('HLS.js error:', data);
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
    }
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: 'auto' }}>
      <video
        ref={videoRef}
        controls
        width="100%"
        style={{ display: 'block' }}
      />
    </div>
  );
}
