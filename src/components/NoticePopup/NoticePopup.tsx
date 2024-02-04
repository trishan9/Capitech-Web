"use client";

import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";
import downloadFile from "@/lib/downloadFile";
import getTimeAgo from "@/lib/getTimeAgo";
import { format } from "date-fns";
import { useRecoilState } from "recoil";
import NoticePopupAtom, { NoticeDataAtom } from "@/atoms/NoticePopupAtom";

export type NoticeProps = {
  id: string;
  title: string;
  file: string;
  created_at: string;
  updated_at: string;
};

const NoticePopup = () => {
  const [isOpen, setIsOpen] = useRecoilState(NoticePopupAtom);
  const [data] = useRecoilState<NoticeProps>(NoticeDataAtom);

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
                  <button type="button" onClick={closePopup}>
                    <X className="h-5 w-5" />
                  </button>
                </Dialog.Title>

                <p className="mx-auto w-fit border-b-2 border-text-blue pb-1 font-medium">
                  {data.title}
                </p>

                <div className="mt-6">
                  <Image
                    src={data.file}
                    alt="Notice Image"
                    width={1080}
                    height={1080}
                  />
                </div>

                <div className="mt-6 flex w-full items-center justify-between">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-white"
                    onClick={closePopup}
                    // onClick={() => window.open(data.file, '_blank')}
                  >
                    Close Tab
                  </button>

                  <div className="flex items-center gap-4 text-xs text-text-black">
                    <div className="space-y-2 text-center">
                      <p className="font-medium">
                        {data &&
                          data.created_at &&
                          format(data.created_at, "dd LLL, yyyy")}
                      </p>

                      <p>
                        {data &&
                          data.created_at &&
                          getTimeAgo(data?.created_at)}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => downloadFile(data.file, "Notice")}
                      className="flex items-center justify-center gap-2 rounded-md border-2 border-primary bg-white px-5 py-3 text-sm font-medium"
                    >
                      Download
                    </button>
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

export default NoticePopup;
