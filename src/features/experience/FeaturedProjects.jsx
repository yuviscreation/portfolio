import React from 'react';
import TimelineProgress from '@/components/ui/timeline-progress';
import EncryptedText from '@/components/ui/EncryptedText';
import ProjectCard from './ProjectCard';
import { EXPERIENCES } from './experience-data';

/**
 * FeaturedProjects (Work Experience) - Timeline of professional experience.
 *
 * Refactored:
 * - Data extracted to experience-data.js
 * - ProjectCard extracted to ProjectCard.jsx
 * - Removed unused imports (next, node:path, useState)
 * - TAG_ICON_MAP deduplicated to shared/constants/tag-icons.js
 */
export default function FeaturedProjects() {
  const projectsRef = React.useRef(null);
  const containerRef = React.useRef(null);

  return (
    <div className="w-full bg-black">
      <section ref={containerRef} className="max-w-6xl mx-auto px-6 py-16 md:mb-[500px] relative">
          <EncryptedText text="Work Experience" className="text-4xl sm:text-5xl font-extrabold text-white mb-8 md:mt-40" />
          <div ref={projectsRef} className="relative grid grid-cols-1 md:grid-cols-[30%_70%] gap-y-0">
            {/* Continuous timeline overlay on the left column (desktop) */}
            <div className="hidden md:block absolute md:top-40 md:bottom-0 left-0 w-[30%]">
              <TimelineProgress trackRef={containerRef} projectCount={EXPERIENCES.length} />
            </div>

          {/* Per-row: left cell (dot) + right cell (project card) */}
          {EXPERIENCES.map((p, i) => (
            <React.Fragment key={p.id}>
              <div className={`${p.id === 1 ? "md:mt-[300px]" : ""} ${i < EXPERIENCES.length - 1 ? "md:mb-[500px]" : ""} hidden md:flex items-center justify-center`}> 
                <div className="border-2 border-purple-500 w-8 h-8 rounded-full flex items-center justify-center bg-transparent animate-blink" />
              </div>
              <div className={`${p.id === 1 ? "md:mt-[300px]" : ""} ${i < EXPERIENCES.length - 1 ? "md:mb-[500px]" : ""}`}>
                <ProjectCard p={p} />
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
}
