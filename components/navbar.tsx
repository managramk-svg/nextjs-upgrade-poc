import Link from "next/link";

export default function Navbar() {
  return (
    <ul className="flex gap-4">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
      <li>
        <Link href="/blog/post/hello-world">Blog Post</Link>
      </li>
    </ul>
  );
}
