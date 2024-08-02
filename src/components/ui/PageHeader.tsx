import React from "react";
type TPageHeader = {
  title: string;
  description: string;
}
const PageHeader = (props: TPageHeader) => <div className="flex flex-col gap-2 w-full justify-center items-center my-6">
      <h1 className="font-bold font-roboto text-[55px]">{props.title}</h1>
      <span className="w-full md:w-1/3 text-center text-gray-500">
        {props.description}
      </span>
    </div>


export default PageHeader;
