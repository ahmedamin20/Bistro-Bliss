"use client";
import logo from "@/assets/logo.jpg";
import { CustomButtonLink } from "@/components/ui/CustomButton";
import { NavigationPaths } from "@/constants/routes/navigat";
import { NavLinks } from "@/constants/routes/navlinks";
// import useSmoothScroll from "@/hooks/useSmoothScroll";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { CiMenuFries } from "react-icons/ci";
import SocialLinksWrapper from "./SocialLinksWrapper";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname()
  return (
    <header className="w-full flex flex-col">
        <SocialLinksWrapper />

        <nav className="px-4 bg-grey-light">
      <div className="relative transition-all px-0 md:px-[4rem] duration-500 container flex justify-between items-center mx-auto p-3">
        <Link href={NavigationPaths.HOME} className="logo">
          <Image
            src={logo}
            width={150}
            height={150}
            loading="lazy"
            alt="logo"
          />
        </Link>
        <div className="hidden md:flex top-0 md:top-[4rem] flex-col md:flex-row justify-evenly gap-[15px]">
          {NavLinks.map((item) => (
            <Link
              key={item.id}
              className={`font-[400] text-[#000] mx-4 hover:translate-y-1 transition-all py-1 px-3 rounded-3xl ${pathName == item.href ? "bg-[#dbdfd0]" : ""}`}
              href={item.href}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden block relative left-[25%]"
        >
          {!isOpen ? <CiMenuFries className="font-bold" size={25} /> : <CgClose size={25} />}
        </button>
        <div>
          <CustomButtonLink className="border hidden" title="Book A Table" href={NavigationPaths.BOOK}/>
        </div>
      </div>
      <div
        className={`p-4 flex absolute z-[999] bg-white/85 text-black w-full left-0 flex-col md:flex-row justify-center gap-y-[60px] transform h-[100%] transition-transform duration-[1s] ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-[100rem]"
        }`}
      >
        {NavLinks.map((item) => (
          <Link
            onClick={() => setIsOpen(!isOpen)}
            key={item.id}
            className={`font-[400] mx-4 hover:translate-y-1 transition-all py-1 px-3 w-fit rounded-3xl ${pathName == item.href ? "bg-[#dbdfd0]" : ""}`}
            href={item.href}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
