import Image from 'next/image';
import { Spotlight } from '@/components/ui/spotlight-new';
import InView from '@/src/shared/components/InView';
import { SKILL_SECTIONS } from './skills-data';

/**
 * SkillsSection - Displays skill categories with icon grids.
 * Data extracted to skills-data.js for maintainability.
 */
export default function SkillsSection() {
  return (
    <section id="skills" className="spotlight-section mt-0 py-20 px-6 bg-black text-white relative z-10 md:mb-[400px]">
      <Spotlight
        gradientFirst={"radial-gradient(68% 68% at 55% 31%, rgba(124,58,237,0.12) 0, transparent 60%)"}
        gradientSecond={"radial-gradient(50% 50% at 50% 50%, rgba(6,182,212,0.08) 0, transparent 80%)"}
        gradientThird={"radial-gradient(50% 50% at 50% 50%, rgba(249,115,22,0.06) 0, transparent 80%)"}
        translateY={-320}
        width={720}
        height={1200}
        smallWidth={260}
        duration={9}
        xOffset={140}
      />
      <InView>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">Skills & Technologies</h2>
        <p className="text-sm text-teal-400 mb-10">Tools and technologies I work with</p>

        <div className="space-y-16">
          {SKILL_SECTIONS.map((sec) => (
            <div key={sec.title} className="">
              <h3 className="text-2xl md:text-3xl font-bold mb-[50px]">{sec.title}</h3>

              <div className="max-w-5xl mx-auto px-4 md:px-0">
                <div className="flex items-center md:justify-between gap-4 md:gap-8 overflow-x-auto md:overflow-visible py-2 -mx-4 px-4">
                  {sec.icons.map((icon) => (
                    <div key={icon.src} className="flex flex-col items-center gap-3 w-28 flex-shrink-0">
                      <div className="w-20 h-20 icon-bg rounded-lg flex items-center justify-center border border-white/8">
                        <Image src={icon.src} alt={icon.label} width={64} height={64} className="object-contain" />
                      </div>
                      <span className="text-sm md:text-base text-gray-300">{icon.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </InView>
    </section>
  );
}
