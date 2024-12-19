import { useEffect, useRef } from 'react';

type CustomVideoPlayerProps = {
  url: string,
  isPlaying: boolean,
};

export default function CustomVideoPlayer(props: CustomVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (props.isPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [props.isPlaying]);

  return (
    <div>
      <video
        src={props.url}
        ref={videoRef}
        width='500'
      />
    </div>
  );
}