import FacebookPagePreview from "../ui/facebook-page-preview";
import Image from "next/image";

const Facebook = async () => {
  return (
    <section className="bg-gray-50 px-5">
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 py-20 xl:w-[1180px]">
        <div className="flex flex-col items-end">
          <h1 className="text-center text-3xl font-bold md:text-5xl">
            Facebook Community
          </h1>
          <Image
            src="/lotties/underline.svg"
            width={180}
            height={20}
            alt="underline"
          />
        </div>

        <div className=" m-[8px_auto] my-2 w-fit rounded-3xl border-[3px] border-secondary shadow-md">
          <div className="flex items-center justify-center">
            <FacebookPagePreview pageNameOrId="midasstockbroking" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facebook;
