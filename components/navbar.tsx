/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
    const [open, setOpen] = React.useState(false);
    const [flyer, setFlyer] = React.useState(false);
    const [flyerTwo, setFlyerTwo] = React.useState(false);
  
    return (
      <>
        {/* This example requires Tailwind CSS v2.0+ */}
        <div className="relative bg-[#006633]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <Image
                    className="h-8 w-auto sm:h-10"
                    src="/assets/icons/AgritechLogo.svg"
                    alt=""
                    width={32}
                    height={32}
                  />
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Open menu</span>
                  {/* Heroicon name: outline/menu */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              <nav className="hidden md:flex space-x-10">
                <a
                  href="#"
                  className="text-base font-medium text-white hover:text-gray-900"
                >
                  Accueil
                </a>

                <Link
                  href="/register"
                  className="text-base font-medium text-white hover:text-gray-900"
                >
                  S'inscrire
                </Link>
                <a
                  href="#"
                  className="text-base font-medium text-white hover:text-gray-900"
                >
                  En savoir plus
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-white hover:text-gray-900"
                >
                  Contact
                </a>

              </nav>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a
                  href="#"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
          {/*
      Mobile menu, show/hide based on mobile menu state.
  
      Entering: "duration-200 ease-out"
        From: ""
        To: ""
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    */}
  
          <div
            className={
              open
                ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-30"
                : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            }
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                    className="h-8 w-auto sm:h-10"
                    src="/assets/icons/Agritech_logo_2x.png"
                    alt=""
                    width={32}
                    height={32}
                  />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      onClick={() => setOpen(!open)}
                    >
                      <span className="sr-only">Close menu</span>
                      {/* Heroicon name: outline/x */}
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                  <a
                  href="#"
                  className="text-base font-medium text-[#006633] hover:text-gray-900"
                >
                  Accueil
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-[#006633] hover:text-gray-900"
                >
                  S'inscrire
                </a>
                <Link
                  href="/register"
                  className="text-base font-medium text-white hover:text-gray-900"
                >
                  S'inscrire
                </Link>
                <a
                  href="#"
                  className="text-base font-medium text-[#006633] hover:text-gray-900"
                >
                  Contact
                </a>
                  </nav>
                </div>
              </div>

            </div>
          </div>
        </div>
      </>
    );
  };
  
export default NavBar;
