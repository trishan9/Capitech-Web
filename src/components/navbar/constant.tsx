import { BookUser, Component, Contact, Crown, Home, Link } from "lucide-react";
import { ReactNode } from "react";

interface NavbarDataInterface {
  id: number;
  title: string;
  link: string;
  icon?: ReactNode;
}

export const data: NavbarDataInterface[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    icon: <Home
      size={20} className="mr-1 inline"
    />,
  },

  {
    id: 2,
    title: "Contact Us",
    link: "/contact-us",
    icon: <Contact size={20} className="mr-1 inline" />,
  },

  {
    id: 3,
    title: "About Us",
    link: "/about-us",
    icon: <BookUser size={20} className="mr-1 inline" />,
  },

  {
    id: 4,
    title: "Services",
    link: "/services",
    icon: <Link size={20} className="mr-1 inline" />,
  },

  {
    id: 5,
    title: "Prices",
    link: "/prices",
    icon: <Crown size={20} className="mr-1 inline" />,
  },

  {
    id: 6,
    title: "Community",
    link: "/community",
    icon: <Component size={20} className="mr-1 inline" />,
  },
];
