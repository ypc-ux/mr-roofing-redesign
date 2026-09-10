'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const PHONE = '(470) 706-9339';
const PHONE_HREF = 'tel:+14707069339';
const ADDRESS = '1343 Business Center Dr. #B, Conyers, GA 30094';

const services = [
  { num: '01', title: 'Asphalt Roofing', desc: 'Premium shingle installation built to last decades.' },
  { num: '02', title: 'Roof Repairs', desc: 'Stop leaks fast. 24/7 emergency service.' },
  { num: '03', title: 'Siding', desc: 'New installs, repairs, and pressure washing.' },
  { num: '04', title: 'Soffits & Gutters', desc: 'Water damage protection that lasts.' },
  { num: '05', title: 'Painting', desc: 'Interior and exterior. Done right the first time.' },
  { num: '06', title: 'Storm Damage', desc: 'Insurance claims. Free drone inspection.' },
];

const reviews = [
  { name: 'Jared L.', text: '10/10 the best roofers in town. Professional and fast.' },
  { name: 'Wendy M.', text: 'Matt was very kind and helpful. Will definitely use again.' },
  { name: 'Darran S.', text: 'Very professional, responsive, on time. Awesome work!' },
  { name: 'Taylor B.', text: 'Free drone inspection, fast and friendly.' },
  { name: 'Jacob H.', text: 'Donated roofing materials to hurricane victims.' },
  { name: 'Kaitlynn C.', text: 'Painless process. Highly recommend.' },
];

