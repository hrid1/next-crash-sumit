import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";
import React from "react";

export default async function page() {
  const posts = await getAllPosts();

  return (
    <div className="m-6">
      <h1>All post</h1>
      <ul className="mt-4">
        {posts.map((post) => (
          <li key={post.id}>
            {" "}
            <Link href={`/posts/${post.id}`}> {post.title} </Link>{" "}
          </li>
        ))}
      </ul>
      <h2>All Post </h2>
    </div>
  );
}
