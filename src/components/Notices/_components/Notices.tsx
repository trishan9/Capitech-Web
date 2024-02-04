"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import NoticeBox from "./NoticeBox";
import { NoticeProps } from "@/components/NoticePopup/NoticePopup";

export default function Notices() {
  const [notices, setNotices] = useState<NoticeProps[]>();

  useEffect(() => {
    const getNotices = async () => {
      try {
        const res = await fetch(`/api/getnotices`);
        const result = await res.json();

        if (result.success) {
          setNotices(result.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getNotices();
  }, []);

  return (
    <section className="bg-gray-50 px-5">
      {/* main container */}
      <div className="mx-auto flex flex-col items-center justify-center gap-10 py-20 md:gap-20 xl:w-[1180px]">
        {/* title container */}
        <div className="flex flex-col items-end">
            <h1 className="text-center text-3xl font-bold md:text-5xl">
              Notices
            </h1>
            <Image
              src="/lotties/underline.svg"
              width={180}
              height={20}
              alt="underline"
            />
          </div>

        {/* main container */}
        <div className="flex w-full items-center justify-start">
          <div className="hidden h-[188px] w-1/3 items-center justify-start md:flex">
            <div className="rounded-lg bg-[#333539]  p-[25px]">
              <Image
                src="/announcement.png"
                alt="notice"
                width={284}
                height={237}
              />
            </div>
          </div>

          <div className="w-full py-10 md:w-2/3">
          <NoticeBox data={notices || []} />
          </div>
        </div>
      </div>
    </section>
  );
}
