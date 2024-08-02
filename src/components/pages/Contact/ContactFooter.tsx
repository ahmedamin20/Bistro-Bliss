import React from "react";

const ContactFooter = () => {
  return (
    <div className="w-full mt-[500px] md:mt-[300px] bg-white p-[3rem] h-[700px] md:h-[600px] flex">
      <div className="flex flex-wrap my-[20rem] md:my-0  gap-y-[1rem] justify-between items-end w-[90%] md:w-[80%] mx-auto">
        <div className="w-full md:w-[28%] flex flex-col gap-[15px]">
          <span className="font-sans font-bold">Call Us:</span>
          <span className="font-sans font-semibold text-red">
            +1-234-567-8900
          </span>
        </div>
        <div className="w-full md:w-[28%] flex flex-col gap-[15px]">
          <span className="font-sans font-bold">Hours:</span>
          <span className="font-sans font-semibold">
            Mon-Fri: 11am - 8pm
            <br />
            Sat, Sun: 9am - 10pm
          </span>
        </div>
        <div className="w-full md:w-[28%] flex flex-col gap-[15px]">
          <span className="font-sans font-bold">Our Location:</span>
          <span className="font-sans font-semibold">
            123 Bridge Street Nowhere Land, LA 12345 United States
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
