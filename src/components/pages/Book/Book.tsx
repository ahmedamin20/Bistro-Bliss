import PageHeader from "@/components/ui/PageHeader";
import React from "react";
import Form from "./Form";
import Map from "./Map";

const Book = () => {
  return (
    <div className="relative flex flex-col justify-center items-center bg-[#f9f9f7] overflow-x-hidden">
      <PageHeader
        title="Book A Table"
        description="We consider all the drivers of change gives you the components
        you need to change to create a truly happens."
      />
        <Form />
        <Map />
    </div>
  );
};

export default Book;
