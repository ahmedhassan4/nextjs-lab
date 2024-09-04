import React from "react";
import {
  FaHome,
  FaBlog,
  FaFileAlt,
  FaEnvelope,
  FaUserPlus,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="flex justify-center items-center h-screen rounded-2xl">
      <aside
        className="fixed top-[15%] left-0 z-40 w-16 h-[70%] bg-gray-900 dark:bg-gray-900 border-r border-gray-700 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-2 py-4">
          <ul className="space-y-4 flex flex-col items-center">
            <li>
              <a
                href="#"
                className="flex items-center justify-center p-2 text-gray-300 rounded-lg dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-700"
              >
                <FaHome className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center p-2 text-gray-300 rounded-lg dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-700"
              >
                <FaBlog className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center p-2 text-gray-300 rounded-lg dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-700"
              >
                <FaFileAlt className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center p-2 text-gray-300 rounded-lg dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-700"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center p-2 text-gray-300 rounded-lg dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-700"
              >
                <FaUserPlus className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
