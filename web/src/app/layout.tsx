import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Navbar } from "@/components/navbar";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "LinkedOut — Know before you join",
  description:
    "Anonymous workplace intelligence for Nigerians. Read real reviews, see why people leave, and decide with confidence.",
  openGraph: {
    title: "LinkedOut — Know before you join",
    description:
      "Abeg, check this place before you join. Anonymous reviews from real employees.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="relative mt-40">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C7F36B]/30 to-transparent" />
          <div className="mx-auto max-w-[1600px] px-6 py-24">
            <div className="grid gap-16 md:grid-cols-12">
              <div className="md:col-span-7">
                <Link href="/" className="inline-flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center border border-[#C7F36B]">
                    <span className="text-xs font-bold text-[#C7F36B]">LO</span>
                  </div>
                  <span className="text-xl font-semibold tracking-[0.25em] text-white">LINKEDOUT</span>
                </Link>
                <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#A8ADA7]">
                  The workplace intelligence desk. Anonymous by design. 
                  Because the truth shouldn&apos;t cost you your job.
                </p>
                <p className="mt-6 text-xs uppercase tracking-[0.4em] text-[#C7F36B]/80">
                  Know before you join
                </p>
              </div>
              <div className="md:col-span-2">
                <h3 className="mb-6 text-xs uppercase tracking-[0.4em] text-white">Investigate</h3>
                <ul className="space-y-4 text-sm">
                  <li><Link href="/companies" className="text-[#A8ADA7] transition-colors hover:text-[#C7F36B]">Browse files</Link></li>
                  <li><Link href="/search" className="text-[#A8ADA7] transition-colors hover:text-[#C7F36B]">Search dossier</Link></li>
                </ul>
              </div>
              <div className="md:col-span-2">
                <h3 className="mb-6 text-xs uppercase tracking-[0.4em] text-white">Contribute</h3>
                <ul className="space-y-4 text-sm">
                  <li><Link href="/reviews/write" className="text-[#A8ADA7] transition-colors hover:text-[#C7F36B]">File report</Link></li>
                  <li><Link href="/register" className="text-[#A8ADA7] transition-colors hover:text-[#C7F36B]">Create account</Link></li>
                </ul>
              </div>
              <div className="md:col-span-1">
                <h3 className="mb-6 text-xs uppercase tracking-[0.4em] text-white">Legal</h3>
                <ul className="space-y-4 text-sm">
                  <li><Link href="#" className="text-[#A8ADA7] transition-colors hover:text-[#C7F36B]">Privacy</Link></li>
                  <li><Link href="#" className="text-[#A8ADA7] transition-colors hover:text-[#C7F36B]">Terms</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
              <p className="text-xs uppercase tracking-[0.3em] text-[#A8ADA7]/60">© {new Date().getFullYear()} LinkedOut</p>
              <p className="text-xs uppercase tracking-[0.3em] text-[#A8ADA7]/60">Lagos • Global</p>
            </div>
          </div>
        </footer>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
