"use client";

import Link from "next/link";
import { data } from "./constant";
import Image from "next/image";
import ActiveLink from "@/ui/activelink";
import MobileNav from "./mobileNav";
import { useState } from "react";

const Navbar = ({ screenPosition }: { screenPosition: number }) => {
  const [sideMenu, setSideMenu] = useState(false);
  return (
    <nav
      className={`fixed top-0 z-20 h-[70px] w-full text-gray-100 ${screenPosition > 160 && "bg-neutral-100 text-neutral-800"}`}
    >
      <div className="flex h-[70px] flex-row items-center justify-between px-5">
        <div className="md:w-[15%] xl:w-[30%]">
          {screenPosition > 160
            ? !sideMenu && (
                <Link href="/">
                  <Image
                    src="/images/LogoAfterSliding.png"
                    alt="logo"
                    width="176"
                    height="56"
                  />
                </Link>
              )
            : !sideMenu && (
                <Link href="/">
                  <Image
                    src="/images/logo1.png"
                    alt="logo"
                    width="176"
                    height="56"
                  />
                </Link>
              )}
        </div>

        <div className="block lg:hidden">
          <MobileNav
            screenPosition={screenPosition}
            sideMenu={sideMenu}
            setSideMenu={setSideMenu}
          />
        </div>

        <div className="hidden w-[80%] flex-row items-center justify-between lg:flex">
          {data.map((item) => (
            <div key={item.id}>
              <ActiveLink href={item.link} className="font-normal">
                {item.title}
              </ActiveLink>
            </div>
          ))}

          <Link
            href="/learning-app"
            className={`rounded border  px-5 py-2 font-normal  ${screenPosition > 160 ? " border-[#e67e22] hover:bg-[#d37f35] hover:text-slate-100" : "border-slate-100 hover:bg-slate-100 hover:text-neutral-800"}`}
          >
            Training
          </Link>

          <Link
            href="/kyc"
            className={`rounded border  px-5 py-2 font-normal  ${screenPosition > 160 ? " border-[#e67e22] hover:bg-[#d37f35] hover:text-slate-100" : "border-slate-100 hover:bg-slate-100 hover:text-neutral-800"}`}
          >
            Create Account
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
