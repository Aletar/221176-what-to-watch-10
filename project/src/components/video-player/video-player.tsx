import { VideoPlayerProps } from '../../types/types';
import { useRef, useEffect } from 'react';

function VideoPlayer({src, poster}: VideoPlayerProps): JSX.Element {
  const playerRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const autoplayTimeout = setTimeout(() => playerRef.current && playerRef.current.play(), 1000);

    return () => clearTimeout(autoplayTimeout);
  });

  return (
    <video
      ref={playerRef}
      poster={poster}
      src={src}
      muted
      width="280"
      height="175"
      disablePictureInPicture
      loop
    >
    </video>
  );
}

export default VideoPlayer;
