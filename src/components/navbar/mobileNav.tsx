"use client";

import Link from "next/link";
import Image from "next/image";

import { Dispatch, SetStateAction, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

import { useLockedBody } from "usehooks-ts";

import { data } from "./constant";
import ActiveLink from "../ui/activelink";

const MobileNav = ({
  screenPosition,
  sideMenu,
  setSideMenu,
}: {
  screenPosition: number;
  sideMenu: boolean;
  setSideMenu: Dispatch<SetStateAction<boolean>>;
}) => {
  const [locked, setLocked] = useLockedBody(sideMenu, "root");

  const handleSidebar = () => {
    setSideMenu(!sideMenu);
  };

  return (
    <>
      <RightSideBar
        sideMenu={sideMenu}
        setSideMenu={setSideMenu}
        screenPosition={screenPosition}
      />

      <div className="px-1 py-2 shadow-none">
        <Menu size={40} className="block lg:hidden" onClick={handleSidebar} />
      </div>
    </>
  );
};

export default MobileNav;

const RightSideBar = ({
  sideMenu,
  setSideMenu,
  screenPosition,
}: {
  sideMenu: Boolean;
  setSideMenu: Dispatch<SetStateAction<boolean>>;
  screenPosition: number;
}) => {
  return (
    <div
      className={cn(
        "fixed top-0 z-10 mb-7 h-full w-[60%] overflow-hidden rounded bg-light-gradient py-2  duration-200 ease-in-out lg:hidden ",
        {
          "right-0": sideMenu,
          "left-full": !sideMenu,
        },
      )}
    >
      <div className="flex flex-col gap-3 transition-transform lg:hidden">
        <div className="flex flex-col items-start gap-5">
          <div className="flex w-full items-center justify-end px-3">
            <Image src="/images/Logo.png" alt="logo" width="100" height="56" />
            <button
              type="button"
              className="ml-auto shadow-none"
              aria-label="close sidebar"
              onClick={() => setSideMenu(!sideMenu)}
            >
              <X />
            </button>
          </div>
          {data.map((item) => (
            <ActiveLink
              key={item.id}
              href={item.link}
              className="flex w-full items-center gap-3 text-balance p-3 text-sm"
            >
              {item.icon}
              {item.title}
            </ActiveLink>
          ))}

          <Link
            href="/learning-app"
            className={`mx-3 rounded border border-slate-100 px-5 py-2 text-xs  hover:bg-slate-100 hover:text-neutral-800 ${screenPosition > 160 && "border-neutral-800 hover:bg-slate-100 hover:text-neutral-800"}`}
          >
            Training
          </Link>

          <Link
            href="/kyc"
            className={`mx-3 rounded border border-slate-100 px-5 py-2 text-xs hover:bg-slate-100 hover:text-neutral-800 ${screenPosition > 160 && "border-neutral-800 hover:bg-slate-100 hover:text-neutral-800"}`}
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};
