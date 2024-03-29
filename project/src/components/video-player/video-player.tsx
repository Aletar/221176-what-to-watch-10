import { useRef, useEffect } from 'react';
import { VIDEO_PREVIEW_TIMEOUT } from '../../const';

export type VideoPlayerProps = {
  poster: string,
  src: string
};

function VideoPlayer({src, poster}: VideoPlayerProps): JSX.Element {
  const playerRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const autoplayTimeout = setTimeout(() => playerRef.current && playerRef.current.play(), VIDEO_PREVIEW_TIMEOUT);

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
