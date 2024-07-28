import React from "react";
import profile from "@/assets/about/profile.svg";
import Image, { StaticImageData } from "next/image";
const CustomersSays = () => {
  return (
    <div className="flex flex-col gap-[5rem] my-[5rem]">
      <h1 className="text-3xl font-bold text-center">What Our Customers Say</h1>
      <div className="flex flex-row w-full justify-evenly items-center flex-wrap px-4 md:px-[5rem]">
        <Card
            title="The best restaurant"
          description={`Last night, we dined at place and were simply blown away. From the
          moment we stepped in, we were enveloped in an inviting atmosphere and
          greeted with warm smiles.`}
            image={profile}
        />
        <Card
            title="Simply delicious"
          description={`Last night, we dined at place and were simply blown away. From the
          moment we stepped in, we were enveloped in an inviting atmosphere and
          greeted with warm smiles.`}
            image={profile}
        />
        <Card
            title="One of a kind restaurant"
          description={`Last night, we dined at place and were simply blown away. From the
          moment we stepped in, we were enveloped in an inviting atmosphere and
          greeted with warm smiles.`}
            image={profile}
        />
        
      </div>
    </div>
  );
};

export default CustomersSays;
interface TCardType {
  title: string;
  description: string;
  image: StaticImageData;
}
const Card = (props: TCardType) => {
  return (
    <div className="w-full my-3 md:w-[28%] rounded-2xl flex flex-row justify-between gap-[30px] p-9 flex-wrap items-center bg-grey-light">
      <div className="flex flex-col gap-[25px] justify-start items-start text-red font-[800] text-[17px]">
        "{props.title}"
      </div>
      <div className="flex flex-col gap-[25px] justify-start items-start font-[500] text-grey-dark">
        {props.description}
      </div>
      <hr className="p-[.05rem] mx-auto w-full my-4" />
      <div className="flex flex-row gap-[20px]">
        <Image
          loading="lazy"
          src={props.image}
          width={90}
          height={90}
          alt="profile"
        />
        <div className="flex flex-col justify-center gap-[10px]">
          <div className="font-[700] font-sans">Sophire Robson</div>
          <div className="font-[400] text-gray-500 font-sans">
            Los Angeles, CA
          </div>
        </div>
      </div>
    </div>
  );
};
