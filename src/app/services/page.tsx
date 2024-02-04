"use client";

import Image from "next/image";
import { useScreenPosition } from "@/hooks";
import Navbar from "@/components/navbar/navbar";
import FinanceImage from "@/assets/Finance.svg";
import data from "./data";
import StepCard from "./_components/StepCard";

const ServicesPage = () => {
  const screenPosition = useScreenPosition();

  return (
    <section>
      <Navbar screenPosition={screenPosition} />

      <div className="bg-gradient-bg flex h-[17rem] flex-col items-center justify-center gap-4 pb-3 pt-16 text-white md:h-[32rem]">
        <h1 className="h-fit text-3xl font-bold md:text-7xl">Services</h1>

        <p className="w-80 text-center text-xs md:w-[34rem] md:text-sm">
          Midas Stock Broking simplifies stock trading on NEPSE with a four-step
          online setup, providing convenient account options and secure DEPOT
          services in collaboration with Nepal DP and CDS.
        </p>
      </div>

      <div className="mx-2 flex flex-col items-center justify-center gap-12 px-8 py-10 xl:gap-6 xl:py-24">
        <div className="flex items-center gap-32">
          <div className="flex flex-col gap-1.5 xl:w-[590px]">
            <p className="text-left text-[20px] font-bold text-text-black md:text-4xl">
              Stock Brokerage Services
            </p>

            <p className="text-sm text-text-black opacity-60 md:text-base">
              Through our head office in Kathmandu and our branch in Butwal and
              Gorkha, we provide effective and efficient stock trading services.
            </p>
            <p className="text-sm text-text-black opacity-60 md:text-base">
              Investors can benefit by trading equities listed in the NEPSE.
              Furthermore, our customers are provided information on the newest
              quotes and are given continuous stock updates upon request.{" "}
            </p>
          </div>

          <Image
            src={FinanceImage}
            alt={"Finance"}
            className="hidden xl:block"
          />
        </div>

        <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 py-8 xl:w-[1180px]">
          <div className="flex flex-col gap-4">
            <p className="text-center text-[20px] font-bold md:text-4xl">
              NEPSE Online Trading Account
            </p>

            <p className="text-center text-sm text-text-black opacity-60 md:text-base">
              Start your online trading today with Midas Stock Broking Company
              Pvt Ltd. Follow the procedure below and enjoy stock trading from
              the comfort of your home.
            </p>
          </div>

          <div className="flex w-full flex-col items-stretch justify-center gap-5 md:w-[750px]">
            {data.STEPS_DATA.map((data, index) => (
              <StepCard key={data.id} data={data} index={index + 1} />
            ))}
          </div>
        </div>

        {data.SERVICES_DATA.map((data) => (
          <div
            key={data.title}
            className="flex w-full items-center gap-32 xl:w-fit"
          >
            {data.position === "left" && (
              <Image
                src={data.image}
                alt={data.title}
                className="hidden xl:block"
              />
            )}

            <div className="flex flex-col gap-1.5 xl:w-[590px]">
              <p className="text-left text-[20px] font-bold text-text-black md:text-4xl">
                {data.title}
              </p>

              {data.description.split("\n").map((line, index) => (
                <p
                  key={index}
                  className="text-sm text-text-black opacity-60 md:text-base"
                >
                  {line}
                </p>
              ))}
            </div>

            {data.position === "right" && (
              <Image
                src={data.image}
                alt={data.title}
                className="hidden xl:block"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
