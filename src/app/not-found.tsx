import Image from "next/image";
import Link from "next/link";

import { Navbar } from "@/components/navbar";

import { ArrowLeft } from "lucide-react";
import NotFoundImage from "@/assets/404.png";

const NotFoundPage = () => {
  return (
    <div>
      <Navbar screenPosition={200} />

      <div className="flex w-full flex-col items-center justify-center gap-16 py-32 xl:flex-row xl:gap-36 xl:py-52">
        <div className="order-2 flex flex-col items-center gap-2 xl:order-1 xl:items-start">
          <p className="text-[32px] font-bold text-text-black md:text-[40px]">
            Oops....{" "}
          </p>

          <p className="text-[28px] text-text-black md:text-[32px]">
            Page not found?
          </p>

          <p className="w-[300px] text-center xl:text-left">
            Don&apos;t Worry, Lets Go To Home Page For Trading.
          </p>

          <Link
            href="/"
            className="mt-3 flex items-center justify-center gap-1.5 rounded-[5px] bg-primary px-9 py-3 text-white"
          >
            <ArrowLeft className="mr-1 h-5 w-5" />
            Back to home
          </Link>
        </div>

        <Image
          src={NotFoundImage}
          alt="404 Not Found"
          className="sm:[500px] order-1 w-[350px] md:w-[600px] xl:order-2 xl:w-[700px]"
        />
      </div>
    </div>
  );
};
export default NotFoundPage;
