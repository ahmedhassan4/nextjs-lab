"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import AddPost from "./AddPost";

function Posts() {
  const [posts, setPosts] = useState([]);

  // Fetch posts from the API
  const fetchPosts = async () => {
    try {
      const response = await fetch(
        `https://main--next-iti.netlify.app/next-app-1/api/posts`
      );
      const postsData = await response.json();
      setPosts(postsData.reverse());
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Handle adding a new post
  const handlePostAdded = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <div className="px-4 py-8 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-6">Blog Posts</h1>
      <AddPost onPostAdded={handlePostAdded} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full max-w-5xl">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="relative block bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <h5 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                {post.title}
              </h5>
              <p className="text-gray-700 dark:text-gray-300 truncate">
                {post.body}
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-20"></div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Posts;
