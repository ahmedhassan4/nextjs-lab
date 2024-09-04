import React from "react";
import {
  FaUser,
  FaLaptopCode,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-8 text-center max-w-2xl">
        Welcome to our website! We are a team of dedicated professionals
        committed to delivering high-quality solutions. Our expertise spans
        various domains, including software development, project management, and
        customer support. We strive to exceed our clients expectations with
        innovative and effective solutions.
      </p>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-2">
          <FaUser className="text-2xl" />
          <span className="text-lg">Our Team</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaLaptopCode className="text-2xl" />
          <span className="text-lg">Our Expertise</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaProjectDiagram className="text-2xl" />
          <span className="text-lg">Our Projects</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-2xl" />
          <span className="text-lg">Contact Us</span>
        </div>
      </div>
      <div className="mt-8 flex space-x-4">
        <a
          href="#contact"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Get in Touch
        </a>
        <a
          href="#projects"
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          View Projects
        </a>
      </div>
    </div>
  );
}

export default About;
