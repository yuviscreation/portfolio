"use client";

import React, { useEffect, useRef } from 'react';

/**
 * InView - Intersection Observer wrapper that triggers a fade-up animation
 * when the element scrolls into the viewport.
 *
 * Applies CSS class `animate-fade-up` (defined in globals.css) on first intersection.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className='']
 * @param {number} [props.threshold=0.12] - IntersectionObserver threshold
 */
export default function InView({ children, className = '', threshold = 0.12 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // remove any forced opacity-0 so animation can drive opacity
            el.classList.remove('opacity-0');
            el.classList.add('animate-fade-up');
            obs.unobserve(el);
          }
        });
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={`${className} opacity-0`}>
      {children}
    </div>
  );
}
