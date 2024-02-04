import { useEffect, useState } from "react";

// const LAUNCH_DATE_FORMAT = "Jan 31 2024 20:00 GMT+0545 (Nepal Time)";

const useCountdown = (targetDate: string) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  // calculate time left
  let days: string | number = Math.floor(countDown / (1000 * 60 * 60 * 24));
  let hours: string | number = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  let minutes: string | number = Math.floor(
    (countDown % (1000 * 60 * 60)) / (1000 * 60),
  );

  days = days < 10 ? `0${days}` : `${days}`;
  hours = hours < 10 ? `0${hours}` : `${hours}`;
  minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return { days, hours, minutes };
};

export default useCountdown;
