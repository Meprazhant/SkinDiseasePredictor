"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function page() {
  const { status, data } = useSession();
  const router = useRouter();
  if (status === "authenticated") {
    router.push("/history");
  }

  return (
    <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
      <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
        <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
          <span className="block mb-2 dark:text-indigo-600">Get Started</span>
          <h1 className="text-5xl font-extrabold dark:text-gray-900">
            Login to start
          </h1>
          <p className="my-8">
            <span className="font-medium dark:text-gray-900">A fast login</span>
            with Google to start using the app.
          </p>
          <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
            <div className="my-6 space-y-4">
              <button
                aria-label="Login with Google"
                onClick={() => signIn("google")}
                type="button"
                className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-indigo-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                <p>Login with Google</p>
              </button>
            </div>
            <div className="flex items-center w-full my-4">
              <hr className="w-full dark:text-gray-600" />
              <p className="px-3 dark:text-gray-600"></p>
              <hr className="w-full dark:text-gray-600" />
            </div>
            A fast and secured password less login with Google .
          </div>
        </div>
        <img
          src="https://cdn.dribbble.com/users/3956213/screenshots/9105142/artboard_1.png"
          alt=""
          className="object-cover w-full rounded-md xl:col-span-3 "
        />
      </div>
    </section>
  );
}

export default page;
