import Image, { StaticImageData } from "next/image";
import React from "react";
import image from "@/assets/home_ph/sec3.jpeg";
const OffersSection = () => {
  const data = [
    {
      id: 1,
      image: image,
      title: "Catering",
      description:
        "In the new era of technology we look in the future with certainty for life.",
    },
    {
      id: 2,
      image: image,
      title: "Catering",
      description:
        "In the new era of technology we look in the future with certainty for life.",
    },
    {
      id: 3,
      image: image,
      title: "Catering",
      description:
        "In the new era of technology we look in the future with certainty for life.",
    },
    {
      id: 4,
      image: image,
      title: "Catering",
      description:
        "In the new era of technology we look in the future with certainty for life.",
    },
  ];
  return (
    <div className="flex w-full flex-col justify-start items-start p-2 md:p-[10rem]">
      <h2 className="font-roboto font-[700] text-[40px] md:text-[55px] w-full md:w-1/2">
        We also offer unique services for your events
      </h2>
      <div className="flex flex-col mx-auto md:flex-row w-full justify-evenly items-center p-2">
        {data.map( item => (
          <OfferCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default OffersSection;

interface TOfferCard {
  image: StaticImageData;
  title: string;
  description: string;
}

const OfferCard = (props: TOfferCard) => (
  <div className="flex my-5 rounded-lg flex-col w-full mx-auto md:w-[23%] gap-1">
    <Image
      className="rounded-lg my-1 w-full"
      src={props.image}
      width={280}
      height={120}
      alt=""
    />
    <h3 className="font-roboto font-[700] text-[18px]">{props.title}</h3>
    <p className="font-sans text-[14px]">{props.description}</p>
  </div>
);
