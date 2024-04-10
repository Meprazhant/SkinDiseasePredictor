import React from "react";
import { jsPDF } from "jspdf";

function HistoryCard({ image, disease, confidence, time, getHistory }) {
  function deleteHistory() {
    let hisData = localStorage.getItem("scans");
    hisData = JSON.parse(hisData);
    hisData = hisData.filter((item) => item.time !== time);
    localStorage.setItem("scans", JSON.stringify(hisData));
    getHistory();
  }

  function getResult() {
    const doc = new jsPDF();
    doc.text("Skin Disease Prediction Result", 10, 10);
    doc.text(`Predicted Disease: ${disease}`, 10, 30);
    doc.text(`Confidence Level: ${confidence}`, 10, 40);
    doc.text(`Scanned On: ${time}`, 10, 50);
    doc.addImage(image, "JPEG", 10, 60, 180, 180);
    doc.save("result.pdf");
  }

  return (
    <div className="max-w-xs rounded-md min-w-[400px] shadow-md dark:bg-gray-50 dark:text-gray-800">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">
            Predicetd {disease}
          </h2>
          <p className="dark:text-gray-800">
            Confidence level: {Math.round(confidence * 100)}%
          </p>
          <p className="dark:text-gray-800">Scanned On: {time}</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={deleteHistory}
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-red-600 dark:text-gray-50"
          >
            Delete
          </button>
          <button
            onClick={getResult}
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-blue-600 dark:text-gray-50"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default HistoryCard;
