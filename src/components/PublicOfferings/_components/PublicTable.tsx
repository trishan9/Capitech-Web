"use client";

import { use, useEffect, useState } from "react";

import React from "react";
import {
  Column,
  Table as ReactTable,
  PaginationState,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
  OnChangeFn,
  flexRender,
} from "@tanstack/react-table";

type PublicOfferingsProps = {
  id: string;
  company_name: string;
  issue_manager: string;
  issued_unit: string;
  number_of_applications: string;
  applied_unit: string;
  amount: string;
  open_date: string;
  close_date: string;
  last_update: string;
  issue_type: string;
};

const columns: ColumnDef<PublicOfferingsProps>[] = [
  {
    header: "Company Name",
    accessorKey: "company_name",
  },
  {
    header: "Units",
    accessorKey: "issued_unit",
  },
  {
    header: "Issue Manager",
    accessorKey: "issue_manager",
  },
  {
    header: "Amount",
    accessorKey: "amount",
  },
  {
    header: "Applications",
    accessorKey: "number_of_applications",
  },
  {
    header: "Open Date",
    accessorKey: "open_date",
  },
  {
    header: "Close Date",
    accessorKey: "close_date",
  },
  {
    header: "Last Update",
    accessorKey: "last_update",
  },
];

const tabNames = ["Current Issues", "IPO", "FPO", "Bond", "Debenture"];

const PublicTable: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [data, setData] = useState<PublicOfferingsProps[]>([]);
  const [filteredData, setFilteredData] = useState<PublicOfferingsProps[]>([]);
  const [fetchData, setFetchData] = useState<boolean>(true);

  const handleWebSocketMessage = (message: any) => {
    const parsedMessage = JSON.parse(message);

    if (parsedMessage.type === "send_currentIssue_update") {
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
      (async function () {
        const res = await fetch(`/api/getpublicofferings`, {
          method: "GET",
        });
        const responseData = await res.json();

        setData(responseData.data);
        setFetchData(false);
      })();
    }
  }, [fetchData]);

  useEffect(() => {
    setFilteredData([]);
    const filteredData =
      selectedTab === 0
        ? data
        : data.filter((item) => item.issue_type === tabNames[selectedTab]);
    setFilteredData(filteredData);
  }, [data, selectedTab]);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  return (
    <>
      <div className="mx-4 mb-4 flex h-[60px] min-w-full max-w-full items-center justify-center overflow-x-auto bg-neutral-100 pl-32 text-xs sm:pl-0 md:text-base">
        {tabNames.map((name, index) => (
          <div
            key={index}
            className={`flex h-full cursor-pointer items-center border px-7 marker:justify-center ${selectedTab === index ? "rounded-md border-primary bg-gray-50" : " bg-neutral-100"}`}
            onClick={() => setSelectedTab(index)}
          >
            <p className="font-medium">{name}</p>
          </div>
        ))}
      </div>

      <div className="mt-2 w-full overflow-x-auto bg-gray-50 px-2 pb-4 text-xs md:text-base">
        <table className="mx-auto min-w-[700px] md:min-w-[90vw]">
          <thead className="text-left">
            {table.getHeaderGroups().map((headerGroup: any) => (
              <tr key={headerGroup.id} className="">
                {headerGroup.headers.map((header: any) => (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className=" bg-primary px-4 py-2 text-white"
                  >
                    {header.isPlaceholder ? null : (
                      <div className=" p-[3px_2px]">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className="[&>*:nth-child(even)]:bg-slate-200">
            {table.getRowModel().rows.map((row: any) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell: any) => (
                  <td key={cell.id} className="py-2 pl-4 pr-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4 flex justify-center">
          {Array.from({ length: table.getPageCount() }, (_, i) => (
            <button
              key={i}
              className={`mx-1 rounded border p-1 px-3 ${table.getState().pagination.pageIndex === i ? "border-primary text-primary" : ""}`}
              onClick={() => table.setPageIndex(i)}
              disabled={table.getState().pagination.pageIndex === i}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default PublicTable;
