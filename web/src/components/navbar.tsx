"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/[0.08] bg-[#05090C]/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 xl:px-[52px]">
        <div className="flex h-[76px] items-center justify-between">
          <Link href="/" className="text-[23px] font-semibold tracking-[-0.035em] text-white">
            Linked<span className="text-[#C7F36B]">Out</span>
          </Link>

          <nav className="hidden items-center gap-9 text-[13px] text-white/80 md:flex">
            <Link href="/companies" className="transition-colors hover:text-white">
              Explore
            </Link>
            <Link href="/companies" className="transition-colors hover:text-white">
              Companies
            </Link>
            <Link href="/reviews/write" className="transition-colors hover:text-white">
              Stories
            </Link>
            <Link href="/#about" className="transition-colors hover:text-white">
              About
            </Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/#search"
              aria-label="Search"
              className="flex h-9 w-9 items-center justify-center rounded-full text-white/75 transition-colors hover:bg-white/5 hover:text-white"
            >
              <Search className="h-[18px] w-[18px]" />
            </Link>
            <Link
              href="/login"
              className="hidden h-8 items-center rounded-full border border-white/15 px-4 text-[12px] text-white/90 transition-colors hover:border-white/35 hover:text-white sm:inline-flex"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="inline-flex h-8 items-center rounded-full bg-[#C7F36B] px-4 text-[12px] font-medium text-[#0B0D0C] transition-colors hover:bg-[#d4ff7a]"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
