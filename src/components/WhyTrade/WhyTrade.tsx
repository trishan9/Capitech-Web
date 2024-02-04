import Link from "next/link";
import Image from "next/image";

import { reasonData } from "./data";
import { ArrowRight } from "lucide-react";

export default function WhyTrade() {
  return (
    <section className="bg-gray-50 px-5">
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-10 py-20 md:gap-20">
        <div className="flex flex-col">
          <div className="flex flex-col items-end">
            <h1 className="text-center text-3xl font-bold md:text-5xl">
              Why You Should Trade With Us?
            </h1>
            <Image
              src="/lotties/underline.svg"
              width={180}
              height={20}
              alt="underline"
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-5 bg-none bg-auto bg-scroll bg-[center_146px] bg-no-repeat md:gap-0 md:bg-[url('/path.svg')]">
          {reasonData.map((data) => {
            return (
              <BoxItem
                key={data.id}
                id={data.id}
                title={data.title}
                description={data.description}
              />
            );
          })}
        </div>

        <Link
          href="/kyc"
          className="flex items-center justify-center gap-1 rounded-lg bg-[#e67e22] px-5 py-3 text-sm text-white transition hover:bg-primary/90"
        >
          Trade Now <ArrowRight className="inline" />
        </Link>
      </div>
    </section>
  );
}

function BoxItem({
  id,
  title,
  description,
}: {
  id: number;
  title: string;
  description: string;
}) {
  return (
    <div
      key={id}
      className={`flex w-full flex-col pt-10  odd:md:items-start even:md:items-end`}
    >
      {/* each box lai alternate side ma rakhne */}
      <div
        className={`flex items-start gap-5 rounded-[10px] bg-white p-5 shadow-md md:h-40 md:w-[570px]`}
      >
        <Image src={"/checkmark.svg"} width={24} height={24} alt="checkmark" />
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
