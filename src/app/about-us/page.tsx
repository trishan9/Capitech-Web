import Image from "next/image";
import TickIcon from "@/assets/icons/Tick.svg";
import ABOUT_US_DATA from "./data";
import HeroBanner from "@/components/HeroBanner/page";

const AboutUsPage = () => {
  return (
    <section>
      <HeroBanner>
        <div className="bg-gradient-bg flex h-[17rem] flex-col items-center justify-center gap-4 pb-3 pt-16 text-white md:h-[32rem]">
          <h1 className="h-fit text-3xl font-bold md:text-7xl">About Us</h1>

          <p className="w-80 text-center text-xs md:w-[34rem] md:text-sm">
            MIDAS Stock Broking Company is a leading stock brokerage firm in
            Nepal. We are a member of Nepal Stock Exchange (NEPSE) and Central
            Depository System and Clearing Limited (CDSC).
          </p>
        </div>
      </HeroBanner>

      <div className="mx-8 flex flex-col items-center justify-center gap-8 px-8 py-14 xl:py-24">
        {ABOUT_US_DATA.map((data) => (
          <div key={data.title} className="flex items-center gap-32">
            {data.position === "left" && (
              <Image
                src={data.image}
                alt={data.title}
                width={500}
                height={500}
                className="hidden xl:block"
              />
            )}

            <div className="flex flex-col gap-6 xl:w-[590px]">
              <p className="text-center text-[22px] font-bold text-text-black md:text-5xl xl:text-left">
                {data.title}
              </p>

              <p className="text-base text-text-black opacity-60 md:text-xl">
                {data.description}
              </p>

              <ul className="flex flex-col items-start gap-6">
                {data.list.map(({ text, id }) => (
                  <li key={id} className="flex items-start gap-2">
                    <Image src={TickIcon} alt="Tick" className="mt-1" />

                    <p className="text-base text-text-black md:text-xl">
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {data.position === "right" && (
              <Image
                src={data.image}
                alt={data.title}
                width={500}
                height={500}
                className="hidden xl:block"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsPage;
