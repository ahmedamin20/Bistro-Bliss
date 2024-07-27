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
      <div className="relative h-[500px] w-full">
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
            className="top-0 flex flex-col justify-center items-center bg-black/60 w-full h-full absolute"
          >
            <span className="p-[2rem] rounded-full flex mb-5 bg-white justify-center items-center">
            <FaPlay className="text-red cursor-pointer" size={15} />
            </span>
            <span className="font-roboto text-white font-bold text-[30px] w-full md:w-[25%]"> Feel the authentic & original taste from us</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
