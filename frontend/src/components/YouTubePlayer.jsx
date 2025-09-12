import React, { useEffect, useRef, useState } from 'react';

const YouTubePlayer = ({ videoId, onVideoEnd, title }) => {
  const playerRef = useRef(null);
  const playerInstanceRef = useRef(null);
  const [maxWatchedTime, setMaxWatchedTime] = useState(0);
  const intervalRef = useRef(null);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = initializePlayer;
    } else {
      initializePlayer();
    }

    function initializePlayer() {
      if (playerRef.current && window.YT && window.YT.Player) {
        playerInstanceRef.current = new window.YT.Player(playerRef.current, {
          videoId: videoId,
          playerVars: {
            controls: 1,
            disablekb: 1,
            fs: 0,
            modestbranding: 1,
            rel: 0
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
          },
        });
      }
    }

    function onPlayerReady() {
      intervalRef.current = setInterval(() => {
        if (playerInstanceRef.current && playerInstanceRef.current.getCurrentTime) {
          const currentTime = playerInstanceRef.current.getCurrentTime();
          const timeDiff = Math.abs(currentTime - lastTimeRef.current);
          
         
          if (timeDiff > 2 && currentTime > maxWatchedTime + 1) {
            playerInstanceRef.current.seekTo(maxWatchedTime, true);
          } else if (currentTime > maxWatchedTime) {
            setMaxWatchedTime(currentTime);
          }
          
          lastTimeRef.current = currentTime;
        }
      }, 1000);
    }

    function onPlayerStateChange(event) {
      if (event.data === 0) {
        onVideoEnd();
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      } else if (event.data === 2 && playerInstanceRef.current) {
        
        setTimeout(() => {
          if (playerInstanceRef.current.getPlayerState() === 2) {
            playerInstanceRef.current.playVideo();
          }
        }, 100);
      }
    }

    return () => {
      if (playerInstanceRef.current) {
        playerInstanceRef.current.destroy();
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [videoId, onVideoEnd]);

  return (
    <div className="aspect-video relative">
      <div ref={playerRef} style={{ width: '100%', height: '100%' }}></div>
      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
        No Skipping
      </div>
    </div>
  );
};

export default YouTubePlayer;