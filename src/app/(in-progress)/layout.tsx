import { ReactNode } from "react";
import LaunchingSoonPopup from "@/components/LaunchingSoonPopup";

const InProgressLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="absolute h-full w-full bg-gray-50 p-6">
      <LaunchingSoonPopup launchDate="Feb 26 2024 20:00 GMT+0545 (Nepal Time)" />

      {children}
    </section>
  );
};

export default InProgressLayout;
