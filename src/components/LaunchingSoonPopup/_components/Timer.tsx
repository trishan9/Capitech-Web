import useCountdown from "@/hooks/useCountdown";
import TimeCard from "./TimeCard";

const Timer = ({ launchDate }: { launchDate: string }) => {
  const { days, hours, minutes } = useCountdown(launchDate);

  return (
    <div className="mt-8 flex items-center justify-center gap-3 md:gap-6">
      <TimeCard label="days" unit={days} />

      <TimeCard label="hours" unit={hours} />

      <TimeCard label="minutes" unit={minutes} />
    </div>
  );
};

export default Timer;
