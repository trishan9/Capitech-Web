import { type StockPriceInterface } from "./LiveStockPriceBar";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function StockItem({
  id,
  symbol,
  ltp,
  change,
}: StockPriceInterface) {
  return (
    <li
      className={`mr-4 flex gap-[5px] text-sm font-medium leading-7 text-white md:text-[22px]`}
    >
      {change > 0 ? <ArrowUp color="#1ee650" /> : <ArrowDown color="#ff5555" />}
      <span>{symbol}</span>
      <span>{ltp}</span>(
      {change > 0 ? (
        <span className="text-green-500"> {change} </span>
      ) : (
        <span className="stroke-slate-100 text-[#ff5555]"> {change} </span>
      )}
      )
    </li>
  );
}
