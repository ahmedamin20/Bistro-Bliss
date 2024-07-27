"use client";
import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

const src = "/videos/video.mp4";
const VideoSection = () => {
  const [play, setPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleClick = () => {
    if (play) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setPlay(!play);
  };

  return (
    <div className="w-full my-4">
      <div className="relative h-[300px] w-full">
        <video
        onClick={handleClick}
          ref={videoRef}
          src={src}
          className="w-full h-full"
          width={1000}
          height={200}
          controls={false}
        />
        {!play && (
          <button
            onClick={handleClick}
            className="top-0 justify-center items-center bg-black/25 w-full h-full absolute flex"
          >
            <FaPlay className="text-white/50 cursor-pointer" size={80} />
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
