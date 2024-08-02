import React from "react";
import MenuSection from "./MenuSection";
import PageHeader from "@/components/ui/PageHeader";

const Menu = () => {
  return (
    <div className="w-full flex flex-col gap-[15px]">
      <PageHeader title="Our Menu" description="We consider all the drivers of change gives you the components you need
        to change to create a truly happens."/>
      <MenuSection />
    </div>
  );
};

export default Menu;
