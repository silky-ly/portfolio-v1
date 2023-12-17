"use client";

import Link from "next/link";

const links = [
  {
    title: "projects",
    href: "",
  },
  {
    title: "contact",
    href: "",
  },
  {
    title: "about",
    href: "",
  },
];

export function Navbar() {
  return (
    <nav className="nav w-full py-2.5 px-12 flex justify-between items-center transition duration-500 border-b border-solid relative">
      <div className="nav-logo w-2/5">
        <Link
          href=""
          className="text-black text-3xl font-medium capitalize no-underline"
        >
          Lucid
        </Link>
      </div>

      <div className="navlinks flex flex-col gap-3 absolute top-24 right-[520px] text-end">
        {links.map((link) => (
          <Link
            key={link.title}
            onClick={() => alert("hello")}
            href={link.href}
            className="navlink w-20 text-black uppercase text-xs tracking-wider cursor-pointer relative z-10"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
