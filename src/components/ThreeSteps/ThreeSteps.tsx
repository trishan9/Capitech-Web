import Link from "next/link";
import Image from "next/image";
import GetStartedIcon from "@/assets/icons/Get-Started.svg";
import Arrow1 from "@/assets/Arrow1.svg";
import Arrow2 from "@/assets/Arrow2.svg";
import STEPS_OF_TRADING from "./data";

const ThreeSteps = () => {
  return (
    <section className="bg-gray-50 px-5">
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-10 py-20 xl:w-[1180px] xl:gap-20">
        <div className="flex flex-col gap-4">
          <h1 className="text-center text-3xl font-bold md:text-5xl">
            Three Steps of Trading
          </h1>

          <p className="text-center font-roboto text-sm font-light text-text-black opacity-80 md:text-xl">
            No hassle, just fill the form, then go to the nearest branch,
            provide your identity, and you&apos;re done.
          </p>
        </div>

        <div className="relative grid w-full grid-cols-1 items-start justify-center gap-5 gap-y-6 bg-none bg-auto bg-scroll bg-center bg-no-repeat xl:grid-cols-3 xl:gap-0">
          <Image
            src={Arrow1}
            alt="Arrow 1"
            className="absolute left-[16.5rem] top-0 hidden xl:block"
          />

          <Image
            src={Arrow2}
            alt="Arrow 2"
            className="absolute bottom-32 right-[16.5rem] hidden xl:block"
          />

          {STEPS_OF_TRADING.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center justify-center gap-3"
            >
              <div className="flex h-[100px] w-[88px] items-center justify-center rounded-t-2xl rounded-br-2xl bg-light-gradient shadow-lg">
                <Image src={step.icon} alt={step.stepName} />
              </div>

              <p className="mt-2 text-center font-semibold text-primary">
                Step {index + 1}: {step.stepName}
              </p>

              <p className="w-[318px] text-center text-sm">{step.details}</p>
            </div>
          ))}
        </div>

        <Link
          href="/kyc"
          className="flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-primary/80"
        >
          <span>Get Started</span>

          <Image src={GetStartedIcon} alt="Get Started" />
        </Link>
      </div>
    </section>
  );
};

export default ThreeSteps;
