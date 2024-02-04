import { StaticImageData } from "next/image";
import MidasAccount from "@/assets/MIDAS-Account.svg";
import CustomerSupport from "@/assets/Customer-Support.svg";
import DepositoryServices from "@/assets/Depository-Services.svg";
import DematAccountServices from "@/assets/Demat-Account.svg";
import HolisticDepository from "@/assets/Holistic-Depository.svg";

type TServiceDataObject = {
  title: string;
  position: "left" | "right";
  description: string;
  image: StaticImageData;
};

type TServiceData = TServiceDataObject[];

const SERVICES_DATA: TServiceData = [
  {
    title: "MIDAS Account",
    position: "left",
    description:
      "Here at MIDAS, we always look to find new and innovative ways to facilitate our respected customers. With that motive, we have provided a semi-online MIDAS account to all our customers., who can enjoy an array of services while enjoying the comfort of their home. Through the Semi-Online MIDAS Account, the customers will be able to:\n 1. View bills and receipts of their sales and purchases\n 2. View the Client’s account statement\n 3. View capital gain tax report\n 4. Place semi-online orders while enjoying the comfort of their home.",
    image: MidasAccount,
  },

  {
    title: "Customer Support",
    position: "right",
    description:
      "We have an excellent customer support team who can assist traders on matter related to the stock brokerage. You can call us or visit us to ask regarding any stock trading matter and we are here to help you.",
    image: CustomerSupport,
  },

  {
    title: "Depository Services",
    position: "left",
    description:
      "We have partnered with Nepal DP Limited and CDS and Clearing Limited to provide our customers with a wide range of Depositary Services.",
    image: DepositoryServices,
  },

  {
    title: "DEMAT Account Services",
    position: "right",
    description:
      "A DEMAT Account is an account that allows investors to hold their shares in an electronic form. As holding shares in physical forms involves a lot of paperwork, a long process, and risk of fake shares, for simple and seamless trading and investing, a DEMAT account is a must to trade in Nepal’s Stock Exchange.\nHere at MIDAS, we help the traders open their DEMAT accounts as a beneficial owner (BO) enabling them to conduct transactions more systematically and efficiently.",
    image: DematAccountServices,
  },

  {
    title: "Provide Holistic Depository Services",
    position: "left",
    description:
      "Apart from the DEMAT account services, we offer various depository services to our valued clients through Nepal DP:\n 1. De-materialization of physical securities held by the beneficial owner (BO),\n 2. Re-materialization of securities\n 3. Online access to DEMAT account through Mero Share.\n 4. Facilitate in pledging and unpledging of securities\n 5. Facilitate online application of IPO\n 6. Settlement trades by transferring/receiving the securities from/in BO accounts,\n 7. Settlement of off-market trades that is occurred between BOs outside NEPSE\n 8. Others DP related jobs as allowed by laws and regulations in regard to securities depository.",
    image: HolisticDepository,
  },
];

const STEPS_DATA = [
  {
    id: 1,
    text: 'Sign an agreement paper with us. Follow the link below and find the "NEPSE Online Agreement Form" in the Downloads section.',
  },
  {
    id: 2,
    text: "After signing the contract, we will send your client code and BOID details to NEPSE for further processing. of an auditor (M/s P.L.R.G. Associates",
  },
  {
    id: 3,
    text: "NEPSE will collect all your necessary information from us and integrate it in their system. After integration, a client URL will be generated and NEPSE will inform us about it. of an auditor (M/s P.L.R.G. Associates",
  },

  {
    id: 4,
    text: "We will provide you with the URL, username, and password that you can use to login in the Online Trading System. Once you login yourself, you can begin to place your buy or sell orders and execute it yourself. No phone calls, all on your own.",
  },
];

const data = { SERVICES_DATA, STEPS_DATA };

export default data;
