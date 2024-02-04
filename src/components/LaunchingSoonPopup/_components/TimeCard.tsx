const TimeCard = ({ label, unit }: { label: string; unit: string }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center gap-2 md:gap-3">
        <div className="flex items-center justify-center rounded-sm border border-white border-opacity-50 bg-light-gradient px-1.5 py-3 text-center font-digital text-3xl md:px-3 md:py-4 md:text-5xl">
          {unit[0] ?? 0}
        </div>
        <div className="flex items-center justify-center rounded-sm border border-white border-opacity-50 bg-light-gradient px-1.5 py-3 text-center font-digital text-3xl md:px-3 md:py-4 md:text-5xl">
          {unit[1] ?? 0}
        </div>
      </div>

      <p className="mt-3 text-lg font-semibold uppercase md:text-xl">{label}</p>
    </div>
  );
};

export default TimeCard;
