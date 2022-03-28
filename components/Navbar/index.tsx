import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "./testLogo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { t } = useTranslation("navbar");
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/">
                <a className="flex items-center my-4 mx-2 h-16 w-16 ">
                  <Image src={logo} alt="UA Future logo" layout="intrinsic" />
                </a>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/">
                <a className="py-4 px-2 text-green-500 font-semibold ">
                  {t("home")}
                </a>
              </Link>

              <a
                href=""
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                {t("form")}
              </a>
              <a
                href=""
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                {t("fundraisers")}
              </a>
              <Link href="/about">
                <a className="py-4 px-2 text-green-500 font-semibold ">
                  {t("about")}
                </a>
              </Link>
              <a
                href=""
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                {t("news")}
              </a>
              <a
                href=""
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                {t("contact")}
              </a>
            </div>
            <div
              className={`${!showMenu ? "hidden" : ""} md:hidden mobile-menu`}
            >
              <ul className="">
                <li className="active">
                  <a
                    href="index.html"
                    className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="outline-none mobile-menu-button"
                onClick={() => setShowMenu(!showMenu)}
              >
                <svg
                  className="w-6 h-6 text-gray-500"
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
