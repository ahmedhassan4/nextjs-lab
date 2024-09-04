"use client";
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white rounded-lg shadow p-4 m-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <hr className="my-4 border-gray-600" />
        <span className="block text-sm">
          © 2024{" "}
          <a href="#" className="hover:underline font-semibold">
            HAkAWI
          </a>
          . All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
