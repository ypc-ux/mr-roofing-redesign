import Image from "next/image";

export const metadata = {
  title: "Dustin — Your Website | Julius Young III",
  description: "Website redesign for contractors. $500. No monthly fees. You own it.",
};

const steps = [
  { s: "01", t: "Your Photos & Reviews", d: "I use your actual work photos and Google reviews." },
  { s: "02", t: "Modern Design", d: "Animated, mobile-first. Looks like a $10K site." },
  { s: "03", t: "Deploy Tonight", d: "Live within 24 hours. Link immediately." },
];

const includes = [
  "Fully built website (5+ sections)",
  "Mobile-first design",
  "Scroll animations and effects",
  "Google-ready SEO setup",
  "Free hosting on Vercel",
  "Your photos and branding",
  "Contact page with click-to-call",
  "Delivered within 24 hours",
];

export default function DustinPage() {
  return (
    <main className="min-h-screen w-full bg-[#0B1426] text-white">
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0B1426]/90 backdrop-blur-xl border-b border-white/5">
        <div className="mx-auto flex items-center justify-between px-6 py-3" style={{ maxWidth: "56rem" }}>
          <span className="text-sm font-semibold text-white/60">Your Website Proposal</span>
          <a href="#pricing" className="inline-flex items-center px-4 py-2 rounded-lg bg-[#0693e3] text-white text-sm font-semibold hover:bg-[#003388] transition-all">Pay $500</a>
        </div>
      </div>

      <section className="relative flex flex-col items-center justify-center text-center px-6" style={{ minHeight: "65vh", paddingTop: "7rem", paddingBottom: "4rem" }}>
        <div className="mesh-bg" />
        <div className="relative z-10 mx-auto space-y-6" style={{ maxWidth: "40rem" }}>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#0693e3] border border-[#0693e3]/20 rounded-full px-6 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#0693e3] animate-pulse" />
            Simple offer. No monthly fees.
          </div>
          <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-tight">
            Hey Dustin — <span className="gradient-text">built you a website.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 mx-auto leading-relaxed" style={{ maxWidth: "32rem" }}>
            $500 one-time. You own it. No monthly fees. No contracts. Looks professional, works on mobile, gets you found on Google.
          </p>
          <a href="#pricing" className="inline-flex items-center gap-2 bg-[#0693e3] text-white font-semibold text-lg px-10 py-4 rounded-xl hover:bg-[#003388] transition-all hover:scale-[1.03]">See What You Get ↓</a>
        </div>
      </section>
{/*P2*/}
      <section className="py-20 px-6 relative overflow-hidden" style={{ background: "#0d1520" }}>
        <div className="mesh-bg" />
        <div className="mx-auto" style={{ maxWidth: "56rem" }}>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#0693e3] mb-4">Example</div>
          <h2 className="text-3xl md:text-4xl font-light mb-4">This Is What Yours Will Look Like</h2>
          <p className="text-white/40 mb-8 text-lg max-w-2xl">Here&apos;s one I just finished for a roofing company in Conyers. Same quality for you.</p>
          <div className="relative rounded-2xl overflow-hidden border border-[#0693e3]/20">
            <Image src="/images/hero-bg.jpg" alt="Example contractor website" width={1200} height={600} className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1426]/80 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white/80 text-sm">Roofing site in Conyers, GA — same quality for you</div>
          </div>
          <div className="mt-6 text-center">
            <a href="/" className="inline-flex items-center gap-2 text-[#0693e3] font-medium text-lg hover:text-[#8ed1fc] transition-colors">Open the full live website →</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative overflow-hidden">
        <div className="mesh-bg" />
        <div className="mx-auto" style={{ maxWidth: "56rem" }}>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#0693e3] mb-4">The Process</div>
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">Three Steps. 24 Hours.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.s} className="bg-[#0f1a2e] border border-[#0693e3]/10 rounded-2xl p-8">
                <span className="text-4xl font-light text-[#0693e3]/20">{s.s}</span>
                <h3 className="text-lg font-semibold mt-4 mb-2">{s.t}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 relative overflow-hidden" style={{ background: "#0d1520" }}>
        <div className="mesh-bg" />
        <div className="mx-auto text-center" style={{ maxWidth: "32rem" }}>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#0693e3] mb-4">Investment</div>
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">$500. One-time.</h2>
          <div className="bg-[#0f1a2e] border border-[#0693e3]/15 rounded-2xl p-10 flex flex-col">
            <div className="mb-6"><span className="text-6xl font-bold text-white">$500</span><span className="text-white/30 text-sm block mt-2">one-time · you own it</span></div>
            <ul className="text-left text-white/50 space-y-3 mb-8">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm"><span className="text-[#0693e3] mt-0.5">✓</span>{item}</li>
              ))}
            </ul>
            <a href="sms:+14046908889" className="w-full py-4 rounded-xl bg-[#0693e3] text-white font-semibold text-center hover:bg-[#003388] transition-all">Text Julius to Get Started</a>
            <p className="text-white/25 text-xs mt-4">I start building the same day you reply.</p>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-white/5 text-center text-white/20 text-xs">
        Built by Julius Young III · <a href="https://github.com/ypc-ux" className="text-[#0693e3]/50 hover:text-[#0693e3]">github.com/ypc-ux</a>
      </footer>
    </main>
  );
}