import { useEffect, useRef } from 'react';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { getTagIcon } from '@/src/shared/constants/tag-icons';

/**
 * ProjectCard - Reusable card for work experience / project entries.
 * Extracted from FeaturedProjects for reuse and separation of concerns.
 *
 * Uses IntersectionObserver for scroll-triggered fade-up animation.
 */
export default function ProjectCard({ p }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('animate-fade-up');
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="group">
      <BackgroundGradient containerClassName="w-full rounded-lg">
        <article className={`rounded-lg overflow-hidden relative bg-[#0b0b0d] ${p.id === 1 ? 'p-10 min-h-[420px]' : 'p-6'}`}>
          <div className="flex items-start gap-4">
            {p.company && p.company.toLowerCase().includes('shipskart') && (
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-[#071018] ring-1 ring-white/5 flex items-center justify-center">
                  <img src="/images/social/shipskart.png" alt="Shipskart" className="w-10 h-10 rounded-full object-contain" />
                </div>
              </div>
            )}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white">{p.title}</h3>
              <a href="#" className="text-teal-400 font-medium block mt-1">{p.company}</a>
              <div className="text-sm text-gray-400 mt-2">{p.date} · {p.location}</div>

              <p className="text-gray-300 mt-4">{p.description}</p>

              <ul className="mt-6 space-y-3">
                {p.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-200">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 flex-shrink-0">
                      <circle cx="12" cy="12" r="9" fill="#10B981" />
                      <path d="M9.5 12.5L11.5 14.5L15.5 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 mt-6">
                {p.tags.map((t) => {
                  const icon = getTagIcon(t);
                  return (
                    <span key={t} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 text-sm text-gray-200 border border-white/5">
                      {icon ? (
                        <img src={icon} alt={t} className="w-4 h-4 rounded-full object-contain" />
                      ) : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                          <circle cx="12" cy="12" r="10" fill="#0b0b0d" stroke="#ffffff22" />
                          <path d="M7 12l3 3 7-7" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                      <span>{t}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </article>
      </BackgroundGradient>

      {/* Mobile: small date/timeline indicator below card */}
      <div className="md:hidden mt-4 flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-purple-500 animate-blink" />
        <div className="text-sm text-gray-400">{p.date}</div>
      </div>
    </div>
  );
}
