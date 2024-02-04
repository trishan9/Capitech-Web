import Image from "next/image";
import LetterSend from "@/assets/Letter-Send.svg";
import ContactForm from "./_components/ContactForm";
import BranchDetails from "./_components/BranchDetails";
import FAQ from "./_components/FAQ";
import HeroBanner from "@/components/HeroBanner/page";

const ContactUsPage = () => {
  return (
    <section className="bg-gray-50">
      <HeroBanner>
        <div className="bg-gradient-bg flex h-[17rem] flex-col items-center justify-center gap-4 pb-3 pt-16 text-white md:h-[32rem]">
          <div className="relative flex w-80 flex-col items-center justify-center gap-4 md:w-[34rem]">
            <h1 className="z-10 h-fit text-3xl font-bold md:text-7xl">
              Contact Us
            </h1>

            <p className="w-full text-center text-xs md:text-sm"></p>

            <Image
              src={LetterSend}
              alt="Letter Send"
              className="absolute -right-52 bottom-[-5.5rem] hidden lg:block"
            />
          </div>
        </div>
      </HeroBanner>

      <ContactForm />

      <BranchDetails />

      <FAQ />
    </section>
  );
};

export default ContactUsPage;
