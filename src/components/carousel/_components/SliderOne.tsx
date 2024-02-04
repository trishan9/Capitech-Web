import Image from "next/image";
import Link from "next/link";
import SliderOneImage from "../../../../public/images/Objects Used-2.png";

const SliderOne = () => {
  return (
    <div className="item-center bg-gradient-bg relative flex h-[700px] w-full justify-between">
      <div className="z-10 my-auto flex-col">
        <div className="absolute right-[30%] top-[30%] ml-3 h-fit w-[60%] sm:m-auto xl:static">
          <h1 className="my-3 text-left text-3xl font-semibold leading-snug text-white md:text-5xl">
            Automated <br />
            Portfolio Tracker
          </h1>
          <p className="my-4 w-[80%] text-left text-[10px] text-slate-100 opacity-80 sm:text-xs">
            Automate portfolio tracking for real-time updates. Focus on trading
            while our tracker gives you a hassle-free eagle eye view. Try it for
            smarter portfolio management.
          </p>
          <Link
            href="/portfolio"
            className="my-3 block w-fit rounded border border-white px-5 py-3 text-xs text-white hover:bg-slate-100 hover:text-neutral-800"
          >
            Try it out
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 flex items-end justify-end">
        <Image src={SliderOneImage} alt="Object" className="sm:h-[650px]" />
      </div>
    </div>
  );
};
export default SliderOne;
