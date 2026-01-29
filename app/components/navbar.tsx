import React from "react";

export default function Navbar() {
  return (
    <header className="fixed z-50 left-1/2 top-5 -translate-x-1/2 w-[90%] md:w-full">
      <nav className="place-items-center">
        <ul className="flex flex-row px-4 py-2 border border-gray-600 rounded-lg backdrop-blur-md font-semibold text-gray-300">
          <li className="cursor-pointer px-4 py-2 hover:text-sky-600 rounded-full">Home</li>
          <li className="cursor-pointer px-4 py-2 hover:text-sky-600 rounded-full">About</li>
          <li className="cursor-pointer px-4 py-2 hover:text-sky-600 rounded-full">Projects</li>
          <li className="cursor-pointer px-4 py-2 hover:text-sky-600 rounded-full">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
