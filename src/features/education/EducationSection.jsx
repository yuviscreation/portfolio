import React, { useRef } from 'react';
import InView from '@/src/shared/components/InView';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import TimelineProgress from '@/components/ui/timeline-progress';
import { SCHOOLS, getInitials } from './education-data';
import Image from 'next/image';
import { getTagIcon } from '@/src/shared/constants/tag-icons';
import { GraduationCap, Award } from 'lucide-react';

/**
 * EducationSection - Timeline of educational background.
 * Data and getInitials utility extracted to education-data.js.
 */
export default function EducationSection() {
  const sectionRef = useRef(null);

  const LUCIDE_ICON_MAP = {
    graduation: GraduationCap,
    award: Award,
  };

  return (
    <section id="education" className="w-full bg-black py-16 px-6 relative z-10">
      <div ref={sectionRef} className="max-w-6xl mx-auto md:mb-[300px] relative">
        <InView>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 md:mt-40">Education</h2>

          {/* Timeline overlay on left for desktop - starts below the heading */}
          <div className="hidden md:block absolute md:top-40 md:bottom-0 left-0 w-[30%]">
            <TimelineProgress trackRef={sectionRef} projectCount={SCHOOLS.length} />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-[30%_70%] gap-y-0">

            {SCHOOLS.map((s, i) => (
              <React.Fragment key={s.id}>
                <div className={`${i === 0 ? 'md:mt-[300px]' : ''} ${i < SCHOOLS.length - 1 ? 'md:mb-[500px]' : ''} hidden md:flex items-center justify-center`}>
                  <div className="border-2 border-purple-500 w-8 h-8 rounded-full flex items-center justify-center bg-transparent animate-blink" />
                </div>

                <div className={`${i === 0 ? 'md:mt-[300px]' : ''} ${i < SCHOOLS.length - 1 ? 'md:mb-[500px]' : ''}`}>
                  <BackgroundGradient containerClassName="w-full rounded-lg">
                    <article className="rounded-lg overflow-hidden relative bg-[#0b0b0d] p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 rounded-full bg-[#071018] ring-1 ring-white/5 flex items-center justify-center">
                            {s.icon ? (
                              (() => {
                                const local = getTagIcon(s.icon);
                                if (local) {
                                  return (
                                    <Image
                                      src={local}
                                      alt={s.institution}
                                      width={48}
                                      height={48}
                                      className="w-12 h-12 rounded-full object-cover"
                                    />
                                  );
                                }
                                const Icon = LUCIDE_ICON_MAP[s.icon];
                                return Icon ? <Icon className="w-12 h-12 text-white" /> : <span className="text-white font-semibold text-lg">{getInitials(s.institution)}</span>;
                              })()
                            ) : (
                              <span className="text-white font-semibold">{getInitials(s.institution)}</span>
                            )}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold text-white">{s.degree}</h3>
                          <div className="text-teal-400 font-medium mt-1">{s.institution}</div>
                          <div className="text-sm text-gray-400 mt-2">{s.date} · {s.location}</div>

                          <p className="text-gray-300 mt-4">{s.description}</p>

                          <ul className="mt-6 space-y-2">
                            {s.bullets.map((b, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-gray-200">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 flex-shrink-0">
                                  <circle cx="12" cy="12" r="6" fill="#10B981" />
                                </svg>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </article>
                  </BackgroundGradient>
                </div>
              </React.Fragment>
            ))}
          </div>
        </InView>
      </div>
    </section>
  );
}
