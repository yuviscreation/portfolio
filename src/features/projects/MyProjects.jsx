import React, { useRef } from 'react';
import InView from '@/src/shared/components/InView';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import TimelineProgress from '@/components/ui/timeline-progress';
import { getTagIcon } from '@/src/shared/constants/tag-icons';
import { PROJECTS } from './projects-data';

/**
 * MyProjects (Featured Projects) - Timeline of project portfolio.
 *
 * Refactored:
 * - Data extracted to projects-data.js
 * - TAG_ICON_MAP deduplicated to shared/constants/tag-icons.js
 */
export default function MyProjects() {
  const containerRef = useRef(null);

  return (
    <section id="projects" className="bg-black py-20 px-4">
      <InView>
        <div ref={containerRef} className="max-w-6xl mx-auto px-4 relative md:mb-[500px]">
          <h2 className="text-white text-4xl font-bold mb-12 md:mt-40 text-center md:text-left">Featured Projects</h2>

          {/* Timeline overlay: start below the heading on md+ screens */}
          <div className="hidden md:block absolute md:top-40 md:bottom-0 left-0 w-[30%]">
            <TimelineProgress trackRef={containerRef} projectCount={PROJECTS.length} />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-[30%_70%] gap-y-0 gap-x-8 w-full">
            {PROJECTS
              .filter((p) => p.span && p.span.includes('col-span-2'))
              .map((p, i, arr) => (
                <React.Fragment key={p.id}>
                  <div className={`${i === 0 ? 'md:mt-[300px]' : ''} ${i < arr.length - 1 ? 'md:mb-[500px]' : ''} hidden md:flex items-center justify-center relative`}>
                    <div className="absolute left-[47%] transform -translate-x-1/2">
                      <div className="border-2 border-purple-500 w-8 h-8 rounded-full flex items-center justify-center bg-transparent animate-blink" />
                    </div>
                  </div>

                  <div className={`${i === 0 ? 'md:mt-[300px]' : ''} ${i < arr.length - 1 ? 'md:mb-[500px]' : ''}`}>
                    <a href="#" className={`group relative w-full sm:w-11/12 lg:w-3/4 ${p.span}`}>
                      <BackgroundGradient containerClassName="w-full rounded-lg">
                        <article className={`rounded-lg overflow-hidden relative bg-[#0b0b0d] ${p.id === 1 ? 'p-10 min-h-[420px]' : 'p-6'}`}>
                          <div className="flex items-start gap-4">
                            <div className="flex-1">
                              <h3 className="text-2xl font-semibold text-white">{p.title}</h3>
                              <div className="text-teal-400 font-medium mt-1">{p.subtitle}</div>
                              <p className="text-gray-300 mt-4">{p.description}</p>

                              <ul className="mt-6 space-y-3">
                                {p.bullets.map((b, idx) => (
                                  <li key={idx} className="flex items-start gap-3 text-gray-200">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 flex-shrink-0">
                                      <circle cx="12" cy="12" r="9" fill="#10B981" />
                                      <path d="M9.5 12.5L11.5 14.5L15.5 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>{b}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="hidden sm:block flex-shrink-0 ml-4">
                              {p.image ? (
                                <img src={p.image} alt={p.title} className="w-36 h-24 md:w-44 md:h-28 lg:w-48 lg:h-32 object-contain rounded-md" />
                              ) : (
                                <div className="w-36 h-24 md:w-44 md:h-28 lg:w-48 lg:h-32 bg-gradient-to-br from-[#0b0b0d] to-[#111827] rounded-md" />
                              )}
                            </div>
                          </div>

                          {/* Tags / skill icons */}
                          <div className="flex flex-wrap gap-3 mt-6">
                            {(p.tags || []).map((t) => {
                              const icon = getTagIcon(t);
                              return (
                                <span key={t} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 text-sm text-gray-200 border border-white/5">
                                  {icon ? <img src={icon} alt={t} className="w-4 h-4 rounded-full object-contain" /> : (
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
                        </article>
                      </BackgroundGradient>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-lg transition-colors" />
                    </a>
                  </div>
                </React.Fragment>
              ))}
          </div>
        </div>
      </InView>
    </section>
  );
}
