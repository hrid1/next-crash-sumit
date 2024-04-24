import Link from "next/link";
import React from "react";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      desciption: "blog-1 description",
    },
    {
      id: 2,
      title: "Blog 2",
      desciption: "blog-2 description",
    },
    {
      id: 3,
      title: "Blog 3",
      desciption: "blog-3 description",
    },
  ];

  return (
    <div>
      <h1 className=" text-center text-xl m-4">This is our blog page.</h1>

      <ul className="m-4">
        {blogs.map((blog) => (
         <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}  >{blog.title}</Link>
         </li>
        ))}
      </ul>
    </div>
  );
}
