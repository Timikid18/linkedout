import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-[1600px] px-6">
        <div className="mt-6 flex h-12 items-center justify-between border-b border-white/10 pb-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center border border-[#C7F36B]">
              <span className="text-[10px] font-bold text-[#C7F36B]">LO</span>
            </div>
            <span className="text-sm font-semibold tracking-[0.25em] text-white">LINKEDOUT</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/companies" className="hidden text-xs uppercase tracking-[0.3em] transition-colors hover:text-[#C7F36B] sm:inline-block text-[#A8ADA7]">
              Browse Files
            </Link>
            <Link href="/reviews/write" className="text-xs uppercase tracking-[0.3em] transition-colors hover:text-[#C7F36B] text-[#A8ADA7]">
              File Report
            </Link>
            <div className="h-3 w-px bg-white/10" />
            <Link href="/login" className="text-xs uppercase tracking-[0.3em] transition-colors hover:text-[#C7F36B] text-[#A8ADA7]">
              Sign In
            </Link>
            <Link href="/register">
              <Button size="sm" className="h-8 px-5 bg-[#C7F36B] text-[#0B0D0C] hover:bg-[#d4ff7a] text-xs uppercase tracking-[0.25em] rounded-none">Access</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
