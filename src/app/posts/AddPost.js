"use client";
import React, { useState } from "react";

function AddPost({ onPostAdded }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://main--next-iti.netlify.app/next-app-1/api/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        }
      );

      if (response.ok) {
        const newPost = await response.json();
        onPostAdded(newPost.post);
        setTitle("");
        setBody("");
      } else {
        throw new Error("Failed to add post");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Add a New Post
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Enter post body"
          rows="4"
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <button
          type="submit"
          className="p-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
        >
          Add Post
        </button>
      </form>
    </div>
  );
}

export default AddPost;
