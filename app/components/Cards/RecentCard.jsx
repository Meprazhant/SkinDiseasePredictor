import React from "react";

function RecentCard({ image, disease, confidence, time, user, getHistory }) {
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
            Predicted {disease}
          </h2>
          <div className="flex ">
            <div className="flex px-4 py-2 rounded-full bg-gray-300 items-center">
              <img
                src={user.image}
                alt=""
                className="w-2100 h-10 object-cover object-center rounded-full bg-slate-400"
              />
              <p className="text-sm font-semibold ml-2">{user.name}</p>
            </div>
          </div>
          <p className="dark:text-gray-800">
            Confidence level: {Math.round(confidence * 100)}%
          </p>
          <p className="dark:text-gray-800">Scanned On: {time}</p>
        </div>
      </div>
    </div>
  );
}

export default RecentCard;
