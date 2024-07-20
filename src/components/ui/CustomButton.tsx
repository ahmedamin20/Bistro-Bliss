import cn from "@/utils/cn";
import Link from "next/link";
import React, { MouseEventHandler } from "react";

interface TButtonLinkProps {
  title: string;
  href: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}
export const CustomButtonLink = (props: TButtonLinkProps) => {
  return (
    <Link
      href={props.href}
      className={cn("hidden md:flex p-3 hover:bg-red font-[500] hover:text-[#ffff] transition-all duration-75 rounded-3xl", props.className)}
    >
      {props.title}
    </Link>
  );
};

interface TButtonProps {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}
export const CustomButton = (props: TButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={cn("hidden md:flex bg-black p-3 rounded-2xl text-white", props.className)}
    >
      {props.title}
    </button>
  );
};
