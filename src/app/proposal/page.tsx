import Image from "next/image";
import { Bolt, Target, Shield, CalIcon } from "@/components/proposal-icons";

const WHOP = "https://whop.com/velocitydemos/velocitydemos-marketing-services/";

const steps = [
  { s: "01", t: "We Run Your Ads", d: "Done-for-you Meta and Google ads, geo-targeted to Conyers and surrounding areas." },
  { s: "02", t: "AI Calls in 5 Min", d: "Our AI calls the lead within 5 minutes. Not 42 minutes. Not tomorrow." },
  { s: "03", t: "Pre-Qualify", d: "AI verifies they own the home, have a real project, and are in your service area." },
  { s: "04", t: "Book on Calendar", d: "Date, time, and address confirmed on your calendar. You just show up and sell." },
];

const includes = [
  "Done-for-you Meta ad campaigns",
  "Done-for-you Google ad campaigns",
  "Geo-targeted audience build",
  "Landing page creation",
  "AI call system (speed-to-lead in 5 min)",
  "Calendar integration",
  "Tracking dashboard",
];

export default function ProposalPage() {
  return (
    <main className="min-h-screen w-full bg-[#0B1426] text-white">
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0B1426]/90 backdrop-blur-xl border-b border-white/5">
        <div className="mx-auto flex items-center justify-between px-6 py-3" style={{ maxWidth: "64rem" }}>
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Mr. Roofing" width={32} height={32} className="h-8 w-auto" />
            <span className="text-sm font-semibold text-white/60">Your Custom Proposal</span>
          </div>
          <a href="#pricing" className="inline-flex items-center px-4 py-2 rounded-lg bg-[#0693e3] text-white text-sm font-semibold hover:bg-[#003388] transition-all">Pay Now</a>
        </div>
      </div>

      <section className="relative flex flex-col items-center justify-center text-center px-6" style={{ minHeight: "70vh", paddingTop: "8rem", paddingBottom: "4rem" }}>
        <div className="mesh-bg" />
        <div className="relative z-10 mx-auto space-y-6" style={{ maxWidth: "48rem" }}>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#0693e3] border border-[#0693e3]/20 rounded-full px-6 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#0693e3] animate-pulse" />
            Everything is already built
          </div>
          <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-tight">
            Hey Matt — I built you<br /><span className="gradient-text">something you need.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 mx-auto leading-relaxed" style={{ maxWidth: "34rem" }}>
            Your website. Your lead gen system. Your AI that calls leads in 5 minutes. It&apos;s all right here. Take 3 minutes to look through it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#website" className="inline-flex items-center gap-2 bg-[#0693e3] text-white font-semibold text-lg px-8 py-4 rounded-xl hover:bg-[#003388] transition-all hover:scale-[1.03]">See Your Website ↓</a>
            <a href="#pricing" className="inline-flex items-center gap-2 text-white/60 hover:text-[#0693e3] font-medium text-lg px-8 py-4 rounded-xl border border-white/10 hover:border-[#0693e3]/40 transition-all">Skip to Pricing</a>
          </div>
        </div>
      </section>

      <section id="website" className="py-20 px-6 relative overflow-hidden" style={{ background: "#0d1520" }}>
        <div className="mesh-bg" />
        <div className="mx-auto" style={{ maxWidth: "56rem" }}>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#0693e3] mb-4"><Bolt className="w-4 h-4" /> What I Built</div>
          <h2 className="text-3xl md:text-5xl font-light mb-4">Your New Website</h2>
          <p className="text-white/40 mb-8 text-lg max-w-2xl">Same photos, same reviews, same family story — from your current site. Just rebuilt with modern design.</p>
          <div className="relative rounded-2xl overflow-hidden border border-[#0693e3]/20">
            <Image src="/images/hero-bg.jpg" alt="Your new website" width={1200} height={600} className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1426]/80 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white/80 text-sm">Above: the hero section of your new site</div>
          </div>
          <div className="mt-6 text-center">
            <a href="/" className="inline-flex items-center gap-2 text-[#0693e3] font-medium text-lg hover:text-[#8ed1fc] transition-colors">Open the full live website →</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative overflow-hidden">
        <div className="mesh-bg" />
        <div className="mx-auto" style={{ maxWidth: "56rem" }}>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#0693e3] mb-4"><Target className="w-4 h-4" /> Lead Gen</div>
          <h2 className="text-3xl md:text-5xl font-light mb-4">20 Booked Appointments<br /><span className="gradient-text">in 30 Days. Guaranteed.</span></h2>
          <p className="text-white/40 mb-12 text-lg max-w-2xl">Speed-to-lead is the #1 predictor. Average contractor calls back in 42 minutes. We call in 5.</p>
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((s) => (
              <div key={s.s} className="bg-[#0f1a2e] border border-[#0693e3]/10 rounded-2xl p-8 flex gap-5 hover:border-[#0693e3]/30 transition-all duration-500">
                <span className="text-4xl font-light text-[#0693e3]/20">{s.s}</span>
                <div><h3 className="text-lg font-semibold mb-2">{s.t}</h3><p className="text-white/40 text-sm leading-relaxed">{s.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/*P2*/}
      <section className="py-20 px-6 relative overflow-hidden" style={{ background: "#0d1520" }}>
        <div className="mesh-bg" />
        <div className="mx-auto text-center" style={{ maxWidth: "42rem" }}>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#0693e3] mb-4"><Shield className="w-4 h-4" /> Risk Reversal</div>
          <h2 className="text-3xl md:text-4xl font-light mb-6">The Guarantee</h2>
          <div className="bg-[#0f1a2e] border border-[#0693e3]/15 rounded-2xl p-10 space-y-4">
            <Target className="w-10 h-10 text-[#0693e3] mx-auto" />
            <p className="text-xl font-semibold text-white">20 booked appointments in 30 days. Guaranteed.</p>
            <p className="text-white/40 text-lg">We don&apos;t deliver 20? You don&apos;t pay for the gap.</p>
            <p className="text-white/30 text-base">We take the risk. You take the upside.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 relative overflow-hidden">
        <div className="mesh-bg" />
        <div className="mx-auto" style={{ maxWidth: "56rem" }}>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#0693e3] mb-4"><CalIcon className="w-4 h-4" /> Investment</div>
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">Simple. Performance-Based.</h2>
          <div className="grid md:grid-cols-2 gap-8" style={{ alignItems: "stretch" }}>
            <div className="bg-[#0f1a2e] border border-[#0693e3]/10 rounded-2xl p-10 flex flex-col h-full">
              <span className="text-xs font-medium text-white/40 uppercase tracking-wider mb-4">Website Redesign</span>
              <div className="mb-4"><span className="text-5xl font-bold text-white">$500</span><span className="text-white/30 text-sm block">one-time</span></div>
              <ul className="text-left text-white/50 space-y-2 flex-1 mb-6 text-sm">
                {["Fully built and deployed","Your photos and reviews","Animated with scroll effects","Mobile-first","Google-ready SEO"].map((item) => (
                  <li key={item} className="flex items-start gap-2"><span className="text-[#0693e3] mt-0.5">✓</span>{item}</li>
                ))}
              </ul>
              <a href={WHOP} target="_blank" rel="noopener noreferrer" className="mt-auto w-full py-3 rounded-xl bg-[#0693e3] text-white font-semibold text-center hover:bg-[#003388] transition-all">Pay $500 for Website</a>
            </div>
            <div className="bg-[#0f1a2e] border-2 border-[#0693e3]/30 rounded-2xl p-10 flex flex-col h-full relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0693e3] text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">Complete System</div>
              <span className="text-xs font-medium text-white/40 uppercase tracking-wider mb-4 mt-2">Website + Lead Gen + AI</span>
              <div className="mb-4"><span className="text-5xl font-bold text-[#0693e3]">$2,000</span><span className="text-white/30 text-sm block">setup + $200/appointment</span></div>
              <ul className="text-left text-white/50 space-y-2 flex-1 mb-6 text-sm">
                <li className="flex items-start gap-2"><span className="text-[#0693e3] mt-0.5">✓</span>Everything in website redesign</li>
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-2"><span className="text-[#0693e3] mt-0.5">✓</span>{item}</li>
                ))}
              </ul>
              <a href={WHOP} target="_blank" rel="noopener noreferrer" className="mt-auto w-full py-3 rounded-xl bg-[#0693e3] text-white font-semibold text-center hover:bg-[#003388] transition-all">Pay $2,000 Setup Fee</a>
            </div>
          </div>
          <div className="mt-8 bg-[#0f1a2e] border border-[#0693e3]/10 rounded-2xl p-6 text-center">
            <p className="text-white/40 text-sm mb-1">The math</p>
            <p className="text-2xl font-bold text-white">$500 + $2,000 = $2,500 total investment</p>
            <p className="text-white/40 text-base mt-1">20 appointments × 20% close = 4 roofs × $8K–$15K = $32K–$60K revenue</p>
            <p className="text-[#0693e3] font-semibold text-lg mt-2">12–24x return.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center relative overflow-hidden" style={{ background: "#0d1520" }}>
        <div className="mesh-bg" />
        <div className="mx-auto" style={{ maxWidth: "36rem" }}>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#0693e3] mb-4"><CalIcon className="w-4 h-4" /> Next Step</div>
          <h2 className="text-3xl md:text-4xl font-light mb-4">I&apos;ll Come to You</h2>
          <p className="text-white/40 mb-8 text-lg">15 minutes. I&apos;ll drive to Conyers. Live AI demo. You decide after you see it.</p>
          <a href="tel:+14707069339" className="inline-flex items-center gap-3 bg-[#0693e3] text-white font-semibold text-lg px-10 py-4 rounded-xl hover:bg-[#003388] transition-all hover:scale-[1.03]">Call Matt: (470) 706-9339</a>
          <p className="text-white/25 text-xs mt-4">1343 Business Center Dr. #B, Conyers, GA 30094</p>
        </div>
      </section>

      <footer className="py-10 border-t border-white/5 text-center text-white/20 text-xs">
        Built by Julius Young III · <a href="https://github.com/ypc-ux" className="text-[#0693e3]/50 hover:text-[#0693e3]">github.com/ypc-ux</a>
      </footer>
    </main>
  );
}

