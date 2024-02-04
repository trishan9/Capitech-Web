"use client";
import { useEffect } from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";
import Image from "next/image";
import FacebookIcon from "@/assets/socials/Facebook.svg";
import TwitterIcon from "@/assets/socials/Twitter.svg";
import LinkedinIcon from "@/assets/socials/Linkedin.svg";
import Timer from "./_components/Timer";
import { redirect } from "next/navigation";

const LaunchingSoonPopup = ({ launchDate }: { launchDate: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [emailAddress, setEmailAddress] = useState<string>("");

  const closePopup = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) {
      redirect("/");
    }
  }, [isOpen]);

  const onNotify = async () => {
    try {
      const res = await fetch(`/api/usermessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Waiting",
          contact: emailAddress,
          message: "Notify me",
        }),
      });

      const result = await res.json();

      if (result.success) {
        alert("Thank you for your interest. We'll keep you updated.");
        setEmailAddress("");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log(error);
    }
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
              <Dialog.Panel className="bg-secondary w-full max-w-[600px] transform overflow-hidden rounded-xl p-6 text-left align-middle text-white shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="flex w-full items-center justify-end text-lg font-medium leading-6 text-gray-900"
                >
                  <div className="cursor-pointer" onClick={closePopup}>
                    <X className="h-5 w-5 text-white" />
                  </div>
                </Dialog.Title>

                <p className="mx-auto w-fit text-3xl font-bold uppercase md:text-4xl">
                  Launching Soon
                </p>

                <Timer launchDate={launchDate} />

                <div className="mt-8 flex items-center justify-center gap-5">
                  <a
                    href="https://www.facebook.com/midasstockbroking"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={FacebookIcon} alt="Facebook" />
                  </a>
                  {/* <a href="https://www.linkedin.com/company/midas-stock-broking-company" target="_blank" rel="noopener noreferrer">
                    <Image src={TwitterIcon} alt="Twitter" />
                  </a> */}
                  <a
                    href="https://www.linkedin.com/company/midas-stock-broking-company"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={LinkedinIcon} alt="Linkedin" />
                  </a>
                </div>

                <p className="mt-3 text-center text-xs md:text-sm">
                  We&apos;ll keep you updated on our launch progress.
                </p>

                <div className="mt-4 flex items-stretch justify-center">
                  <input
                    className="max-w-[180px] rounded-l-lg bg-white p-3 text-sm text-black outline-none md:max-w-[250px] md:p-4"
                    type="email"
                    placeholder="Email Address"
                    required
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                  />

                  <button
                    onClick={onNotify}
                    className="rounded-r-lg border border-white bg-primary px-4 text-sm transition hover:bg-primary/90 md:px-7"
                  >
                    Notify Me
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default LaunchingSoonPopup;
