"use client";
import { CustomButton } from "@/components/ui/CustomButton";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import useFormSubmit from "@/hooks/useFormSubmit";

const Form = () => {
  const { formRef, handleSubmit } = useFormSubmit();
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-[90%] gap-y-[35px] md:w-[75%] top-[200px] mx-auto py-[4rem] px-9 grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4 rounded-lg shadow-lg bg-white"
    >
        <Input
        containerClassName="col-span-2 md:col-span-1"
        type="text"
        name="name"
        label="Name"
        placeholder="Enter Your Name"
      />
      <Input
        containerClassName="col-span-1"
        type="email"
        name="email"
        label="Email"
        placeholder="Enter Your Email"
      />
      <Input
        containerClassName="col-span-2"
        type="text"
        name="subject"
        label="Subject"
        placeholder="Subject"
      />
      <TextArea
        containerClassName="col-span-2"
        inputClassName="pb-[8rem]"
        name="message"
        label="Message"
        placeholder="Write your message"
      />
      <CustomButton
        title="Send"
        className="col-span-1 md:col-span-2  text-center items-center justify-center bg-red text-white hover:bg-transparent hover:text-red"
      />
    </form>
  );
};

export default Form;
