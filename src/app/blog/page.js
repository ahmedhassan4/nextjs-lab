"use client";

import React, { useEffect, useState } from "react";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from JSONPlaceholder API
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Loading posts...</p>
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-red-500">Error: {error}</p>
      </div>
    );

  return (
    <div className="min-h-screen px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Our Latest Articles
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div
              key={post.id}
              className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white dark:bg-gray-900 dark:border-gray-700"
            >
              <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                {post.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">{post.body}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-lg">
            No posts available
          </p>
        )}
      </div>
    </div>
  );
}

export default Blog;