const areas = ['Conyers', 'Covington', 'Loganville', 'Snellville', 'Monroe', 'Lawrenceville', 'Oxford', 'Social Circle', 'Grayson'];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0.2]);
  const heroY = useTransform(scrollYProgress, [0, 0.08], [0, -60]);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    gsap.registerPlugin(ScrollTrigger);

    if (heroRef.current) {
      gsap.to('.hero-bg', { yPercent: 25, scale: 1.08, ease: 'none', scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1 } });
    }

    if (servicesRef.current) {
      const inner = servicesRef.current.querySelector('.hs-inner');
      if (inner) {
        gsap.to(inner, { x: () => -(inner.scrollWidth - window.innerWidth + 120), ease: 'none', scrollTrigger: { trigger: servicesRef.current, start: 'top top', end: () => `+=${inner.scrollWidth - window.innerWidth + 200}`, pin: true, scrub: 1, invalidateOnRefresh: true } });
      }
    }

    if (statsRef.current) {
      statsRef.current.querySelectorAll('.stat-num').forEach((el) => {
        const target = parseInt(el.getAttribute('data-value') || '0');
        gsap.fromTo(el, { textContent: 0 }, { textContent: target, duration: 2.5, ease: 'power2.out', snap: { textContent: 1 }, scrollTrigger: { trigger: statsRef.current, start: 'top 75%', once: true } });
      });
      gsap.fromTo(statsRef.current.querySelectorAll('.stat-item'), { opacity: 0, y: 60 }, { opacity: 1, y: 0, stagger: 0.12, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: statsRef.current, start: 'top 70%', once: true } });
    }

    if (aboutRef.current) {
      gsap.fromTo(aboutRef.current.querySelectorAll('.about-r'), { opacity: 0, x: -50 }, { opacity: 1, x: 0, stagger: 0.15, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: aboutRef.current, start: 'top 65%', once: true } });
    }

    document.querySelectorAll('.reveal').forEach((el) => {
      gsap.fromTo(el, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
    });

    document.querySelectorAll('.review-card').forEach((el, i) => {
      gsap.fromTo(el, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.8, ease: 'back.out(1.2)', delay: (i % 3) * 0.08, scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
    });

    return () => { lenis.destroy(); ScrollTrigger.getAll().forEach((st) => st.kill()); };
  }, []);

  return (
    <div className="bg-[#0B1426] text-white min-h-screen w-full overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-[#C9A855]/10 z-[999]">
        <motion.div className="h-full bg-[#C9A855] origin-left" style={{ scaleX: scrollYProgress }} />
      </div>
{/* NAV_HERO */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1426]/95 backdrop-blur-xl border-b border-[#C9A855]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-semibold text-lg uppercase tracking-[0.2em]">Mr. <span className="text-[#C9A855]">Roofing</span></div>
          <div className="hidden md:flex items-center gap-10 text-sm text-white/60">
            <a href="#services" className="hover:text-[#C9A855] transition-colors">Services</a>
            <a href="#reviews" className="hover:text-[#C9A855] transition-colors">Reviews</a>
            <a href="#areas" className="hover:text-[#C9A855] transition-colors">Areas</a>
            <a href="#about" className="hover:text-[#C9A855] transition-colors">About</a>
          </div>
          <a href={PHONE_HREF} className="text-sm font-semibold text-[#C9A855] border border-[#C9A855]/30 hover:border-[#C9A855] rounded-lg px-5 py-2.5 transition-all">{PHONE}</a>
        </div>
      </nav>

      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="hero-bg absolute inset-0" style={{ opacity: heroOpacity, y: heroY }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1426] via-[#0B1426] to-[#1a2332]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#C9A855 1px, transparent 1px), linear-gradient(90deg, #C9A855 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
          <svg className="absolute bottom-0 left-0 w-full opacity-[0.06]" viewBox="0 0 1200 200" fill="none"><path d="M0 200 L200 80 L400 200 L600 60 L800 200 L1000 90 L1200 200" stroke="#C9A855" strokeWidth="2" /></svg>
        </motion.div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C9A855] border border-[#C9A855]/20 rounded-full px-6 py-2 mb-10">
            <span className="w-2 h-2 rounded-full bg-[#C9A855] animate-pulse" />
            A+ Rated · Family Owned Since 2017
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-8 tracking-tight">
            East Atlanta&apos;s<br /><span className="text-[#C9A855] font-semibold">Trusted Roofing</span><br />Family
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }} className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
            Premium roofing, siding, gutters, and exterior construction. Done right the first time — backed by three generations.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={PHONE_HREF} className="group inline-flex items-center gap-3 bg-[#C9A855] text-[#0B1426] font-semibold text-lg px-10 py-4 rounded-xl hover:bg-[#E8D5A3] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(201,168,85,0.3)]">
              Call {PHONE}
            </a>
            <a href="#contact" className="text-white/60 hover:text-[#C9A855] font-medium text-lg px-8 py-4 rounded-xl border border-white/10 hover:border-[#C9A855]/40 transition-all duration-300">Free Estimate →</a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#C9A855]/50">
          <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-1">
            <motion.div className="w-1 h-2 bg-current rounded-full" animate={{ y: [0, 14, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} />
          </div>
        </motion.div>
      </section>
{/* SECTIONS */}
      <section ref={statsRef} className="py-24 bg-[#0B1426] relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 500, label: 'Projects Done' },
              { value: 350, label: 'Roof Installations' },
              { value: 8, label: 'Years in Business' },
              { value: 12, label: 'Team Members' },
            ].map((s, i) => (
              <div key={i} className="stat-item">
                <div className="stat-num text-[#C9A855] font-light text-5xl md:text-6xl lg:text-7xl" data-value={s.value}>0</div>
                <div className="text-xs text-white/40 mt-3 uppercase tracking-[0.25em]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={servicesRef} className="relative overflow-hidden" style={{ minHeight: '100vh' }}>
        <div className="hs-inner flex gap-6 px-[10vw] items-center h-screen w-max">
          <div className="flex-shrink-0 w-[30vw] min-w-[320px] pr-8">
            <div className="text-xs uppercase tracking-[0.3em] text-[#C9A855] mb-4">Services</div>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-4">More Than<br />Just Roofing</h2>
            <p className="text-white/40 text-sm">Scroll to explore →</p>
          </div>
          {services.map((s) => (
            <div key={s.num} className="flex-shrink-0 w-[28vw] min-w-[300px] h-[50vh] bg-[#0f1a2e] rounded-2xl border border-[#C9A855]/10 p-8 flex flex-col justify-between hover:border-[#C9A855]/30 transition-all duration-500 group">
              <div>
                <div className="text-[#C9A855]/30 text-6xl font-light mb-6 group-hover:text-[#C9A855]/60 transition-colors duration-500">{s.num}</div>
                <h3 className="text-2xl font-light mb-3">{s.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
              </div>
              <a href="#contact" className="text-[#C9A855] text-sm font-medium hover:text-[#E8D5A3] transition-colors">Learn more →</a>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24" id="reviews">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="reveal text-xs uppercase tracking-[0.3em] text-[#C9A855] mb-4">Testimonials</div>
            <h2 className="reveal text-4xl md:text-5xl font-light mb-4"><span className="text-[#C9A855]">★★★★★</span></h2>
            <p className="reveal text-white/40 text-sm">Excellent — Based on 13+ Google Reviews</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="review-card bg-[#0f1a2e] border border-[#C9A855]/10 rounded-2xl p-6 hover:border-[#C9A855]/25 transition-all duration-500">
                <div className="text-[#C9A855] text-sm mb-3 tracking-widest">★★★★★</div>
                <p className="text-white/60 text-sm leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
                <p className="text-[#C9A855]/70 text-xs font-medium">— {r.name} · Google Review</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* PART3 */}
      <section className="py-24" id="areas">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="reveal text-xs uppercase tracking-[0.3em] text-[#C9A855] mb-4">Service Area</div>
          <h2 className="reveal text-4xl md:text-5xl font-light mb-4">Serving Metro East Atlanta</h2>
          <p className="reveal text-white/40 mb-12 text-sm">Four counties. One family. Zero compromises.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((a) => (
              <div key={a} className="reveal inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0f1a2e] border border-[#C9A855]/10 hover:border-[#C9A855]/30 transition-all duration-300 hover:-translate-y-1 cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A855]" />
                <span className="text-white/60 text-sm">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={aboutRef} className="py-24" id="about">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="about-r text-xs uppercase tracking-[0.3em] text-[#C9A855] mb-4">Who We Are</div>
            <h2 className="about-r text-4xl md:text-5xl font-light mb-6">Family-Owned.<br />Built on Trust.</h2>
            <p className="about-r text-white/40 leading-relaxed mb-4">
              Started by Joe Reeves in 2017, Mr. Roofing is built on a foundation of hard work, professionalism, and quality that comes from the heart.
            </p>
            <p className="about-r text-white/40 leading-relaxed">
              Day-to-day operations are run by his sons Matt and Justin Reeves — the same family you talk to is the family that shows up on your roof.
            </p>
          </div>
          <div className="about-r bg-[#0f1a2e] border border-[#C9A855]/10 rounded-2xl p-8 space-y-6">
            {[
              { icon: '🛡️', title: 'Guaranteed Results', desc: 'Extended warranties on every job.' },
              { icon: '💧', title: 'Premium Materials', desc: 'Advanced sealants and durable shingles.' },
              { icon: '⚡', title: 'Energy Efficient', desc: 'Proper sealing cuts heating and cooling costs.' },
            ].map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#C9A855]/10 flex items-center justify-center text-xl flex-shrink-0">{f.icon}</div>
                <div>
                  <h4 className="text-white/80 font-medium text-sm mb-0.5">{f.title}</h4>
                  <p className="text-white/40 text-xs">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden" id="contact">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#C9A855 1px, transparent 1px), linear-gradient(90deg, #C9A855 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="reveal text-xs uppercase tracking-[0.3em] text-[#C9A855] mb-4">Get Started</div>
          <h2 className="reveal text-4xl md:text-6xl font-light mb-6">Free Estimate.<br /><span className="text-[#C9A855]">No Obligation.</span></h2>
          <p className="reveal text-white/40 mb-10 text-lg">We&apos;ll get back to you within 24 hours.</p>
          <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href={PHONE_HREF} className="inline-flex items-center gap-3 bg-[#C9A855] text-[#0B1426] font-semibold text-lg px-10 py-4 rounded-xl hover:bg-[#E8D5A3] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(201,168,85,0.3)]">
              Call {PHONE}
            </a>
          </div>
          <p className="reveal text-white/30 text-xs">{ADDRESS} · 24/7 Emergency Support</p>
        </div>
      </section>

      <footer className="py-10 border-t border-[#C9A855]/5">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© 2024 Mr. Roofing and Construction, LLC. All rights reserved.</p>
          <div className="flex items-center gap-6 text-white/30 text-xs">
            <span className="hover:text-[#C9A855] transition-colors cursor-pointer">Facebook</span>
            <span className="hover:text-[#C9A855] transition-colors cursor-pointer">Instagram</span>
            <span className="hover:text-[#C9A855] transition-colors cursor-pointer">YouTube</span>
          </div>
        </div>
      </footer>
    </div>
  );
}



