"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { IoDocumentLockOutline } from "react-icons/io5";
import { FaCircleNotch, FaDAndD, FaSave, FaTrash } from "react-icons/fa";
import Link from "next/link";

function PredictCard() {
  const { data, status } = useSession();
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [savingResult, setSavingResult] = useState(false);
  const [saved, setSaved] = useState(false);
  const imgbb = "6018bb19536be3c14ee250bedad234a6";

  const api = "http://localhost:8000/predict";

  async function startPrediction() {
    if (!file) return alert("Please upload an image for prediction");
    setLoading(true);
    const formdata = new FormData();
    formdata.append("file", file, file.name || "skin-disease-prediction.jpg");

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(api, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setResult(result);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }

  function saveResult() {
    setSavingResult(true);
    const formdata = new FormData();
    formdata.append("image", file);

    // upload to imgbb
    fetch(`https://api.imgbb.com/1/upload?key=${imgbb}`, {
      method: "POST",
      body: formdata,
    })
      .then((response) => response.json())
      .then((res) => {
        setSavingResult(false);
        if (res.success) {
          const image = res.data.url;
          const disease = result.class;
          const confidence = result.confidence;
          const time = new Date().toLocaleString();
          const user = data.user;
          const body = { image, disease, confidence, time, user };
          // save to localstorage
          const scans = JSON.parse(localStorage.getItem("scans")) || [];
          scans.push(body);
          localStorage.setItem("scans", JSON.stringify(scans));
          alert("Result saved successfully");
          setSaved(true);
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="w-full">
      {status === "authenticated" ? (
        <div className="flex justify-around w-full gap-8 flex-col-reverse sm:flex-row">
          {!result && (
            <div className="relative overflow-hidden flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 dark:bg-gray-50 dark:text-gray-800">
              <img
                src={data.user.image}
                alt=""
                className="w-20 rounded-full h-20"
                referrerPolicy="no-referrer"
              />
              <h2 className="text-2xl font-semibold leading-tight tracking-wide">
                Hello {data.user.name}
              </h2>
              <fieldset className="w-full space-y-1 dark:text-gray-800">
                <label
                  htmlFor="files"
                  className="block text-md mb-2 font-medium"
                >
                  Upload Image for Prediction
                </label>
                <div className="flex">
                  {!file && (
                    <input
                      onChange={(e) => setFile(e.target.files[0])}
                      accept="image/*"
                      type="file"
                      name="files"
                      id="files"
                      className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-300 dark:text-gray-600 dark:bg-gray-100"
                    />
                  )}
                  {!!file && (
                    <div className="flex flex-col items-center gap-4 w-full">
                      <img
                        src={URL.createObjectURL(file)}
                        alt=""
                        className="w-full rounded-md object-cover max-h-[120px] border dark:border-gray-300 dark:bg-gray-100"
                      />
                      <button
                        onClick={() => setFile(null)}
                        className="px-4 py-2 font-semibold rounded-full dark:bg-red-600 dark:text-gray-50"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  )}

                  {loading && (
                    <div className="absolute h-full bg-[#0000002a]  w-full backdrop-blur-md flex justify-center items-center flex-col top-0 left-0">
                      <div className="flex flex-col items-center gap-4">
                        <div className="w-20 h-20 rounded-full flex justify-center items-center bg-gray-300 animate-pulse">
                          <svg
                            fill="none"
                            className="w-14 h-14 animate-spin"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clipRule="evenodd"
                              d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
                              fill="currentColor"
                              fillRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-lg font-semibold">Predicting...</p>
                      </div>
                    </div>
                  )}
                </div>
              </fieldset>
              <button
                onClick={startPrediction}
                className="px-8 py-3 font-semibold rounded-full dark:bg-indigo-600 dark:text-gray-50"
              >
                Start Prediction
              </button>
            </div>
          )}
          {!!result && (
            <div className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 dark:bg-gray-50 dark:text-gray-800">
              <h2 className="text-3xl font-semibold tracking-wide">
                Prediction Result
              </h2>
              <img
                src={URL.createObjectURL(file)}
                alt=""
                className="w-full rounded-md h-72 object-cover object-center dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between space-y-8">
                <div className="space-y-2">
                  <p className="dark:text-gray-800">
                    <span className="font-semibold">
                      The disease that was detected is: :
                    </span>{" "}
                    {result?.class}
                  </p>
                  <p className="dark:text-gray-800">
                    <span className="font-semibold">
                      The confidence level is: :
                    </span>{" "}
                    {Math.round(result?.confidence * 100)}%
                  </p>
                </div>
                <div className="flex flex-row gap-4">
                  {!saved && (
                    <button
                      onClick={saveResult}
                      className="px-8 py-3 flex items-center gap-3 font-semibold rounded-full dark:bg-indigo-600 dark:text-gray-50"
                    >
                      {!savingResult ? (
                        <FaSave />
                      ) : (
                        <div className="animate-spin">
                          <FaCircleNotch />
                        </div>
                      )}
                      {savingResult ? "Saving..." : "Save Result"}
                    </button>
                  )}
                  {saved && (
                    <button className="px-8 py-3 flex items-center gap-3 font-semibold rounded-full border dark:border-green-600 dark:text-green-800">
                      <FaSave /> Saved
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setFile(null);
                      setResult(null);
                    }}
                    className="px-8 py-3 flex items-center gap-3 font-semibold rounded-full border dark:border-indigo-600 dark:text-indigo-800"
                  >
                    <FaDAndD /> Another?
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 dark:bg-gray-50 dark:text-gray-800">
            <IoDocumentLockOutline className="text-6xl text-indigo-600" />
            <h2 className="text-2xl font-semibold leading-tight tracking-wide">
              Not logged in ??
            </h2>
            <p className="flex-1 text-center dark:text-gray-600">
              In order to use this prediction tool, you need to be logged in.
            </p>
            <Link
              href="/start"
              className="px-8 py-3 font-semibold rounded-full dark:bg-indigo-600 dark:text-gray-50"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default PredictCard;
