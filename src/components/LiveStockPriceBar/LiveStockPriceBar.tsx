"use client";

import { useEffect, useState } from "react";

import Marquee from "react-fast-marquee";
import StockItem from "./StockItem";

export interface StockPriceInterface {
  id: number;
  symbol: string;
  ltp: number;
  change: number;
}

export default function LiveStockPriceBar() {
  const [data, setData] = useState<StockPriceInterface[]>([]);

  const handleWebSocketMessage = (message: string) => {
    try {
      const parsedMessage = JSON.parse(message);

      if (parsedMessage.type === "send_stock_update" && parsedMessage.value) {
        const updatedStock = parsedMessage.value;
        setData((prevData) =>
          prevData.map((item) =>
            item.id === updatedStock.id ? updatedStock : item,
          ),
        );
      }
    } catch (error) {
      console.error("Error parsing WebSocket message:", error);
    }
  };

  useEffect(() => {
    const socket = new WebSocket(
      "wss://capitechbroker.azurewebsites.net/ws/websocket/",
    );

    socket.onopen = (event) => {
      // console.log("WebSocket connected:", event);
    };

    socket.onmessage = (event) => {
      handleWebSocketMessage(event.data);
    };

    socket.onclose = (event) => {
      // console.log("WebSocket closed:", event);
    };

    return () => {
      socket.close();
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/getlivestockprice", {
          method: "GET",
        });
        const result = await res.json();

        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex h-[64px] w-full bg-[#464646] md:h-24">
      <div className="flex h-[65px] w-[174px] items-center justify-center bg-[#d37f35] md:h-full md:w-64">
        <p className="text-xs font-bold leading-7 text-white md:text-[22px]">
          As of{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
      <div className="flex h-full w-full items-center justify-start overflow-hidden">
        <ul className="flex">
          <Marquee
            className="flex px-0"
            gradient={false}
            speed={70}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            direction="left"
            loop={0}
          >
            {data.map((stock) => (
              <StockItem
                key={stock.id}
                id={stock.id}
                symbol={stock.symbol}
                ltp={stock.ltp}
                change={stock.change}
              />
            ))}
          </Marquee>
        </ul>
      </div>
    </div>
  );
}
