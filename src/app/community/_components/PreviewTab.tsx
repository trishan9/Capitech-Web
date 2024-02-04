"use client";

import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { User } from "lucide-react";
import { data } from "./data";
import FacebookPagePreview from "@/components/ui/facebook-page-preview";

const PreviewTab = memo(function PreviewTab({
  socials,
}: {
  socials: "facebook" | "other";
}) {
  if (socials === "facebook") {
    return (
      <section className=" m-[8px_auto] my-9 w-fit rounded-3xl border-[3px] border-primary shadow-md">
        <div className="flex items-center justify-center">
          <FacebookPagePreview pageNameOrId="midasstockbroking" />
        </div>
      </section>
    );
  } else if (socials === "other") {
    return (
      <div>
        <OtherCommunity />
      </div>
    );
  }
});

export default PreviewTab;

const OtherCommunity = () => {
  return (
    <div className="my-9 flex flex-col gap-5">
      {data.map((item) => (
        <div
          key={item.id}
          className="mx-auto flex w-[90%] justify-between gap-6 rounded-md p-[1.5rem_2rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:cursor-pointer hover:shadow-[0_3px_10px_#d37f35] md:w-[70%] xl:w-[40%]"
        >
          <div className="my-auto flex flex-col space-y-2">
            <h1 className="text-center text-lg font-semibold"> Click </h1>

            <Link
              href={item.link}
              className="text-blue-500 hover:underline hover:underline-offset-2"
            >
              Join us on {item.title}
            </Link>

            <h3 className="text-left text-neutral-600">
              <User size={18} className="inline" /> {item.username}
            </h3>
          </div>

          <div>
            <h2 className="text-center text-lg font-semibold">Scan</h2>

            <Image
              src={item.Qr}
              alt="QR Scan"
              width={100}
              height={100}
              className="rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
