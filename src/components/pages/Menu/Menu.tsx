import React from "react";
import PageHeader from "./PageHeader";
import MenuSection from "./MenuSection";

const Menu = () => {
  return (
    <div className="w-full flex flex-col gap-[15px]">
      <PageHeader />
      <MenuSection />
    </div>
  );
};

export default Menu;
