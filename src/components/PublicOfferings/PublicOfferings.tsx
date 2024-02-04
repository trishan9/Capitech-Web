import PublicTable from "./_components/PublicTable";
import Image from "next/image";

const PublicOfferings = () => {
  return (
    <section className="bg-gray-50 md:px-5">
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-10 py-20 md:gap-20">
      <div className="flex flex-col items-end">
          <h1 className="text-center text-3xl font-bold md:text-5xl">
            Public Offerings
          </h1>
          <Image
            src="/lotties/underline.svg"
            width={180}
            height={20}
            alt="underline"
          />
        </div>
      </div>
      <div className="mx-auto flex w-full flex-col items-center justify-center pb-20">
        <PublicTable />
      </div>
    </section>
  );
};

export default PublicOfferings;
