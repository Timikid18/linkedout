import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="relative">
      <img src="/hero-bg.png" alt="" className="fixed inset-0 -z-10 h-full w-full object-cover" />

      {/* Hero Section */}
      <section className="relative">
        <div className="mx-auto max-w-[1600px] px-6 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40">
          <div className="mb-20 grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-9">
              <div className="mb-12 flex items-center gap-4">
                <div className="h-px w-16 bg-[#C7F36B]" />
                <span className="text-xs uppercase tracking-[0.5em] text-[#A8ADA7]">
                  Workplace Intelligence Desk
                </span>
              </div>
              
              <h1 className="text-balance text-[clamp(3rem,12vw,14rem)] font-bold leading-[0.85] tracking-[-0.04em] text-white">
                <span className="block">THE JOB</span>
                <span className="block">DESCRIPTION</span>
                <span className="block mt-[0.1em] text-white/25">IS ONLY</span>
                <span className="block mt-[0.1em]">HALF THE</span>
                <span className="relative block mt-[0.1em]">
                  STORY
                  <span className="absolute -bottom-[0.05em] left-0 h-[0.02em] w-[25%] bg-[#C7F36B]" />
                </span>
              </h1>
            </div>
            
            <div className="lg:col-span-3 lg:mt-36">
              <div className="space-y-10">
                <div className="space-y-4">
                  <p className="text-base leading-relaxed text-white">Companies curate.</p>
                  <p className="text-base leading-relaxed text-[#A8ADA7]">Employees know.</p>
                  <p className="text-base leading-relaxed text-white">We sit in the gap.</p>
                </div>
                <div className="space-y-5">
                  <Link href="/companies" className="group flex items-center justify-between border-b border-white/15 pb-3 text-xs uppercase tracking-[0.4em] text-white transition-all hover:border-[#C7F36B] hover:text-[#C7F36B]">
                    <span>Investigate</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/reviews/write" className="group flex items-center justify-between border-b border-white/10 pb-3 text-xs uppercase tracking-[0.4em] text-[#A8ADA7] transition-all hover:border-[#C7F36B] hover:text-[#C7F36B]">
                    <span>File Report</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dossier Search */}
          <div className="relative mt-32">
            <div className="mb-16 flex items-center gap-6">
              <span className="text-xs uppercase tracking-[0.5em] text-[#A8ADA7]">DOSSIER</span>
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs uppercase tracking-[0.5em] text-[#A8ADA7]">RESTRICTED</span>
            </div>
            
            <div className="relative">
              <div className="absolute -left-6 top-0 bottom-0 w-px bg-[#C7F36B]/40 hidden xl:block" />
              <div className="absolute -left-6 top-0 h-12 w-px bg-[#C7F36B] hidden xl:block" />
              <form action="/search" className="relative border border-white/10 bg-[#0B0D0C]/60">
                <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-12 lg:items-end lg:gap-14">
                  <div className="lg:col-span-8">
                    <div className="mb-8 flex items-center justify-between">
                      <label className="text-xs uppercase tracking-[0.35em] text-[#A8ADA7]">Subject of investigation</label>
                      <span className="text-xs uppercase tracking-[0.35em] text-[#A8ADA7]/60">FIELD 01</span>
                    </div>
                    <div className="relative">
                      <Search className="absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2 text-[#A8ADA7]" />
                      <Input
                        name="q"
                        placeholder="Which company?"
                        className="h-16 border-0 border-b border-white/15 bg-transparent pl-9 text-2xl text-white shadow-none focus-visible:ring-0 focus-visible:border-[#C7F36B] placeholder:text-white/20 sm:text-3xl lg:text-4xl"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-4">
                    <Button type="submit" className="h-16 w-full bg-[#C7F36B] text-[#0B0D0C] hover:bg-[#d4ff7a] text-xs uppercase tracking-[0.4em] rounded-none">
                      Open File
                      <ArrowRight className="ml-4 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="border-t border-white/10 px-8 py-6 sm:px-12">
                  <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs">
                    <span className="uppercase tracking-[0.35em] text-[#A8ADA7]">Quick access:</span>
                    {['Flutterwave', 'Andela', 'Paystack', 'Kuda', 'OPay'].map((company) => (
                      <Link 
                        key={company}
                        href={`/search?q=${company}`} 
                        className="uppercase tracking-[0.35em] text-[#A8ADA7] transition-colors hover:text-[#C7F36B]"
                      >
                        {company}
                      </Link>
                    ))}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Investigation Section */}
      <section className="relative mt-36">
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
                "We are a family here. We look out for each other."
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
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="mb-4 text-base text-[#A8ADA7]">"{item.claim}"</p>
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
