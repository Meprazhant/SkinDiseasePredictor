"use client";

import React from "react";
import { SiSvelte } from "react-icons/si";
import Link from "next/link";
import { signOut } from "next-auth/react";

function Navbar({ session }) {
  const auth = session ? true : false;
  return (
    <nav className="border-gray-200 mb-10 p-6 px-8">
      <div className="w-full mx-auto">
        <div className="mx-2 flex flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <SiSvelte size={32} />
            <span className="self-center text-lg font-semibold whitespace-nowrap">
              SkinPred
            </span>
          </Link>
          <div className="flex md:hidden md:order-2">
            <button
              data-collapse-toggle="mobile-menu-3"
              type="button"
              className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
              aria-controls="mobile-menu-3"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className="hidden md:flex items-center justify-between  gap-5 w-full md:w-auto md:order-1"
            id="mobile-menu-3"
          >
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium items-center">
              <li>
                <a
                  href="#"
                  className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded"
                  aria-current="page"
                >
                  Explore
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                >
                  About
                </a>
              </li>
              <li>
                <Link
                  href="/model"
                  className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                >
                  Model
                </Link>
              </li>
            </ul>
            {/* not loggedin */}
            <div className="flex items-center gap-3 justify-center md:justify-start mt-4 md:mt-0">
              {!auth && (
                <Link
                  href="/start"
                  className="bg-blue-700 text-white rounded-full py-2 px-6 text-sm font-semibold hover:bg-transparent border hover:border-blue-700 hover:text-blue-700 transition duration-300 ease-in-out"
                >
                  Get Started
                </Link>
              )}
              {auth && (
                <Link
                  href="/predict"
                  className="bg-green-700 text-white rounded-lg py-2 px-6 text-sm font-semibold hover:bg-green-800 transition duration-300 ease-in-out"
                >
                  Prediction
                </Link>
              )}
              {auth && (
                <Link
                  href="/history"
                  className="bg-blue-700 text-white rounded-lg py-2 px-6 text-sm font-semibold hover:bg-blue-800 transition duration-300 ease-in-out"
                >
                  History
                </Link>
              )}
              {auth && (
                <button
                  onClick={() => signOut()}
                  href="#"
                  className="bg-red-700 text-white rounded-lg py-2 px-6 text-sm font-semibold hover:bg-red-800 transition duration-300 ease-in-out"
                >
                  LogOut
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
