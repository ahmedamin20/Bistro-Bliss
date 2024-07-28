"use client";
import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import menu from "@/assets/about/menu.svg";
import group from "@/assets/about/Group.svg";
import timer from "@/assets/about/timer.svg";
import Image, { StaticImageData } from "next/image";
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
    <div className="w-full my-4 flex flex-col">
      <div className="relative h-[500px] w-full">
        <video
          onClick={handleClick}
          ref={videoRef}
          src={src}
          className="w-full h-full"
          controls={false}
        />
        {!play && (
          <button
            onClick={handleClick}
            className="top-0 flex flex-col justify-center gap-[20px] items-center bg-black/60 w-full h-full absolute"
          >
            <span className="p-[2rem] rounded-full flex bg-white justify-center items-center">
              <FaPlay className="text-red cursor-pointer" size={15} />
            </span>
            <span className="font-roboto text-white font-bold text-[45px] w-full md:w-[30%]">
              {" "}
              Feel the authentic & original taste from us
            </span>
          </button>
        )}
      </div>
      <div className="bg-white flex justify-evenly p-5 items-center flex-row flex-wrap w-full">
        <Item
          image={menu}
          title="Multi Cuisine"
          description={`In the new era of technology we look in
          the future with certainty life.`}
        />
        <Item
          image={group}
          title="Easy To Order"
          description={`In the new era of technology we look in
          the future with certainty life.`}
        />
        <Item
          image={timer}
          title="Fast Delivery"
          description={`In the new era of technology we look in
          the future with certainty life.`}
        />
      </div>
    </div>
  );
};

export default VideoSection;
interface TItemProps {
  title: string;
  description: string;
  image: StaticImageData;
}
const Item = (props: TItemProps) => {
  return (
    <div className="text-black my-4 font-bold text-[20px] w-[95%] md:w-[25%] gap-[20px] flex justify-evenly items-center flex-row">
      <Image src={props.image} width={80} height={80} alt="" />
      <span className="flex flex-col gap-[10px]">
        <span className="font-[700] text-[15px] font-sans">{props.title}</span>
        <span className="font-[500] text-grey-dark text-[12px] font-sans">
          {props.description}
        </span>
      </span>
    </div>
  );
};
