"use client";

import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import GenericPopupImage from "../PaymentPartnerPreviewPopup/GenericPopupImage";
import GenericPopupDescription from "../PaymentPartnerPreviewPopup/GenericPopupDescription";

type TPaymentPartner = {
  id: number;
  name: string;
  logo: string;
  image: string;
  description: {
    step: number;
    action: string;
  }[];
  created_at: string;
  updated_at: string;
};

export default function PaymentPartner() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedPaymentGateway, setSelectedPaymentGateway] = useState<
    string | null
  >(null);
  const [data, setData] = useState<TPaymentPartner[]>();
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);

  useEffect(() => {
    const getpaymentpartner = async () => {
      try {
        const res = await fetch(`/api/getpaymentpartner`);
        const result = await res.json();
        if (result.success) {
          setData(result.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getpaymentpartner();
  }, []);

  const handleClick = (item: TPaymentPartner) => {
    setSelectedPaymentGateway(item.name);
    setIsOpen(true);
  };

  const handleLogoMouseEnter = (name: string) => {
    setHoveredLogo(name);
  };

  const handleLogoMouseLeave = () => {
    setHoveredLogo(null);
  };

  return (
    <section className="bg-gray-50 px-5">
      <div className="flex flex-col items-center justify-center gap-10 py-20 md:gap-20">
      <div className="flex flex-col items-end">
          <h1 className="text-center text-3xl font-bold md:text-5xl">
            Payment Partners
          </h1>
          <Image
            src="/lotties/underline.svg"
            width={180}
            height={20}
            alt="underline"
          />
        </div>

        <div className="flex flex-col gap-10 md:flex-row lg:gap-20">
          {data?.map((item) => (
            <Fragment key={item.id}>
              <Image
                src={item.logo}
                width={300}
                height={300}
                alt={item.name}
                className={`h-auto w-[100px] cursor-pointer transition ${
                  hoveredLogo === item.name ? "opacity-100" : "opacity-50"
                } hover:scale-110 md:h-[100px] md:w-auto `}
                onClick={() => handleClick(item)}
                onMouseEnter={() => handleLogoMouseEnter(item.name)}
                onMouseLeave={handleLogoMouseLeave}
              />
            </Fragment>
          ))}
        </div>

        {isOpen && (
          <>
            {data?.find((item) => item.name === selectedPaymentGateway)
              ?.description ? (
              <GenericPopupDescription
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                selectedPaymentGateway={selectedPaymentGateway}
                item={data?.find(
                  (item) => item.name === selectedPaymentGateway,
                )}
              />
            ) : (
              <GenericPopupImage
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                selectedPaymentGateway={selectedPaymentGateway}
                item={data?.find(
                  (item) => item.name === selectedPaymentGateway,
                )}
              />
            )}
          </>
        )}
      </div>
    </section>
  );
}
