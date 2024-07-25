import image from "@/assets/home_ph/sec2.jpeg";
import { CustomButtonLink } from "@/components/ui/CustomButton";
import cn from "@/utils/cn";
import Image from "next/image";
import React from "react";
import { BiPhone } from "react-icons/bi";
import { CiLocationOn, CiMail } from "react-icons/ci";
const HomeContact = ({className} : {className?: string}) => {
  const phone = "01147398918",
    iconSize = 20,
    email = "tc.supply6@gmail.com";
  return (
    <div className={cn("w-full flex flex-col bg-grey-light gap-y-[10rem] md:gap-y-0 md:flex-row justify-evenly flex-wrap overflow-hidden px-[3rem] py-[1rem] md:px-[4rem] md:py-[10rem]", className)}>
      <div className="w-full md:w-1/2 flex relative">
        <Image
          src={image}
          alt="image"
          height={400}
          width={400}
          loading="lazy"
          className=" rounded-xl z-[1] w-[70%]"
        />
        <div className="flex z-[2] flex-col p-5 py-8 md:py-[3rem] left-[25%] md:left-[35%] top-[66%] md:top-[60%] w-[90%] md:w-[50%] rounded-3xl gap-[1rem] md:gap-[3rem] absolute bg-grey-dark text-white">
          <h4 className="text-bold font-sans font-bold ">
            Contact and Visit us
          </h4>
          <div className="flex flex-col gap-5">
            <Wrapper>
              <BiPhone size={iconSize} />
              <a href={`tel:${phone}`}>{phone}</a>
            </Wrapper>
            <Wrapper>
              <>
                <CiMail size={iconSize} />
                <a href={`mailto:${email}`}>{email}</a>
              </>
            </Wrapper>
            <Wrapper>
              <>
                <CiLocationOn size={iconSize} />
                <a href={``} className="w-full text-[11px] md:text-[15px]">
                  837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
                </a>
              </>
            </Wrapper>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col text-start">
        <h2 className="font-[300] font-roboto text-[35px] md:text-[60px]">
          We provide healthy food for your family.
        </h2>
        <span className="my-4">
          Our story began with a vision to create a unique dining experience
          that merges fine dining, exceptional service, and a vibrant ambiance.
          Rooted in city&apos;s rich culinary culture, we aim to honor our local
          roots while infusing a global palate.
          <p className="my-6">
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
        </span>
        <CustomButtonLink
        href=""
        title="More About Us"
        className="w-fit text-center"
        />
      </div>
    </div>
  );
};

export default HomeContact;

interface TWrapperProps {
  children: React.ReactNode;
  className?: string;
}
const Wrapper = (props: TWrapperProps) => {
  return (
    <div className="flex flex-row items-center flex-nowrap gap-[10px]">
      {props.children}
    </div>
  );
};
