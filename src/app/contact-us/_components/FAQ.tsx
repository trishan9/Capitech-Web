"use client";

import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
type TFaq = {
  id: number;
  question: string;
  answer: string;
};

const FAQ = () => {
  const [FAQS, setData] = useState<TFaq[]>();
  useEffect(() => {
    const getFaqs = async () => {
      try {
        const res = await fetch(`/api/getfaqs`);
        const result = await res.json();

        if (result.success) {
          setData(result.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getFaqs();
  }, []);
  return (
    <div className="my-14 flex w-full items-center justify-center">
      <div className="flex w-[880px] flex-col items-center justify-center gap-7">
        <p className="border-b-2 border-primary text-center font-inter text-2xl font-bold text-text-black">
          Frequently Asked Questions
        </p>

        <div className="mb-6 w-full">
          <div className="mx-auto w-full divide-y divide-gray-900/10 rounded-2xl bg-white px-8 py-12 shadow-lg md:px-24 md:py-20">
            <dl className="space-y-6 divide-y divide-gray-900/10">
              {FAQS?.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span
                            className={cn(
                              "text-base font-medium md:text-lg",
                              open ? "text-primary" : "text-text-black",
                            )}
                          >
                            {faq.question}
                          </span>

                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <Minus
                                className={cn(
                                  "h-6 w-6",
                                  open && "text-primary",
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <Plus className="h-6 w-6" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>

                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-sm leading-7 text-gray-600 md:text-base">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
