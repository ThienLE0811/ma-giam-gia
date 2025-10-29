// components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/", label: "Trang chủ" },
  { href: "/ma-giam-gia", label: "Mã giảm giá" },
  { href: "/tin-khuyen-mai", label: "Tin khuyến mãi" },
  { href: "/ho-tro", label: "Trung tâm hỗ trợ" },
  { href: "/tich-diem", label: "Tích điểm đổi quà" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const base =
    "text-[15px] font-medium transition-colors hover:text-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/20 rounded-sm px-1";
  const active = "text-black";
  const inactive = "text-black/80";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/80 border-b">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            {/* <svg
              viewBox="0 0 24 24"
              className="size-6 text-green-600"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20 8.5c1.1 0 2 .9 2 2v2.5c0 1.1-.9 2-2 2h-1.1a6.9 6.9 0 0 1-5.9 3.5H8.5a4.5 4.5 0 0 1-4.3-3.2L3 15.1a2 2 0 0 1-.1-.6V10c0-1.1.9-2 2-2h2.9c.7-1.8 2.4-3 4.3-3H14c1.8 0 3.4 1.1 4.1 2.7.6-.4 1.2-.7 1.9-.7zM8.5 12.2a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8zm6.9 0a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8z" />
            </svg> */}
            <span className="select-none text-xl font-bold leading-none">
              <span className="text-green-700">Ma</span>
              <span className="text-rose-500">giamgia</span>
              <span className="text-orange-500">247</span>
            </span>
          </Link>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-6"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Nav desktop */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {nav.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`${base} ${isActive ? active : inactive}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Nav mobile dropdown */}
        {open && (
          <nav className="md:hidden pb-3">
            <ul className="flex flex-col gap-1 pt-1">
              {nav.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block py-2 ${base} ${
                        isActive ? active : inactive
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
