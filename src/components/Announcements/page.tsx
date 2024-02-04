import AnnouncementCard from "./AnnouncementCard";
import Image from "next/image";
const Announcements = async () => {
  return (
    <section className="bg-gray-50 px-5">
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 py-20 xl:w-[1180px]">
      <div className="flex flex-col items-end">
          <h1 className="text-center text-3xl font-bold md:text-5xl">
            Announcements
          </h1>
          <Image
            src="/lotties/underline.svg"
            width={180}
            height={20}
            alt="underline"
          />
        </div>
        <div className="flex max-h-[500px] w-full flex-col items-stretch justify-start gap-5 overflow-y-auto px-8 py-6 md:w-[750px]">
          <AnnouncementCard />
        </div>
      </div>
    </section>
  );
};

export default Announcements;
