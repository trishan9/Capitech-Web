import Image from "next/image";
import Link from "next/link";
import SliderTwoImage from "../../../../public/images/Objects Used-1.png";

const SliderTwo = () => {
  return (
    <div className="item-center bg-gradient-bg relative flex h-[700px] w-full justify-between">
      <div className="z-10 my-auto flex-col xl:ml-24">
        <div className="absolute right-[30%] top-[30%] ml-3 h-fit w-[60%] sm:m-auto xl:static xl:w-[70%]">
          <h1 className="my-3 text-left text-3xl font-semibold leading-snug text-white md:text-5xl">
            Start The <br />
            Process With Us.
          </h1>
          <p className="my-4 w-[80%] text-left text-[10px] text-slate-100 opacity-80 sm:text-xs">
            No hassle, just fill the form, then go to the nearest branch,
            provide your identity, and you&apos;re done.
          </p>
          <Link
            href="/kyc"
            className="my-3 block w-fit rounded border border-white px-5 py-3 text-xs text-white hover:bg-slate-100 hover:text-neutral-800"
          >
            Get Started
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 flex items-end justify-end">
        <Image src={SliderTwoImage} alt="Object" className="sm:h-[650px]" />
      </div>
    </div>
  );
};
export default SliderTwo;
