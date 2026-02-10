/**
 * @deprecated This file has been moved to src/features/hero/Hero.jsx.
 * It is kept here for reference only. All imports now use the new location.
 */
'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { SparklesCore } from '@/components/ui/sparkles';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';

/**
 * Hero component - landing page header + hero + featured projects
 *
 * Accessibility: 
 * - Semantic tags for header, nav, section
 * - ARIA roles for menus
 * - Keyboard navigable
 *
 * Performance:
 * - Image optimization via next/image
 * - useCallback for handlers to prevent unnecessary re-renders
 * - Responsive layout with Tailwind breakpoints
 */
export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);


  const closeMenuAndOpenForm = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const scrollToId = useCallback((id) => (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div id="home" className="bg-black text-white min-h-screen w-full relative overflow-hidden">
      {/* Sparkles background: sits above the black background but behind content */}
      <SparklesCore
        className="absolute inset-0 z-0 pointer-events-none"
        background="transparent"
        particleColor="#ffffff"
        particleDensity={60}
        minSize={0.8}
        maxSize={2.4}
        speed={3}
      />

      <div className="relative z-10">
      {/* ===== HEADER ===== */}
        </div>
      <header
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 
                   bg-white/10 backdrop-blur-md text-white px-6 md:px-8 py-3 
                   rounded-full shadow-lg flex items-center justify-between gap-6 
                   w-[90%] max-w-6xl"
      >
        {/* Logo */}
          <Link
            href="/"
            aria-label="Home"
            className="flex items-center"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white/10">
              <Image
                src="/images/social/my_logo.png"
                alt="Logo"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
          </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-lg text-gray-400" aria-label="Primary navigation">
          {['Home', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => {
            const id = item.toLowerCase();
            return (
              <Link
                key={item}
                href={`#${id}`}
                onClick={scrollToId(id)}
                className="hover:text-white transition"
              >
                {item}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={handleMenuToggle}
          className="md:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
        >
          <Menu className="w-6 h-6 text-white" aria-hidden="true" />
        </button>

        {/* CTA Desktop */}
        <Link
          href="#"
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-neutral-800 to-black 
                     px-6 py-3 border border-gray-700 rounded-full font-medium 
                     hover:opacity-90 transition text-sm"
        >
          Resume
        </Link>
      </header>

      {/* ===== MOBILE SIDEBAR MENU ===== */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={closeMenu}
            aria-hidden="true"
          />
          {/* Sidebar */}
          <aside
            className={`fixed top-0 left-0 h-full w-64 bg-black z-50 p-6 
                        transform transition-transform duration-300 ease-in-out 
                        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            role="dialog"
            aria-modal="true"
          >
            <div className='mt-5 flex justify-between'>
              {/* Close Button */}
              <Link
                href="/"
                aria-label="Home"
                className="flex items-center gap-2 font-semibold text-lg"
              >
                <h2 className="text-md md:text-2xl font-light tracking-tight leading-tight">
                  Welcome
                </h2>
              </Link>
              <button
                onClick={closeMenu}
                className=" text-white"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>

            </div>

            {/* Links */}
            <nav className="flex flex-col gap-6 mt-12" aria-label="Mobile navigation">
              {['Home', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    closeMenu();
                    scrollToId(item.toLowerCase())(e);
                  }}
                >
                  {item}
                </Link>
              ))}
              <button
                onClick={closeMenuAndOpenForm}
                className="bg-gradient-to-r from-neutral-800 to-black px-6 py-3 
                           border border-gray-700 rounded-full font-medium 
                           hover:opacity-90 transition text-sm w-fit"
              >
                Resume
              </button>
            </nav>
          </aside>
        </>
      )}

      {/* ===== HERO SECTION ===== */}
      <section className="pt-32 md:pt-[30vh] md:pb-[12vh] px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            {/* Text Column */}
            <div className="space-y-6 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 
                              rounded-full text-sm text-gray-300 backdrop-blur-md w-fit 
                              border border-white/10"
              >
                <span className="text-xs" aria-hidden="true">●</span>
                Full Stack Software Developer
              </div>

              <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-tight text-left">
                <TypewriterEffect
                  words={[
                    { text: "Yuvraj", className: "font-light text-white" },
                    { text: "Chaurasia", className: "font-semibold text-white" },
                  ]}
                  className="text-5xl md:text-6xl text-left"
                  cursorClassName="bg-white"
                />
              </h1>

              <p className="text-lg text-gray-400 max-w-xl text-left">
                I’m a versatile designer specializing in graphic, web, and product design
                to help grow your business. Let’s build something great!
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="#projects"
                  className="bg-white text-black px-6 py-3 border border-gray-700 
                             rounded-full font-medium hover:bg-gray-200 transition text-sm"
                >
                  See All Projects
                </Link>
                <button
                  onClick={scrollToId('contact')}
                  className="bg-gradient-to-r from-neutral-800 to-black px-6 py-3 
                             border border-gray-700 rounded-full font-medium 
                             hover:opacity-90 transition text-sm"
                >
                  Contact Now
                </button>
              </div>

              {/* Social icons row (save PNGs to public/images/social/) */}
              <div className="flex items-center gap-6 mt-6">
                {[
                  { src: '/images/social/github.png', alt: 'GitHub', url: 'https://github.com/yuvrajchaurasia' },
                  { src: '/images/social/instagram.png', alt: 'Instagram', url: 'https://www.instagram.com/yuvrajchaurasiaa/' },
                  { src: '/images/social/linkedin.png', alt: 'LinkedIn', url: 'https://www.linkedin.com/in/yuvraj-chaurasia/' },
                  { src: '/images/social/leetcode.png', alt: 'LeetCode', url: 'https://leetcode.com/u/yuvrajchaurasia/' }
                ].map(({ src, alt, url }) => (
                  <a key={src} href={url || '#'} className="block w-10 h-10" target={url ? '_blank' : undefined} rel={url ? 'noopener noreferrer' : undefined}>
                    <Image src={src} alt={alt} width={40} height={40} className="object-contain" />
                  </a>
                ))}
              </div>
            </div>

            {/* Profile image on the right (desktop only) */}
            <div className="hidden md:flex items-center justify-center flex-shrink-0">
              <div className="profile-ring">
                <Image
                  src="/images/yuvraj-chaurasia.png"
                  alt="Profile of Yuvraj Chaurasia"
                  width={420}
                  height={420}
                  className="object-cover w-56 h-56 md:w-80 md:h-80 border-8 border-white/90 shadow-2xl relative z-10"
                  priority={true}
                />
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* Projects moved to components/myprojects.jsx */}
    </div>
  );
}
