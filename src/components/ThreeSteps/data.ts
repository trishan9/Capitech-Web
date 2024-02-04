import UserIcon from "@/assets/icons/User.svg";
import VerifyIcon from "@/assets/icons/Verify.svg";
import StartTradingIcon from "@/assets/icons/Start-Trading.svg";

const STEPS_OF_TRADING = [
  {
    id: 1,
    stepName: "Open Account",
    icon: UserIcon,
    details:
      'Go to the "Open Account" section, and Submit your KYC form with required documentations to open a trading account with MIDAS.',
  },
  {
    id: 2,
    stepName: "Verification",
    icon: VerifyIcon,
    details:
      "Visit the nearest MIDAS branch, and Upon request for verification of the documentation, your application will be successfully verified in our systems.",
  },
  {
    id: 3,
    stepName: "Start Trading",
    icon: StartTradingIcon,
    details:
      "You are ready to start trading! You can place buy and sell order via phone call or by accessing our trading floor.",
  },
];

export default STEPS_OF_TRADING;
