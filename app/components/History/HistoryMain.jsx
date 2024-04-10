"use client";
import React, { useState, useEffect } from "react";
import HistoryCard from "./HistoryCard";
import { useSession } from "next-auth/react";

function HistoryMain() {
  const [historyData, setHistoryData] = useState([]);
  const { data, status } = useSession();

  function getHistory() {
    let hisData = localStorage.getItem("scans");
    hisData = JSON.parse(hisData);
    const user = data.user.email;
    hisData = hisData.filter((item) => item.user.email === user);
    console.log(hisData, user);
    if (hisData) {
      setHistoryData(hisData);
    }
  }

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <div className="flex flex-col gap-5 w-full p-5">
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold">History</h2>
        <p className="text-gray-600">
          Here are your past predictions and results. You can view, download and
          delete them.
        </p>
      </div>
      {historyData.length > 0 ? (
        <div className="grid  md:grid-cols-3 sm:grid-cols-1 gap-4">
          {historyData.map((item, index) => (
            <HistoryCard
              key={index}
              image={item.image}
              disease={item.disease}
              confidence={item.confidence}
              time={item.time}
              getHistory={getHistory}
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-80">
          <p className="text-gray-600">No history available</p>
        </div>
      )}
    </div>
  );
}

export default HistoryMain;
