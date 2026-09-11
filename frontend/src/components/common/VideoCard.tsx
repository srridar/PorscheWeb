import { useEffect, useRef } from "react";

interface VideoProps {
  src: string;
  poster?: string;
}

const VideoCard = ({ src }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.volume = 0;

    const preventSound = () => {
      video.muted = true;
      video.volume = 0;
    };

    video.addEventListener("volumechange", preventSound);

    return () => {
      video.removeEventListener("volumechange", preventSound);
    };
  }, []);

  return (
    <div className="h-[450px] w-full px-4 lg:w-2/3 md:w-2/3 mx-auto my-20 rounded-2xl overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        disablePictureInPicture
        className="h-full w-full object-cover rounded-2xl"
      />
    </div>
  );
};

export default VideoCard;