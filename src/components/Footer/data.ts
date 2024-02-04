import { Mail, MapPin, Phone } from "lucide-react";

export type TLinkObject = {
  label: string;
  href?: string;
  icon?: any;
};

export type LinksProps = {
  links: TLinkObject[];
  title: string;
  subTitle?: string;
  className?: string;
};

type FooterLinks = {
  [key in "COMPANY" | "USEFUL_LINKS" | "CONTACTS"]: TLinkObject[];
};

const FOOTER_LINKS: FooterLinks = {
  COMPANY: [
    {
      label: "About Us",
      href: "/about-us",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Community",
      href: "/community",
    },
    {
      label: "Contact Us",
      href: "/contact-us",
    },
  ],
  USEFUL_LINKS: [
    {
      label: "TMS Login",
      href: "https://tms21.nepsetms.com.np/login",
    },
    {
      label: "CDSC Mero Share Login",
      href: "https://meroshare.cdsc.com.np/#/login",
    },
    {
      label: "Share Sansar",
      href: "https://www.sharesansar.com/",
    },
  ],
  CONTACTS: [
    {
      label: "inquiry@midasstock.com.np",
      icon: Mail,
    },
    {
      label: "01-5970056",
      icon: Phone,
    },
    {
      label: "Kamaladi Mode, Kathmandu Nepal",
      icon: MapPin,
    },
  ],
};

export default FOOTER_LINKS;
