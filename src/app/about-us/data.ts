import { StaticImageData } from "next/image";
import introduction from "@/assets/Introduction.svg";
import mission from "@/assets/Mission.svg";
import values from "@/assets/Values.svg";

type TAboutUsDataObject = {
  title: string;
  position: "left" | "right";
  description: string;
  image: StaticImageData;
  list: {
    id: string;
    text: string;
  }[];
};

type TAboutUsData = TAboutUsDataObject[];

const ABOUT_US_DATA: TAboutUsData = [
  {
    title: "Introduction",
    position: "left",
    description:
      "MIDAS, a licensed stock broker in Nepal, operates under SEBON and is the 21st broker member of NEPSE.",
    image: introduction,
    list: [
      {
        id: "1",
        text: "Committed to stock market knowledge sharing, MIDAS links traders and companies, providing order execution and depository services on NEPSE.",
      },
      {
        id: "2",
        text: "MIDAS opens Remote Work Stations in Butwal and Gorkha, aiming to set an example in stock brokerage for efficient service.",
      },
      {
        id: "3",
        text: "MIDAS prioritizes high ethics, excellent customer service, and quick adoption of technology, making it the top choice for hassle-free trading.",
      },
    ],
  },
  {
    title: "Our Mission",
    position: "right",
    description:
      "Empowering investors with a gateway to opportunities, we aid in portfolio diversification, offering access to an extensive range of equities.",
    image: mission,
    list: [
      {
        id: "1",
        text: "To assist in providing a gateway for accessing investment opportunities.",
      },
      {
        id: "2",
        text: "To help traders to diversify the portfolio.",
      },
      {
        id: "3",
        text: "To help traders access extensive range of equities.",
      },
    ],
  },

  {
    title: "Our Values",
    position: "left",
    description:
      "Committed to excellence, we aspire to be Nepal's premier brokerage, exemplifying service and trading excellence.",
    image: values,
    list: [
      {
        id: "1",
        text: "Become a renowned brokerage firm in Nepal.",
      },
      {
        id: "2",
        text: "Set an example through excellent service.",
      },
      {
        id: "3",
        text: "Provide an amazing trading experience for clients.",
      },
    ],
  },
];

export default ABOUT_US_DATA;
