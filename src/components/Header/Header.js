import Link from "next/link";
import React from "react";

function Header() {
  return (
    <nav className="bg-gray-800 text-white border-b border-gray-700 shadow-sm  p-2 w-full">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <Link href="/" className="text-2xl font-bold">
          HAKAWI
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-md md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-2 mt-2 border border-gray-700 rounded-lg bg-gray-800 md:flex-row md:space-x-6 md:mt-0 md:border-0 md:bg-transparent">
            {[
              "Home",
              "Blog",
              "Posts",
              "about-us",
              "contact-us",
              "Follow us",
            ].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="block py-2 px-3 text-white rounded-md hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-300"
                  aria-current={item === "Home" ? "page" : undefined}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
