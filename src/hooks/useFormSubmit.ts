import { LegacyRef, useRef } from "react";

const useFormSubmit = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      console.log(Array.from(formData.entries())); 
    }
  };

  return {
    formRef,
    handleSubmit,
  };
};

export default useFormSubmit;
