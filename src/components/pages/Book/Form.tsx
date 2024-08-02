"use client";
import { CustomButton } from "@/components/ui/CustomButton";
import Input from "@/components/ui/Input";
import SelectMenu from "@/components/ui/SelectMenu";
import useFormSubmit from "@/hooks/useFormSubmit";
import React from "react";
import { PersonNumbers } from "./data";

const Form = () => {
  const { formRef, handleSubmit } = useFormSubmit();
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-[90%] gap-y-[35px] md:w-[75%] absolute top-[200px] mx-auto py-[4rem] px-9 grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4 rounded-lg shadow-lg bg-white"
    >
      <Input
        containerClassName="col-span-1"
        type="date"
        name="date"
        label="Date"
        placeholder=""
      />
      <Input
        containerClassName="col-span-1"
        type="time"
        name="time"
        label="Time"
        placeholder=""
      />
      <Input
        containerClassName="col-span-1"
        type="name"
        name="name"
        label="Name"
        placeholder="Your Name"
      />
      <Input
        containerClassName="col-span-1"
        type="phone"
        name="phone"
        label="Phone"
        placeholder=" 01 * * * * * * * * "
      />
      <SelectMenu
        options={PersonNumbers}
      />
      <CustomButton
        title="Book A Table"
        className="col-span-1 md:col-span-2  text-center items-center justify-center bg-red text-white hover:bg-transparent hover:text-red"
      />
    </form>
  );
};

export default Form;
