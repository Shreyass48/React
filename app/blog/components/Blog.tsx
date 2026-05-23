"use client";

import { use } from "react";

// you can fetch data using
// 1. use hook
// 2. react query/ SWR
// 3. streaming with suspense(useHOOK)

function Blog({ promise }: any) {
  const posts: any[] = use(promise);
  console.log(posts);
  return (
    <div>
      {posts?.map((post: any) => (
        <div className="mb-4 border-2 p-4" key={post.id}>
          <p className="text-blue-500">{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
