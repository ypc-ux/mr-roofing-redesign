'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PHONE = '(470) 706-9339';
const PHONE_HREF = 'tel:+14707069339';

const services = [
  { icon: '🏠', title: 'Asphalt Roofing', desc: 'Premium shingle installation built to last decades.' },
  { icon: '🔧', title: 'Roof Repairs', desc: 'Stop leaks fast. 24/7 emergency service available.' },
  { icon: '🏘️', title: 'Siding', desc: 'New installs, repairs, and pressure washing.' },
  { icon: '🔩', title: 'Soffits & Gutters', desc: 'Water damage protection that lasts.' },
  { icon: '🎨', title: 'Painting', desc: 'Interior and exterior. Done right the first time.' },
  { icon: '⚡', title: 'Storm Damage', desc: 'Insurance claims handled. Free drone inspection.' },
];

const reviews = [
  { name: 'Jared L.', text: '10/10 the best roofers in town. Professional and fast.' },
  { name: 'Wendy M.', text: 'Matt was very kind and helpful. Will definitely use again.' },
  { name: 'Darran S.', text: 'Very professional, responsive, on time. Awesome work!' },
  { name: 'Taylor B.', text: 'Free drone inspection, fast and friendly. Loved working with Matt.' },
  { name: 'Jacob H.', text: 'Donated roofing materials to hurricane victims. Great people.' },
  { name: 'Kaitlynn C.', text: 'Painless process. Highly recommend to anyone in the area.' },
];

const areas = ['Conyers', 'Covington', 'Loganville', 'Snellville', 'Monroe', 'Lawrenceville', 'Oxford', 'Social Circle', 'Grayson'];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (heroRef.current) {
      gsap.to('.hero-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true },
      });
    }
  }, []);

  return (
    <main className="min-h-screen w-full">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/90 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-xl uppercase tracking-wider">
            Mr. <span className="text-[#f59e0b]">Roofing</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
            <a href="#areas" className="hover:text-white transition-colors">Areas</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a href={PHONE_HREF} className="btn-primary text-sm py-2 px-4">{PHONE}</a>
        </div>
      </nav>

      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="hero-bg absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#0f0f0f] to-[#0f0f0f]" />
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <svg viewBox="0 0 200 100" className="w-96 h-96" fill="none" stroke="#f59e0b" strokeWidth="0.5">
            <path d="M20 60 L60 25 L100 60 L140 25 L180 60" />
            <path d="M30 60 L30 85 L170 85 L170 60" />
          </svg>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="section-label">
            A+ Rated · Family Owned Since 2017
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            East Atlanta&apos;s
            <br />
            <span className="text-[#f59e0b]">#1 Roofing Team</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-10">
            Roofing, siding, gutters, and more. Done right the first time, backed by a family that stands behind every job.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={PHONE_HREF} className="btn-primary animate-pulse-ring">Call {PHONE}</a>
            <a href="#contact" className="btn-secondary">Free Estimate</a>
          </motion.div>
        </div>
      </section>
{/* PART2 */}
      <section className="py-20 bg-[#1a1a1a]" ref={statsRef}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 500, suffix: '+', label: 'Projects Done' },
              { value: 350, suffix: '+', label: 'Roof Installations' },
              { value: 8, suffix: '', label: 'Years in Business' },
              { value: 12, suffix: '', label: 'Team Members' },
            ].map((s, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="stat-number" data-value={s.value}>{s.value}</div>
                <div className="text-sm text-neutral-500 mt-2 uppercase tracking-wider">{s.suffix} {s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-label reveal">What We Do</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">More Than Just Roofing</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">Full exterior construction services from a team you can trust.</p>
          </div>
          <div className="h-scroll">
            {services.map((s, i) => (
              <div key={i} className="h-scroll-item card p-8 w-72 md:w-80" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="text-5xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{s.desc}</p>
                <a href="#contact" className="text-[#f59e0b] text-sm font-medium mt-4 inline-block hover:underline">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      <section className="py-24" id="reviews">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-label reveal">Real Reviews</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="stars">★★★★★</span>
            </h2>
            <p className="text-neutral-400">Excellent — Based on 13+ Google Reviews</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="testimonial-card reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="stars mb-3">★★★★★</div>
                <p className="text-neutral-300 text-sm mb-4 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                <p className="text-[#f59e0b] font-semibold text-sm">— {r.name}</p>
                <p className="text-neutral-600 text-xs mt-1">Posted on Google</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* PART3 */}
      <section className="py-24" id="areas">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="section-label reveal">Where We Work</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Serving Metro East Atlanta</h2>
          <p className="text-neutral-400 mb-12">Four counties. One team. Zero compromises.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((a, i) => (
              <div key={i} className="area-pin reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                <span className="pin-dot" />
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      <section className="py-24" id="about">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="section-label">Who We Are</div>
              <h2 className="text-4xl font-bold mb-6">Family-Owned.<br />Built on Trust.</h2>
              <p className="text-neutral-400 leading-relaxed mb-4">
                Started by Joe Reeves in 2017, Mr. Roofing is built on a foundation of hard work,
                professionalism, and quality that comes from the heart.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Day-to-day operations are run by his sons Matt and Justin Reeves —
                the same family you talk to is the family that shows up on your roof.
              </p>
            </div>
            <div className="reveal" style={{ transitionDelay: '200ms' }}>
              <div className="card p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f59e0b]/20 flex items-center justify-center text-2xl flex-shrink-0">🛡️</div>
                  <div>
                    <h4 className="font-semibold mb-1">Guaranteed Results</h4>
                    <p className="text-neutral-400 text-sm">Extended warranties on every job.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f59e0b]/20 flex items-center justify-center text-2xl flex-shrink-0">💧</div>
                  <div>
                    <h4 className="font-semibold mb-1">Waterproof Materials</h4>
                    <p className="text-neutral-400 text-sm">Premium shingles and advanced sealants.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f59e0b]/20 flex items-center justify-center text-2xl flex-shrink-0">⚡</div>
                  <div>
                    <h4 className="font-semibold mb-1">Energy Efficient</h4>
                    <p className="text-neutral-400 text-sm">Proper sealing reduces heating and cooling costs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32" id="contact">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="section-label reveal">Get Started</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Free Estimate.<br />
            <span className="text-[#f59e0b]">No Obligation.</span>
          </h2>
          <p className="text-xl text-neutral-400 mb-10">
            Call now or fill out the form. We&apos;ll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href={PHONE_HREF} className="btn-primary animate-pulse-ring">Call {PHONE}</a>
          </div>
          <p className="text-neutral-500 text-sm">
            24/7 Emergency Support · 1343 Business Center Dr. #B, Conyers, GA 30094
          </p>
        </div>
      </section>

      <footer className="py-12 border-t border-neutral-800">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">© 2024 Mr. Roofing and Construction, LLC. All rights reserved.</p>
          <div className="flex items-center gap-4 text-neutral-600 text-sm">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>YouTube</span>
          </div>
        </div>
      </footer>
    </main>
  );
}


