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
    <div className="w-full md:w-1/3 flex flex-col gap-y-[20px]">
      <Image src={logo} loading="lazy" width={300} height={200} alt="logo" />
      <article className="text-text-grey">
        In the new era of technology we look a in the future with certainty and
        pride to for our company and.
      </article>
      <div className='w-full flex flex-row'>
      <SocialLink href="">
        <FaTwitter size={iconSize} />
      </SocialLink>
      <SocialLink href="">
        <FaFacebook size={iconSize} />
      </SocialLink>
      <SocialLink href="">
        <FaInstagram size={iconSize} />
      </SocialLink>
      <SocialLink href="">
        <FaGithub size={iconSize} />
      </SocialLink>
      </div>
    </div>
  );
};

export default LogoSection;

interface TSocialLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const SocialLink = (props: TSocialLinkProps) => {
  return (
    <Link
      href={props.href}
      className={cn("bg-red w-fit text-[#fff] p-3 rounded-full", props.className)}
    >
      {props.children}
    </Link>
  );
};
