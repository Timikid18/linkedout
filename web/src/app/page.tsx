import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Star, User } from "lucide-react";

const LIME = "#C7F36B";

/* ------------------------------- hero cards ------------------------------ */

function RatingCard() {
  const rows = [
    { label: "Management", value: 3.1, color: LIME },
    { label: "Work-life balance", value: 2.6, color: "#F59E1B" },
    { label: "Career growth", value: 3.4, color: "#F59E1B" },
    { label: "Compensation", value: 3.2, color: "#F59E1B" },
  ];

  return (
    <div className="w-[180px] rounded-[10px] border border-white/[0.07] bg-[#0D1110]/80 p-4 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)] backdrop-blur-md">
      <p className="text-[8px] font-medium uppercase tracking-[0.22em] text-white/45">
        Workplace rating
      </p>

      <div className="mt-3 flex items-center gap-2">
        <svg viewBox="0 0 36 36" className="h-6 w-6 -rotate-90">
          <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="4" />
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke={LIME}
            strokeWidth="4"
            strokeDasharray="94.2"
            strokeDashoffset="23"
            strokeLinecap="round"
          />
        </svg>
        <p className="text-[24px] font-semibold leading-none tracking-tight text-white">
          3.8
          <span className="ml-0.5 text-[11px] font-normal text-white/45">/5</span>
        </p>
      </div>
      <p className="mt-1 text-[9px] text-white/40">from 143 reviews</p>

      <div className="mt-4 space-y-3">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-[9px] text-white/55">{row.label}</span>
              <span className="text-[9px] text-white/85">{row.value.toFixed(1)}</span>
            </div>
            <div className="mt-1.5 h-[3px] overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full"
                style={{ width: `${(row.value / 5) * 100}%`, backgroundColor: row.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WhyPeopleLeaveCard() {
  const rows = [
    { label: "Better opportunity", value: 32, color: LIME },
    { label: "Management", value: 24, color: "#F59E1B" },
    { label: "Work-life balance", value: 18, color: "#E5484D" },
    { label: "Salary", value: 12, color: "#6B7280" },
    { label: "Other", value: 14, color: "#6B7280" },
  ];

  return (
    <div className="w-[215px] rounded-[10px] border border-white/[0.07] bg-[#0D1110]/80 p-4 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)] backdrop-blur-md">
      <p className="text-[8px] font-medium uppercase tracking-[0.22em] text-white/45">
        Why people leave
      </p>
      <div className="mt-3 space-y-2.5">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-[9px] text-white/55">{row.label}</span>
              <span className="text-[9px] text-white/85">{row.value}%</span>
            </div>
            <div className="mt-1 h-[3px] overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full"
                style={{ width: `${row.value}%`, backgroundColor: row.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewCard() {
  return (
    <div className="w-[200px] rounded-[10px] border border-white/[0.07] bg-[#0D1110]/80 p-4 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)] backdrop-blur-md">
      <div className="flex items-center gap-2.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white/60">
          <User className="h-3.5 w-3.5" />
        </div>
        <div>
          <p className="text-[9px] font-semibold leading-tight text-white">Anonymous Employee</p>
          <p className="text-[8px] text-white/40">Software Engineer · Lagos</p>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-0.5">
        {[0, 1, 2, 3].map((i) => (
          <Star key={i} className="h-2.5 w-2.5" fill={LIME} stroke="none" />
        ))}
        <Star className="h-2.5 w-2.5 text-white/25" />
      </div>

      <p className="mt-3 text-[9.5px] italic leading-[1.55] text-white/70">
        &ldquo;The people are amazing. The work is challenging. Management... let&apos;s just
        say I have stories.&rdquo;
      </p>

      <p className="mt-3 text-[8px] uppercase tracking-[0.16em] text-white/35">Why I left</p>
      <span className="mt-1.5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[8px] text-white/75">
        Career growth
      </span>
    </div>
  );
}

function StickyNote() {
  return (
    <div
      className="flex min-h-[128px] w-[150px] -rotate-[5deg] flex-col justify-between rounded-[2px] bg-[#E3C89A] p-4 text-[#3A2E1B] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.85)]"
      style={{ fontFamily: "'Segoe Print', 'Bradley Hand', 'Segoe Script', cursive" }}
    >
      <p className="text-[11px] leading-[1.5]">
        Great team.
        <br />
        Poor management.
        <br />
        Interesting...
      </p>
      <p className="text-right text-[13px]">☺</p>
    </div>
  );
}

/* ---------------------------------- hero --------------------------------- */

export default function Home() {
  return (
    <div className="relative bg-[#05090C]">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        {/* Background photo — drop the reference image at web/public/hero-photo.jpg */}
        <div
          className="absolute inset-0 -z-20 bg-[#05090C] bg-cover bg-[position:72%_center] bg-no-repeat"
          style={{
            backgroundImage:
              "url('/hero-photo.jpg'), radial-gradient(70% 110% at 78% 58%, rgba(196,134,80,0.30) 0%, rgba(120,80,48,0.16) 38%, rgba(5,9,12,0) 74%)",
          }}
        />
        {/* Legibility gradient over the photo */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#05090C_0%,#05090C_26%,rgba(5,9,12,0.94)_34%,rgba(5,9,12,0.55)_48%,rgba(5,9,12,0.12)_68%,rgba(5,9,12,0)_88%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-[linear-gradient(180deg,rgba(5,9,12,0.75),rgba(5,9,12,0))]" />

        <div className="relative mx-auto max-w-[1240px] xl:min-h-[826px]">
          {/* Copy column */}
          <div className="px-6 pt-[132px] sm:px-10 xl:px-[52px] xl:pt-[140px]">
            <div className="max-w-[430px]">
              <p className="w-[185px] text-[9px] font-medium uppercase leading-[1.9] tracking-[0.3em] text-[#C7F36B]/75">
                The internet&apos;s unofficial workplace intelligence desk.
              </p>

              <h1 className="mt-7 text-[52px] font-semibold leading-[0.95] tracking-[-0.045em] text-white sm:text-[68px]">
                Looks good
                <br />
                on paper.
              </h1>

              <p className="mt-2 text-[32px] font-medium leading-[1.12] tracking-[-0.02em] text-[#C7F36B] sm:text-[40px]">
                Let&apos;s see what
                <br />
                the people say.
              </p>

              <p className="mt-6 text-[13px] leading-[1.7] text-white/65">
                Real employee experiences. Anonymous reviews.
                <br className="hidden sm:block" /> The truth about working at your next company.
              </p>

              <form
                id="search"
                action="/companies"
                className="mt-9 flex h-[48px] w-full max-w-[400px] items-center gap-3 rounded-full border border-white/10 bg-[#11161C]/90 pl-5 pr-1 backdrop-blur-sm transition-colors focus-within:border-white/25"
              >
                <Search className="h-4 w-4 shrink-0 text-white/50" />
                <input
                  name="q"
                  placeholder="Search a company..."
                  aria-label="Search a company"
                  className="h-full w-full min-w-0 bg-transparent text-[13px] text-white outline-none placeholder:text-white/45"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="flex h-10 w-[54px] shrink-0 items-center justify-center rounded-full bg-[#C7F36B] text-[#0B0D0C] transition-colors hover:bg-[#d4ff7a]"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              <div className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-2">
                <span className="mr-1 text-[10px] text-white/45">Popular searches:</span>
                {["MTN", "Dangote", "Google", "Access Bank", "Jumia"].map((company) => (
                  <Link
                    key={company}
                    href={`/companies?q=${encodeURIComponent(company)}`}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] text-white/80 transition-colors hover:border-white/25 hover:text-white"
                  >
                    {company}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Floating cards (desktop) */}
          <div className="pointer-events-none absolute inset-0 hidden xl:block">
            <div className="pointer-events-auto absolute left-[490px] top-[460px]">
              <RatingCard />
            </div>
            <div className="pointer-events-auto absolute left-[1010px] top-[150px]">
              <WhyPeopleLeaveCard />
            </div>
            <div className="pointer-events-auto absolute left-[824px] top-[57px]">
              <StickyNote />
            </div>
            <div className="pointer-events-auto absolute left-[955px] top-[420px]">
              <ReviewCard />
            </div>
          </div>

          {/* Floating cards (mobile / tablet) */}
          <div className="grid gap-4 px-6 pb-16 pt-12 sm:grid-cols-2 sm:px-10 xl:hidden">
            <RatingCard />
            <WhyPeopleLeaveCard />
            <ReviewCard />
            <StickyNote />
          </div>
        </div>
      </section>

      {/* Investigation Section */}
      <section id="about" className="relative mt-10">
        <div className="mx-auto max-w-[1600px] px-6 py-24">
          <div className="mb-20 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="mb-10 flex items-center gap-4">
                <div className="h-px w-12 bg-[#C7F36B]" />
                <span className="text-xs uppercase tracking-[0.5em] text-[#A8ADA7]">The Investigation</span>
              </div>
              <h2 className="text-balance text-5xl font-bold leading-[0.9] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                <span className="block">WHAT THEY</span>
                <span className="block">SAY VS</span>
                <span className="block text-white/25">WHAT THEY</span>
                <span className="block">MEAN</span>
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base leading-relaxed text-[#A8ADA7]">
                The gap between corporate speak and employee reality is where the truth lives.
              </p>
            </div>
          </div>

          <div className="relative grid gap-6 lg:grid-cols-2">
            <div className="relative border border-white/10 bg-[#0B0D0C]/60 p-8 sm:p-10 lg:p-12">
              <div className="absolute left-0 top-0 h-full w-px bg-white/20" />
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.4em] text-[#A8ADA7]">Corporate Statement</span>
                <span className="text-xs uppercase tracking-[0.4em] text-[#A8ADA7]/40">Public</span>
              </div>
              <p className="text-2xl leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                &quot;We are a family here. We look out for each other.&quot;
              </p>
            </div>

            <div className="relative border border-[#C7F36B]/40 bg-[#0B0D0C]/70 p-8 sm:p-10 lg:p-12">
              <div className="absolute left-0 top-0 h-full w-px bg-[#C7F36B]" />
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.4em] text-[#C7F36B]">LinkedOut Report</span>
                <span className="text-xs uppercase tracking-[0.4em] text-[#A8ADA7]/60">Anonymous</span>
              </div>
              <p className="text-2xl leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                <span className="text-[#A8ADA7]">Translation:</span> Boundaries are blurry. Saying no can be difficult.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-px bg-white/5 lg:grid-cols-4">
            {[
              { claim: "Competitive salary", reality: "Competitive with...?" },
              { claim: "Fast-paced environment", reality: "No time to breathe" },
              { claim: "Wear many hats", reality: "Do 3 jobs for 1 salary" },
              { claim: "Flexible working", reality: "Flexible for them" },
            ].map((item, i) => (
              <div key={i} className="group relative bg-[#0B0D0C] p-6 transition-colors hover:bg-[#111412] sm:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#A8ADA7]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mb-4 text-base text-[#A8ADA7]">&quot;{item.claim}&quot;</p>
                <p className="text-base text-white">{item.reality}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative mt-36">
        <div className="mx-auto max-w-[1600px] px-6 py-40">
          <div className="relative border border-white/10 bg-[#0B0D0C]/70">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C7F36B]/40 to-transparent" />
            <div className="mx-auto max-w-4xl px-8 py-24 text-center sm:px-12 sm:py-36">
              <div className="mb-12 flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-[#C7F36B]/60" />
                <span className="text-xs uppercase tracking-[0.5em] text-[#A8ADA7]">Action Required</span>
                <div className="h-px w-12 bg-[#C7F36B]/60" />
              </div>
              <h2 className="mb-10 text-balance text-5xl font-bold leading-[0.9] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
                <span className="block">GOT THE OFFER?</span>
                <span className="block text-white/25">NOW ASK</span>
                <span className="block">THE RIGHT</span>
                <span className="block">QUESTIONS.</span>
              </h2>
              <p className="mb-14 text-lg text-[#A8ADA7]">
                Five minutes here could save you years of regret.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/companies">
                  <Button size="lg" className="h-14 px-12 bg-[#C7F36B] text-[#0B0D0C] hover:bg-[#d4ff7a] text-xs uppercase tracking-[0.4em] rounded-none">
                    Start Investigation
                    <ArrowRight className="ml-4 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/reviews/write">
                  <Button size="lg" variant="outline" className="h-14 px-12 border-white/20 text-white hover:bg-white/5 hover:text-[#C7F36B] hover:border-[#C7F36B] text-xs uppercase tracking-[0.4em] rounded-none">
                    Add Intelligence
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
