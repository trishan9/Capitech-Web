type StepCardProps = {
  id: number;
  text: string;
};

const StepCard = ({ data, index }: { data: StepCardProps; index: number }) => {
  return (
    <div className="flex w-full items-start justify-start gap-3 rounded-3xl bg-white px-6 py-6 shadow-lg md:gap-7 md:px-12 md:py-11">
      <div className="bg-secondary/70 flex max-h-6 min-h-6 min-w-6 max-w-6 items-center justify-center rounded-full text-white md:max-h-12 md:min-h-12 md:min-w-12 md:max-w-12">
        <p className="text-xs font-medium md:text-xl">{index}</p>
      </div>

      <div className="flex flex-col items-start gap-2">
        <p className="text-xs text-text-black opacity-60 md:text-lg">
          {data.text}
        </p>
      </div>
    </div>
  );
};

export default StepCard;
