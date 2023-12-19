"use client";

import Link from "next/link";

const links = [
  {
    title: "01. projects",
    href: "",
  },
  {
    title: "02. contact",
    href: "",
  },
  {
    title: "03. about",
    href: "",
  },
];

export function Navbar() {
  return (
    <nav className="nav w-full py-2.5 px-12 text-foreground transition duration-500 relative">
      <div className="w-full text-center">
        <Link href="" className="text-3xl font-medium capitalize no-underline">
          Lucid
        </Link>
      </div>

      <div className="flex flex-col gap-3 absolute top-24 right-[520px] text-start z-[1]">
        {links.map((link) => (
          <Link
            key={link.title}
            onClick={() => alert("hello")}
            href={link.href}
            className="w-20 uppercase text-xs tracking-wider cursor-pointer relative z-10"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
