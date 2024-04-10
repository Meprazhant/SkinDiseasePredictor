"use client";
import React, { useState, useEffect } from "react";
import RecentCard from "../Cards/RecentCard";
import Link from "next/link";
function RecentScans() {
  const [historyData, setHistoryData] = useState([]);
  function getHistory() {
    let hisData = localStorage.getItem("scans");
    hisData = JSON.parse(hisData);
    if (hisData) {
      setHistoryData(hisData);
    }
  }

  useEffect(() => {
    getHistory();
  }, []);
  return (
    <div className="flex flex-col gap-2 p-5">
      <div className="flex justify-between px-3 items-center">
        <h1 className="text-xl font-bold">Recent Scans</h1>
        <Link href={"/"} className="text-sm text-gray-500">
          View all
        </Link>
      </div>
      <div className="relative flex items-center justify-center overflow-hidden w-[90vw] dark:text-gray-900">
        <div
          className="
            grid   lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 
          "
        >
          {historyData.map((item, index) => (
            <RecentCard
              key={index}
              image={item.image}
              disease={item.disease}
              confidence={item.confidence}
              time={item.time}
              user={item.user}
              getHistory={getHistory}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentScans;
