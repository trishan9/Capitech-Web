"use client";

import { useState } from "react";
import PreviewTab from "./PreviewTab";
import { cn } from "@/lib/utils";

const CommunityPreview = () => {
  const [socials, setSocials] = useState<"facebook" | "other">("facebook");

  return (
    <div className="my-7 px-4 py-8">
      <div className="item-center flex flex-col justify-center gap-6 sm:flex-row">
        <button
          className={cn(
            "flex items-center justify-center gap-2 rounded-md px-5 py-3 text-xs font-medium md:text-sm",
            socials === "facebook"
              ? "bg-primary text-white"
              : "border border-[#c3c3c3] bg-white text-text-black hover:border-primary",
          )}
          onClick={() => setSocials("facebook")}
        >
          Facebook Page View
        </button>

        <button
          className={cn(
            "flex items-center justify-center gap-2 rounded-md px-5 py-3 text-xs font-medium md:text-sm",
            socials === "other"
              ? "bg-primary text-white"
              : "border border-[#c3c3c3] bg-white text-text-black hover:border-primary",
          )}
          onClick={() => setSocials("other")}
        >
          Other View
        </button>
      </div>

      <PreviewTab socials={socials} />
    </div>
  );
};

export default CommunityPreview;
