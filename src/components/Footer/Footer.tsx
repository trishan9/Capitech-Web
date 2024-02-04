import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import FacebookIcon from "@/assets/socials/Facebook.svg";
import Linkedinicon from "@/assets/socials/Linkedin.svg";
import TwitterIcon from "@/assets/socials/Twitter.svg";
import FOOTER_LINKS from "./data";
import LinkGroup from "@/components/ui/linkGroup";

const Footer = () => {
  return (
    <footer className="h-fit bg-transparent">
      <section className="xl:footer bg-footer flex h-fit w-full flex-col items-start gap-9 px-10 py-8 text-base leading-6 text-white xl:px-28 xl:py-24">
        <div className="grid w-full grid-cols-1 items-center justify-center gap-4 gap-y-8 xl:grid-cols-5">
          <div className="mx-auto flex w-72 flex-col items-center justify-center gap-6 xl:col-span-2 xl:mx-0 xl:w-60 xl:items-start">
            <Image
              src={"/images/Logo.png"}
              alt="Logo"
              width="176"
              height="56"
              className="w-44"
            />

            <p className="w-72 font-roboto text-gray-300 xl:w-60">
              MIDAS: NEPSE&apos;s 21st broker, fostering stock market knowledge
              and efficient trading with a commitment to ethics and excellent
              service.
            </p>
          </div>

          <div className="grid grid-cols-2 items-start gap-y-8 md:col-span-3 md:grid-cols-3 xl:ml-10">
            <LinkGroup title="Company" links={FOOTER_LINKS.COMPANY} />

            <LinkGroup title="Useful Links" links={FOOTER_LINKS.USEFUL_LINKS} />

            <LinkGroup
              title="Contacts"
              subTitle="Head Office"
              links={FOOTER_LINKS.CONTACTS}
            />
          </div>
        </div>

        <Separator className="bg-secondary" />

        <div className="hidden w-full items-center justify-between xl:flex">
          <p>Copyright MIDAS STOCK BROKING COMPANY</p>

          <div className="flex items-center gap-4 text-center font-roboto font-semibold">
            <Link
              href="https://www.facebook.com/midasstockbroking"
              className="bg-secondary flex h-10 w-10 items-center justify-center rounded-full"
            >
              <Image src={FacebookIcon} alt="Facebook" />
            </Link>

            <Link
              href="https://www.linkedin.com/company/midas-stock-broking-company"
              className="bg-secondary flex h-10 w-10 items-center justify-center rounded-full"
            >
              <Image src={Linkedinicon} alt="Linkedin" />
            </Link>

            {/* <Link
              href="/"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-text-blue"
            >
              <Image src={TwitterIcon} alt="Twitter" />
            </Link> */}
          </div>

          <div className="flex items-center gap-9">
            <Link href="/">Privacy Policy</Link>

            <Link href="/">Terms & Condition</Link>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-y-6 xl:hidden">
          <div className="flex items-center gap-4 text-center font-roboto font-semibold">
            <Link
              href="https://www.facebook.com/midasstockbroking"
              className="bg-secondary flex h-10 w-10 items-center justify-center rounded-full"
            >
              <Image src={FacebookIcon} alt="Facebook" />
            </Link>

            <Link
              href="https://www.linkedin.com/company/midas-stock-broking-company"
              className="bg-secondary flex h-10 w-10 items-center justify-center rounded-full"
            >
              <Image src={Linkedinicon} alt="Linkedin" />
            </Link>

            {/* <Link
              href="/"
              className="bg-secondary flex h-10 w-10 items-center justify-center rounded-full"
            >
              <Image src={TwitterIcon} alt="Twitter" />
            </Link> */}
          </div>

          <div className="flex items-center gap-9 text-center">
            <Link href="/">Privacy Policy</Link>

            <Link href="/">Terms & Condition</Link>
          </div>

          <p className="text-center">Copyright MIDAS STOCK BROKING COMPANY</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
