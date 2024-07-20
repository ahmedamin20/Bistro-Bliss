import React from "react";
import logo from "@/assets/logo-dark.jpg";
import Image from "next/image";
import Link from "next/link";
import { GiBirdTwitter } from "react-icons/gi";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import cn from "@/utils/cn";
const LogoSection = () => {
    const iconSize = 20;
  return (
    <div className="p-6 w-full md:w-1/3 flex flex-col gap-y-[20px]">
      <Image src={logo} loading="lazy" width={300} height={200} alt="logo" />
      <article className="text-text-grey">
        In the new era of technology we look a in the future with certainty and
        pride to for our company and.
      </article>
      <div className="flex flex-row gap-[10px]">
        <SocialLink href="" children={<FaTwitter size={iconSize}/>} />
        <SocialLink href="" children={<FaFacebook size={iconSize}/>} />
        <SocialLink href="" children={<FaInstagram size={iconSize}/>} />
        <SocialLink href="" children={<FaGithub size={iconSize}/>} />
      </div>
    </div>
  );
};

export default LogoSection;

interface TSocialLinkProps{
    href: string;
    children: React.ReactNode;
    className?: string
}


const SocialLink = (props : TSocialLinkProps)=>{
    return(
        <Link href={props.href} className={cn("bg-red text-[#fff] p-3 rounded-full", props.className)}>
            {props.children}
        </Link>
    )
}