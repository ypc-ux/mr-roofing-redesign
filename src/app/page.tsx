'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const PHONE = '(470) 706-9339';
const PHONE_HREF = 'tel:+14707069339';
const ADDRESS = '1343 Business Center Dr. #B, Conyers, GA 30094';

const services = [
  { num: '01', title: 'Asphalt Roofing', desc: 'Premium shingle installation built to last decades.', img: '/images/service-1.jpg' },
  { num: '02', title: 'Roof Repairs', desc: 'Stop leaks fast. 24/7 emergency service.', img: '/images/roofing-work.jpg' },
  { num: '03', title: 'Siding', desc: 'New installs, repairs, and pressure washing.', img: '/images/service-2.jpg' },
  { num: '04', title: 'Soffits & Gutters', desc: 'Water damage protection that lasts.', img: '/images/service-3.jpg' },
  { num: '05', title: 'Painting', desc: 'Interior and exterior. Done right the first time.', img: '/images/service-4.jpg' },
  { num: '06', title: 'Storm Damage', desc: 'Insurance claims. Free drone inspection.', img: '/images/service-5.jpg' },
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

    document.querySelectorAll('.spotlight-card').forEach((el) => {
      const card = el as HTMLElement;
      card.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        card.style.setProperty('--my', `${e.clientY - rect.top}px`);
      });
    });

    return () => { lenis.destroy(); ScrollTrigger.getAll().forEach((st) => st.kill()); };
  }, []);

  return (
    <div className="bg-[#0B1426] text-white min-h-screen w-full overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-[#0693e3]/10 z-[999]">
        <motion.div className="h-full bg-[#0693e3] origin-left" style={{ scaleX: scrollYProgress }} />
      </div>
{/* NAV_HERO */}
      <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Mr. Roofing" width={40} height={40} className="h-10 w-auto" />
            <div className="font-semibold text-lg uppercase tracking-[0.2em] hidden sm:block">Mr. <span className="text-[#0693e3]">Roofing</span></div>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm text-white/60">
            <a href="#services" className="hover:text-[#0693e3] transition-colors">Services</a>
            <a href="#reviews" className="hover:text-[#0693e3] transition-colors">Reviews</a>
            <a href="#areas" className="hover:text-[#0693e3] transition-colors">Areas</a>
            <a href="#about" className="hover:text-[#0693e3] transition-colors">About</a>
          </div>
          <a href={PHONE_HREF} className="text-sm font-semibold text-[#0693e3] border border-[#0693e3]/30 hover:border-[#0693e3] rounded-lg px-5 py-2.5 transition-all">{PHONE}</a>
        </div>
      </nav>

      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="hero-bg absolute inset-0" style={{ opacity: heroOpacity, y: heroY }}>
          <Image
            src="/images/hero-bg.jpg"
            alt="Mr. Roofing hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1426]/90 via-[#0B1426]/80 to-[#1a2332]/90" />
          <div className="mesh-bg" />
          <div className="grid-bg" />
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="geo-shape geo-1" />
          <div className="geo-shape geo-2" />
          <div className="geo-shape geo-3" />
        </motion.div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#0693e3] border border-[#0693e3]/20 rounded-full px-6 py-2 mb-10">
            <span className="w-2 h-2 rounded-full bg-[#0693e3] animate-pulse" />
            A+ Rated · Family Owned Since 2017
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-8 tracking-tight">
            East Atlanta&apos;s<br /><span className="gradient-text font-semibold">Trusted Roofing</span><br />Family
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }} className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
            Your roof leaks. We fix it. Same family on the phone, same family on the roof. Done right the first time — or we come back and make it right, free.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8 }} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href={PHONE_HREF} className="group inline-flex items-center gap-4 bg-[#0693e3] text-white font-bold text-2xl md:text-3xl px-14 py-6 md:px-20 md:py-7 rounded-2xl hover:bg-[#003388] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_25px_80px_rgba(6,147,227,0.4)]">
              Call {PHONE}
            </a>
            <a href="#contact" className="text-white/70 hover:text-[#0693e3] font-semibold text-xl px-12 py-6 rounded-2xl border-2 border-white/20 hover:border-[#0693e3]/50 transition-all duration-300 hover:scale-[1.03]">Free Estimate →</a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="flex items-center justify-center gap-6 mt-12 flex-wrap">
            <Image src="/images/bbb-badge.png" alt="BBB Accredited" width={120} height={36} className="h-auto opacity-50" />
            <span className="text-white/40 text-xs uppercase tracking-widest">GAF Certified</span>
            <span className="text-white/40 text-xs uppercase tracking-widest">Owens Corning</span>
            <span className="text-white/40 text-xs uppercase tracking-widest">CertainTeed</span>
            <span className="text-white/40 text-xs uppercase tracking-widest">Atlas Roofing</span>
          </motion.div>

          {/* Brand marquee */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-12">
            <div className="marquee">
              <div className="marquee-inner">
                {['GAF Materials', 'Owens Corning', 'CertainTeed', 'Atlas Roofing', 'GAF Materials', 'Owens Corning', 'CertainTeed', 'Atlas Roofing'].map((brand, i) => (
                  <span key={i} className="text-white/15 text-lg font-light uppercase tracking-widest">{brand}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#0693e3]/50">
          <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-1">
            <motion.div className="w-1 h-2 bg-current rounded-full" animate={{ y: [0, 14, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} />
          </div>
        </motion.div>
      </section>
{/* SECTIONS */}
      <section ref={statsRef} className="py-24 bg-[#0B1426] relative">
        <div className="mesh-bg" />
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 500, label: 'Projects Done' },
              { value: 350, label: 'Roof Installations' },
              { value: 8, label: 'Years in Business' },
              { value: 12, label: 'Team Members' },
            ].map((s, i) => (
              <div key={i} className="stat-item">
                <div className="stat-num text-[#0693e3] font-light text-5xl md:text-6xl lg:text-7xl" data-value={s.value}>0</div>
                <div className="text-xs text-white/40 mt-3 uppercase tracking-[0.25em]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={servicesRef} className="relative overflow-hidden" style={{ minHeight: '100vh' }}>
        <div className="mesh-bg" />
        <div className="grid-bg" />
        <div className="hs-inner flex gap-6 px-[10vw] items-center h-screen w-max">
          <div className="flex-shrink-0 w-[30vw] min-w-[320px] pr-8">
            <div className="text-xs uppercase tracking-[0.3em] text-[#0693e3] mb-4">Services</div>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-4">Roofing Is<br />Just the Start</h2>
            <p className="text-white/40 text-sm">Most roofing companies stop at the roof. We don&apos;t. Scroll to see →</p>
          </div>
          {services.map((s) => (
            <div key={s.num} className="spotlight-card flex-shrink-0 w-[28vw] min-w-[300px] bg-[#0f1a2e] rounded-2xl border border-[#0693e3]/10 overflow-hidden hover:border-[#0693e3]/30 transition-all duration-500 group" style={{ cursor: 'default' }}>
              <div className="relative h-48 overflow-hidden">
                <Image src={s.img} alt={s.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a2e] to-transparent opacity-60" />
                <div className="absolute bottom-3 left-4 text-[#0693e3]/60 text-3xl font-light">{s.num}</div>
              </div>
              <div className="p-6 flex flex-col justify-between h-[calc(50vh-12rem)] min-h-[180px]">
                <div>
                  <h3 className="text-2xl font-light mb-2">{s.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
                </div>
                <a href="#contact" className="text-[#0693e3] text-sm font-medium hover:text-[#8ed1fc] transition-colors">Learn more →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES CTA */}
      <section className="py-16 text-center">
        <a href="tel:+14707069339" className="reveal inline-flex items-center gap-4 bg-[#0693e3] text-white font-bold text-xl px-14 py-5 rounded-2xl hover:bg-[#003388] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_20px_60px_rgba(6,147,227,0.35)]">
          Get Your Free Quote →
        </a>
      </section>

      <section className="py-24" id="reviews">
        <div className="mesh-bg" />
        <div className="mesh-bg" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="reveal text-xs uppercase tracking-[0.3em] text-[#0693e3] mb-4">Testimonials</div>
            <h2 className="reveal text-4xl md:text-5xl font-light mb-4"><span className="text-[#0693e3]">★★★★★</span></h2>
            <p className="reveal text-white/40 text-sm">Excellent — Based on 13+ Google Reviews</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="review-card bg-[#0f1a2e] border border-[#0693e3]/10 rounded-2xl p-6 hover:border-[#0693e3]/25 transition-all duration-500">
                <div className="text-[#0693e3] text-sm mb-3 tracking-widest">★★★★★</div>
                <p className="text-white/60 text-sm leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
                <p className="text-[#0693e3]/70 text-xs font-medium">— {r.name} · Google Review</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* MID-PAGE CTA — between reviews and areas */}
      <section className="py-16 bg-[#0693e3]/10 border-y border-[#0693e3]/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="reveal text-2xl md:text-3xl font-light mb-6">Need a roof repair? Don&apos;t wait.</h3>
          <a href="tel:+14707069339" className="reveal inline-flex items-center gap-4 bg-[#0693e3] text-white font-bold text-xl md:text-2xl px-12 py-5 md:px-16 md:py-6 rounded-2xl hover:bg-[#003388] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_20px_60px_rgba(6,147,227,0.35)]">
            Call (470) 706-9339
          </a>
          <p className="reveal text-white/30 text-xs mt-4">24/7 Emergency · Free Drone Inspection</p>
        </div>
      </section>
{/* PART3 */}
      <section className="py-24" id="areas">
        <div className="mesh-bg" />
        <div className="mesh-bg" />
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="reveal text-xs uppercase tracking-[0.3em] text-[#0693e3] mb-4">Service Area</div>
          <h2 className="reveal text-4xl md:text-5xl font-light mb-4">Serving Metro East Atlanta</h2>
          <p className="reveal text-white/40 mb-12 text-sm">Four counties. One family. Zero compromises.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((a) => (
              <div key={a} className="reveal inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0f1a2e] border border-[#0693e3]/10 hover:border-[#0693e3]/30 transition-all duration-300 hover:-translate-y-1 cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0693e3]" />
                <span className="text-white/60 text-sm">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={aboutRef} className="py-24" id="about">
        <div className="mesh-bg" />
        <div className="mesh-bg" />
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="about-r text-xs uppercase tracking-[0.3em] text-[#0693e3] mb-4">Who We Are</div>
            <h2 className="about-r text-4xl md:text-5xl font-light mb-6">The Guy on Your<br />Roof Is the<br />Owner&apos;s Son</h2>
            <p className="about-r text-white/40 leading-relaxed mb-4">
              Joe Reeves started this company in 2017 with a truck and a ladder. No investors. No franchise. Just a family that does good work.
            </p>
            <p className="about-r text-white/40 leading-relaxed mb-6">
              Today, his sons Matt and Justin run every job personally. When you call, you talk to them. When they show up, it&apos;s their name on the truck. That accountability is the whole business model.
            </p>
            <div className="about-r flex items-center gap-4">
              <Image src="/images/bbb-badge.png" alt="BBB Accredited Business" width={200} height={60} className="h-auto w-auto opacity-70" />
            </div>
          </div>
          <div className="about-r relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#0693e3]/20">
              <Image src="/images/team-photo.jpg" alt="The Mr. Roofing team" width={480} height={640} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1426]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white/80 text-sm font-medium">The Reeves Family — Mr. Roofing & Construction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden" id="contact">
        <div className="mesh-bg" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#0693e3 1px, transparent 1px), linear-gradient(90deg, #0693e3 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="reveal text-xs uppercase tracking-[0.3em] text-[#0693e3] mb-4">Get Started</div>
          <h2 className="reveal text-4xl md:text-6xl font-light mb-6">Free Estimate.<br /><span className="text-[#0693e3]">No Obligation.</span></h2>
          <p className="reveal text-white/40 mb-10 text-lg">We&apos;ll get back to you within 24 hours.</p>
          <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a href={PHONE_HREF} className="inline-flex items-center gap-4 bg-[#0693e3] text-white font-bold text-2xl md:text-3xl px-14 py-6 md:px-20 md:py-7 rounded-2xl hover:bg-[#003388] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_25px_80px_rgba(6,147,227,0.4)]">
              Call {PHONE}
            </a>
          </div>
          <p className="reveal text-white/30 text-xs mb-4">{ADDRESS} · 24/7 Emergency Support</p>
          <div className="reveal flex items-center justify-center gap-6 flex-wrap">
            <span className="text-white/30 text-xs uppercase tracking-widest">GAF Certified</span>
            <span className="text-white/30 text-xs uppercase tracking-widest">Owens Corning</span>
            <span className="text-white/30 text-xs uppercase tracking-widest">CertainTeed</span>
            <span className="text-white/30 text-xs uppercase tracking-widest">Atlas Roofing</span>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-[#0693e3]/5">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© 2024 Mr. Roofing and Construction, LLC. All rights reserved.</p>
          <div className="flex items-center gap-6 text-white/30 text-xs">
            <span className="hover:text-[#0693e3] transition-colors cursor-pointer">Facebook</span>
            <span className="hover:text-[#0693e3] transition-colors cursor-pointer">Instagram</span>
            <span className="hover:text-[#0693e3] transition-colors cursor-pointer">YouTube</span>
          </div>
        </div>
      </footer>
    </div>
  );
}



