"use client";
import React from "react";
import Link from "next/link";

function Landing() {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 w-full">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            An AI <span className="dark:text-indigo-600">based</span> Skin
            Disease Detection
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Discover AI Skin Disease Detection: A precise tool using advanced
            algorithms
            <br className="hidden md:inline lg:hidden" /> to identify skin
            conditions swiftly, aiding prompt treatment.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              href={"/predict"}
              rel="noopener noreferrer"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-indigo-600 dark:text-gray-50"
            >
              Start Prediction
            </Link>
            <Link
              rel="noopener noreferrer"
              href="/model"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://www.ipgmer.gov.in/images/home-icon/home-dermatology-icon.png"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
}

export default Landing;
