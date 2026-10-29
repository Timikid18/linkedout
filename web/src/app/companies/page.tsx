import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Search, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Companies | LinkedOut",
  description:
    "Browse anonymous workplace dossiers for companies in Nigeria. Ratings, review counts and the truth about what it is really like to work there.",
};

type CompaniesPageProps = {
  searchParams: Promise<{ q?: string | string[] }>;
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default async function CompaniesPage({ searchParams }: CompaniesPageProps) {
  const params = await searchParams;
  const query = typeof params.q === "string" ? params.q.trim() : "";

  const companies = await prisma.company.findMany({
    where: {
      status: "ACTIVE",
      ...(query
        ? {
            OR: [
              { name: { contains: query, mode: "insensitive" } },
              { industry: { contains: query, mode: "insensitive" } },
            ],
          }
        : {}),
    },
    orderBy: [{ reviewCount: "desc" }, { name: "asc" }],
  });

  return (
    <main className="flex-1">
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-28 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-[#C7F36B]" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#A8ADA7]">
                The dossiers
              </span>
            </div>
            <h1 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Companies
            </h1>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#A8ADA7]">
              Abeg, find the one you&apos;re about to interview with. Real ratings from
              anonymous employee reports.
            </p>
          </div>
          <Button asChild>
            <Link href="/reviews/write">Spill the tea</Link>
          </Button>
        </div>

        <form
          action="/companies"
          className="mt-10 flex h-12 w-full max-w-[440px] items-center gap-3 rounded-full border border-white/10 bg-[#11161C]/90 pl-5 pr-1 backdrop-blur-sm transition-colors focus-within:border-white/25"
        >
          <Search className="h-4 w-4 shrink-0 text-white/50" />
          <input
            name="q"
            defaultValue={query}
            placeholder="Search a company..."
            aria-label="Search a company"
            className="h-full w-full min-w-0 bg-transparent text-[13px] text-white outline-none placeholder:text-white/45"
          />
          <button
            type="submit"
            aria-label="Search"
            className="flex h-9 w-[52px] shrink-0 items-center justify-center rounded-full bg-[#C7F36B] text-[#0B0D0C] transition-colors hover:bg-[#d4ff7a]"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <div className="mt-8 flex items-center justify-between gap-4">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#A8ADA7]">
            {companies.length} {companies.length === 1 ? "company" : "companies"}
            {query ? ` for "${query}"` : ""}
          </p>
          {query ? (
            <Link
              href="/companies"
              className="text-[11px] uppercase tracking-[0.25em] text-[#C7F36B]/80 transition-colors hover:text-[#C7F36B]"
            >
              Clear search
            </Link>
          ) : null}
        </div>

        {companies.length > 0 ? (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((company) => {
              const verified = company.verification !== "UNVERIFIED";
              const location = [company.city, company.region, company.country]
                .filter(
                  (part, index, parts): part is string =>
                    Boolean(part) && parts.indexOf(part) === index
                )
                .join(", ");

              return (
                <article
                  key={company.id}
                  className="group flex flex-col border border-white/10 bg-[#0D1110]/70 p-6 transition-colors hover:border-[#C7F36B]/35 hover:bg-[#0D1110]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#C7F36B]/30 bg-[#C7F36B]/10 text-xs font-bold tracking-[0.12em] text-[#C7F36B]">
                        {initials(company.name)}
                      </div>
                      <div className="min-w-0">
                        <h2 className="truncate text-[15px] font-semibold text-white">
                          {company.name}
                        </h2>
                        <p className="mt-1 truncate text-[10px] uppercase tracking-[0.16em] text-white/40">
                          {company.industry ?? "Company"}
                        </p>
                      </div>
                    </div>
                    {verified ? (
                      <ShieldCheck
                        className="h-4 w-4 shrink-0 text-[#C7F36B]"
                        aria-label="Verified company"
                      />
                    ) : null}
                  </div>

                  <p className="mt-4 line-clamp-2 text-[13px] leading-relaxed text-white/55">
                    {company.description ??
                      "No dossier yet. Be the first to file a report."}
                  </p>

                  <div className="mt-auto flex items-end justify-between gap-4 pt-6">
                    <div>
                      <div className="flex items-center gap-1.5">
                        {company.ratingAverage ? (
                          <>
                            <Star className="h-3.5 w-3.5 fill-[#C7F36B] text-[#C7F36B]" />
                            <span className="text-[15px] font-semibold text-white">
                              {company.ratingAverage.toFixed(1)}
                            </span>
                            <span className="text-[11px] text-white/35">/ 5</span>
                          </>
                        ) : (
                          <span className="text-[10px] uppercase tracking-[0.16em] text-white/35">
                            Not rated
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-[11px] text-white/40">
                        {company.reviewCount > 0
                          ? `${company.reviewCount.toLocaleString("en-US")} reviews`
                          : "No reviews yet"}
                      </p>
                    </div>
                    <p className="flex items-center gap-1 text-[11px] text-white/40">
                      <MapPin className="h-3 w-3" />
                      {location}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-4 border border-white/10 bg-[#0D1110]/70 p-10 text-center">
            <h2 className="text-lg font-semibold text-white">
              {query ? "No companies found" : "No companies yet"}
            </h2>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-white/50">
              {query
                ? `Nothing matches "${query}" yet. Try a different name or be the first to file a report.`
                : "Once companies are added, their dossiers will show here. Be the first to file a report."}
            </p>
            <div className="mt-6 flex justify-center">
              <Button asChild variant="outline">
                <Link href={query ? "/companies" : "/reviews/write"}>
                  {query ? "Clear search" : "File a report"}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
