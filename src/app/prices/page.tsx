"use client";

import { useEffect, useState } from "react";
import HeroBanner from "@/components/HeroBanner/page";
import Image from "next/image";
import Link from "next/link";
import { useScreenPosition } from "@/hooks";

type TPrices = {
  id: number;
  service: string;
  transaction_data: Record<string, string>;
};

const PricesPage = () => {
  const [data, setData] = useState<TPrices[]>();
  const screenPosition = useScreenPosition();

  useEffect(() => {
    const getPrices = async () => {
      try {
        const res = await fetch(`/api/getprices`);
        const result = await res.json();

        if (result.success) {
          setData(result.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getPrices();
  }, []);

  const filterDataByService = (service: string) =>
    data?.find((item) => item.service === service);
  const renderPricingRows = (pricingData: TPrices | undefined) =>
    pricingData?.transaction_data &&
    Object.entries(pricingData.transaction_data).map(([key, value]) => (
      <tr key={key}>
        <td className="w-[70%] border border-black px-4 py-2 text-sm md:text-base">
          {key}
        </td>
        <td className="w-[30%] border border-black px-4 py-2 text-sm md:text-base">
          {value}
        </td>
      </tr>
    ));
  return (
    <section className="bg-white">
      <HeroBanner>
        <div className="bg-gradient-bg flex h-[17rem] flex-col items-center justify-center gap-4 pb-3 pt-16 text-white md:h-[32rem]">
          <div className="relative flex w-80 flex-col items-center justify-center gap-4 md:w-[34rem]">
            <h1 className="z-10 h-fit text-3xl font-bold md:text-7xl">
              Pricing
            </h1>

            <p className="w-full text-center text-xs md:text-sm"></p>

            <Image
              src={"/images/pricingIcon.png"}
              alt="Price Icon"
              width={234}
              height={234}
              className="absolute right-[-20rem] top-[-100px] z-[3] hidden origin-top-left rotate-[15deg] opacity-50 md:block"
            />
          </div>
        </div>
      </HeroBanner>

      <div className="mx-auto my-20 flex max-w-7xl items-start justify-center px-5 md:px-0">
        <div className="flex flex-col items-center gap-5 md:items-start md:justify-start">
          <h1 className="text-center text-xl font-semibold md:text-left md:text-[35px]">
            MIDAS Stock Broking Company Fee Schedule
          </h1>

          <p className="text-base font-normal text-neutral-900 text-opacity-60">
            If you don&apos;t have an account, please create one to get started.
          </p>

          <p className="text-base font-normal text-neutral-900 text-opacity-60">
            No hassle, just fill the form, then go to the nearest branch,
            provide your identity, and you&apos;re done.
          </p>

          <Link
            href="/kyc"
            className={`hover: hover:bg-secondary mx-3 rounded border border-primary px-5 py-2 text-xl hover:text-slate-100 `}
          >
            Create Account
          </Link>
        </div>

        <Image
          src={"/images/PricingAvatar.png"}
          alt="Price Avatar"
          width={500}
          height={500}
          className="hidden md:block"
        />
      </div>

      <div className="mx-auto my-20 flex max-w-7xl flex-col items-start justify-center gap-10 px-5 md:px-0">
        <div className="flex flex-col items-start justify-start gap-5">
          <h1 className="text-xl font-semibold md:text-[35px]">
            Stock Brokerage Service Charges
          </h1>

          <p className="text-base font-normal text-neutral-900 text-opacity-60">
            Our business is highly regulated and all our service charges are
            fixed by regulatory authorities. Our stock broking services are
            charged as follows.
          </p>
        </div>

        <table className="w-full table-auto border-collapse border border-black">
          <thead>
            <tr>
              <th className="w-[70%] border border-black px-4 py-2 text-sm md:text-base">
                Transaction Volume
              </th>
              <th className="w-[30%] border border-black px-4 py-2 text-sm md:text-base">
                Percentage Turnover
              </th>
            </tr>
          </thead>
          <tbody>
            {renderPricingRows(
              filterDataByService("Stock Brokerage Service Charges"),
            )}
          </tbody>
        </table>
      </div>

      <div className="mx-auto my-20 flex max-w-7xl flex-col items-start justify-center gap-10 px-5 md:px-0">
        <div className="flex flex-col items-start justify-start gap-5">
          <h1 className="text-xl font-semibold md:text-[35px]">
            DEMAT Charges
          </h1>

          <p className="text-base font-normal text-neutral-900 text-opacity-60">
            Our business is highly regulated and all our service charges are
            fixed by regulatory authorities. Our stock broking services are
            charged as follows.
          </p>
        </div>

        <table className="w-full table-auto border-collapse border border-black">
          <thead>
            <tr>
              <th className="w-[70%] border border-black px-4 py-2 text-sm md:text-base">
                Transaction Volume
              </th>
              <th className="w-[30%] border border-black px-4 py-2 text-sm md:text-base">
                Percentage Turnover
              </th>
            </tr>
          </thead>
          <tbody>
            {renderPricingRows(filterDataByService("DEMAT Charges"))}
          </tbody>
        </table>
      </div>

      <div className="mx-auto my-20 flex max-w-7xl flex-col items-start justify-center gap-10 px-5 md:px-0">
        <div className="flex flex-col items-start justify-start gap-5">
          <h1 className="text-xl font-semibold md:text-[35px]">
            Margin Trading Charge
          </h1>

          <p className="text-base font-normal text-neutral-900 text-opacity-60">
            Our business is highly regulated and all our service charges are
            fixed by regulatory authorities. Our stock broking services are
            charged as follows.
          </p>
        </div>

        <table className="w-full table-auto border-collapse border border-black">
          <thead>
            <tr>
              <th className="w-[70%] border border-black px-4 py-2 text-sm md:text-base">
                Transaction Volume
              </th>
              <th className="w-[30%] border border-black px-4 py-2 text-sm md:text-base">
                Percentage Turnover
              </th>
            </tr>
          </thead>
          <tbody>
            {renderPricingRows(filterDataByService("Margin Trading Charge"))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PricesPage;
