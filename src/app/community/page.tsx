import HeroBanner from "@/components/HeroBanner/page";
import Image from "next/image";
import CommunityPreview from "./_components/CommunityPreview";

const Community = () => {
  return (
    <div>
      <HeroBanner>
        <div className="bg-gradient-bg  z-[-2] flex h-[17rem] flex-col items-center justify-center gap-4 pb-3 pt-16 text-white md:h-[32rem]">
          <div className="relative z-10 flex w-80 flex-col items-center justify-center gap-4 md:w-[34rem]">
            <h1 className="z-10 h-fit text-3xl font-bold md:text-7xl">
              Community
            </h1>

            <p className="w-full text-center text-xs md:text-sm"></p>

            <Image
              src={"/images/communityIcon.png"}
              alt="Group"
              width={1302}
              height={1032}
              className="absolute right-[-12rem] top-[-157px] z-[-3] hidden lg:block"
            />
          </div>
        </div>
      </HeroBanner>
      <CommunityPreview />
    </div>
  );
};

export default Community;
