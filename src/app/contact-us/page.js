"use client";

import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate form submission
    setStatus("Submitting...");
    try {
      // Replace with actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("Your message has been sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send your message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen px-4 py-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="w-full max-w-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:border-blue-500 dark:bg-gray-900 dark:text-white"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:border-blue-500 dark:bg-gray-900 dark:text-white"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:border-blue-500 dark:bg-gray-900 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Send Message
          </button>
          {status && (
            <div
              className={`mt-4 text-center ${
                status.includes("Failed") ? "text-red-500" : "text-green-500"
              }`}
            >
              {status}
            </div>
          )}
        </form>
      </div>
      <div className="mt-8 w-full max-w-md text-center">
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <p className="text-gray-700 dark:text-gray-300">
          1234 Street Name, City, Country
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Email: contact@example.com
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Phone: +1 (123) 456-7890
        </p>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a
              href="https://facebook.com"
              className="text-blue-600 dark:text-blue-400"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              className="text-blue-400 dark:text-blue-300"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              className="text-pink-600 dark:text-pink-400"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
