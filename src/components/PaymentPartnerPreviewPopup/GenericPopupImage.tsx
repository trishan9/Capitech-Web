"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";
import fonepayImage from "@/assets/fonepay.png";
import Image from "next/image";

const GenericPopupImage = ({ isOpen, setIsOpen, item }: any) => {
  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={closePopup}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[600px] transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="flex w-full items-center justify-end text-lg font-medium leading-6 text-gray-900"
                >
                  <div className="cursor-pointer" onClick={closePopup}>
                    <X className="h-5 w-5" />
                  </div>
                </Dialog.Title>

                <div className="my-4 w-full rounded-md border border-primary p-6">
                  <p className="mx-auto w-fit border-b-2 border-white pb-1 text-2xl font-medium">
                    {item.name}
                  </p>

                  <div className="mt-8 flex w-full items-center justify-center">
                    <Image
                      src={item.image}
                      width={300}
                      height={300}
                      alt="Fonepay"
                      className="shadow-xl"
                    />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default GenericPopupImage;
