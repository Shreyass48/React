import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/blog">Blog</Link>
      <Link href="/">Home</Link>
    </div>
  );
}
