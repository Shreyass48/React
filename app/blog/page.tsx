import { Suspense } from "react";
import Blog from "./components/Blog";

// client side data fetching
export default async function BlogPage() {
  const promise = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json(),
  );

  const posts = await promise;
  return (
    <div>
      <p>Blog page</p>
      <Suspense fallback={<div>Loading...</div>}>
        <Blog promise={promise} />
      </Suspense>
    </div>
  );
}

// server side data fetching
// export default async function BlogPage() {
//   const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache: "no-store", // Disable caching to always fetch fresh data
//   });
//   const posts = await data.json();
//   return (
//     <div>
//       <p>Blog page</p>
//       {posts.map((post: any) => (
//         <div className="mb-4 border-2 p-4">
//           <Link className="text-blue-500" href={`/blog/${post.id}`}>
//             {post.title}
//           </Link>
//           <p>{post.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
