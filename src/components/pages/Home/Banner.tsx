import Image from "next/image";
import React from "react";
import bannerImage from "@/assets/home-banner/banner.png";
import { CustomButtonLink } from "@/components/ui/CustomButton";
import { NavigationPaths } from "@/constants/routes/navigat";
const Banner = () => {
  return (
    <div className="h-[100dvh] relative md:h-[85dvh] flex flex-col justify-center gap-5 text-center">
      <Image
        src={bannerImage}
        alt={"image"}
        className="object-cover absolute -z-50 top-0 left-0"
        fill
        sizes="( max-width: 1440px ) 100vw, 1440px"
        priority
      />
      <div className="container w-full md:w-[30%] mx-auto text-center flex flex-col gap-[20px]">
        <h1 className="font-roboto text-[60px] leading-9">
          Best food for your taste
        </h1>
        <p className="font-sans px-4">
          Discover delectable cuisine and unforgettable moments in our
          welcoming, culinary haven.
        </p>
        <div className="w-full md:w-2/3 p-2 flex flex-row justify-evenly mx-auto">
          <CustomButtonLink className="bg-red text-[#fff] hover:bg-grey-light hover:text-[#000] border" href={NavigationPaths.BOOK} title="Book A Table"/>
          <CustomButtonLink className="border" href={NavigationPaths.MENU} title="Explore Menu"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
