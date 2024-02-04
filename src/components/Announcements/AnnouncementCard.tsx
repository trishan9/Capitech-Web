"use client";

import { useEffect, useState } from "react";

type AnnouncementCardProps = {
  id: string;
  title: string;
  date: string;
  announcement_detail: string;
  link: string;
  symbol: string;
  fiscal_year: string;
  tags: string;
  agenda: string;
  bookclose_date: string;
  percent_cash_dividend: string;
  percent_bonus_share: string;
  right_share_ratio: string;
  venue: string;
  time: string;
};

const AnnouncementCard = () => {
  const [data, setData] = useState<AnnouncementCardProps[]>();
  const [fetchData, setFetchData] = useState<boolean>(true);

  const handleWebSocketMessage = (message: any) => {
    const parsedMessage = JSON.parse(message);

    if (parsedMessage.type === "send_announcement_update") {
      // Set fetchData to true when announcement update is received
      setFetchData(true);
    }
  };

  useEffect(() => {
    // WebSocket connection
    const socket = new WebSocket(
      "wss://capitechbroker.azurewebsites.net/ws/websocket/",
    );

    socket.onopen = (event) => {
      // console.log("WebSocket connected:", event);
    };

    socket.onmessage = (event) => {
      // Handle WebSocket messages
      handleWebSocketMessage(event.data);
    };

    socket.onclose = (event) => {
      // console.log("WebSocket closed:", event);
    };

    // Cleanup WebSocket on component unmount
    return () => {
      socket.close();
    };
  }, []);

  useEffect(() => {
    if (fetchData) {
      (async () => {
        const res = await fetch(`/api/getannouncement`, {
          method: "GET",
        });
        const responseData = await res.json();
        setData(responseData.data);
        setFetchData(false);
      })();
    }
  }, [fetchData]);

  if (data) {
    return (
      <>
        {data.map((item: AnnouncementCardProps, ind: number) => (
          <div
            key={item.id}
            className="flex w-full items-start justify-start gap-3 rounded-3xl bg-white px-6 py-6 shadow-lg md:gap-7 md:px-12 md:py-11"
          >
            <div className="bg-secondary flex max-h-6 min-h-6 min-w-6 max-w-6 items-center justify-center rounded-full text-white md:max-h-12 md:min-h-12 md:min-w-12 md:max-w-12">
              <p className="text-xs font-medium md:text-xl">{ind + 1}</p>
            </div>

            <div className="flex flex-col items-start gap-2">
              <p className="text-sm font-medium md:text-xl">{item.title}</p>

              <p className="text-xs text-[#797979] md:text-base">{item.date}</p>
              <p className="text-xs text-[#797979] md:text-base">
                {item.symbol}
              </p>
            </div>
          </div>
        ))}
      </>
    );
  }

  return null; // Render nothing if data is not available yet
};

export default AnnouncementCard;
