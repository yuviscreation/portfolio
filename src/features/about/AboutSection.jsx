import Image from 'next/image';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import InView from '@/src/shared/components/InView';
import { ABOUT_SKILLS } from './about-data';

/**
 * AboutSection - "About Me" block with image and skill tags.
 * Data extracted to about-data.js for maintainability.
 */
export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-black py-16 px-6 relative z-10 md:mb-[400px]">
      <InView>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-4">
          About Me
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-teal-400 text-center mb-12">
          Passionate Developer Building Digital Experiences
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Image Box with Rim Glow */}
          <BackgroundGradient containerClassName="w-full rounded-lg">
            <div className="rounded-lg overflow-hidden bg-[#0b0b0d] relative">
              <Image
                src="/images/about.jpeg"
                alt="Yuvraj Chaurasia"
                width={500}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
                priority
              />
            </div>
          </BackgroundGradient>

          {/* Right: Text Content */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              With over 5 years of experience in web and mobile development, I specialize in creating scalable, performant applications that users love. My expertise spans across modern frameworks and best practices in software engineering.
            </p>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">My Skills</h3>
              <div className="flex flex-wrap gap-3">
                {ABOUT_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-gray-200 backdrop-blur-sm hover:bg-white/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-gray-400 text-base">
              Let's collaborate and turn your ideas into reality with cutting-edge design and development.
            </p>
          </div>
        </div>
      </div>
      </InView>
    </section>
  );
}
