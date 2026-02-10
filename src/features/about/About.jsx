import { memo } from "react";
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { PROFILE_TAGS, EXPERIENCES } from './about-data';

/**
 * About (Profile) Component
 * Displays personal profile information with a photo, bio, skill tags,
 * experience history, and a connect button.
 *
 * Data extracted to about-data.js for maintainability.
 * Memoized to prevent unnecessary re-renders.
 */
function About() {
  return (
    <section
      id="profile"
      className="bg-black text-white px-4 py-16"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-stretch">
        {/* Left Section - Profile Card */}
        <BackgroundGradient containerClassName="w-full lg:w-1/2 h-full">
          <article
            className="bg-[#0b0b0d] rounded-2xl p-6 shadow-lg h-full"
            aria-label="Profile Information"
          >
            <div className="relative w-full overflow-hidden rounded-xl">
              <img
                src="/images/about.jpeg"
                alt="Portrait of Yuvraj Chaurasia"
                className="rounded-xl w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <span
                className="absolute bottom-2 left-2 bg-black/70 px-3 py-1 text-xs rounded-full text-green-400"
                role="status"
                aria-live="polite"
              >
                ● Available for work
              </span>
            </div>

            <h2 id="about-heading" className="mt-6 text-2xl font-semibold">
              Hello, I am <span className="text-gray-300">Yuvraj Chaurasia</span>
            </h2>
            <p className="text-gray-400 mt-2">Full Stack Developer at Shipskart Marine Pvt Ltd, Noida, India.</p>

            {/* Connect Button */}
            <button
              className="mt-6 bg-gradient-to-r from-neutral-800 to-black px-6 py-3 border border-gray-700 rounded-full font-medium hover:opacity-90 transition"
              aria-haspopup="dialog"
              aria-controls="contact-form"
            >
              Connect with me
            </button>
          </article>
        </BackgroundGradient>

        {/* Right Section - Bio, Skills, Experience */}
        <BackgroundGradient containerClassName="w-full lg:w-1/2 h-full rounded-3xl">
          <article
            className="bg-[#0b0b0d] rounded-2xl p-6 shadow-lg h-full"
            aria-label="About Yuvraj Chaurasia"
          >
            <p className="mb-4 text-gray-300">
              I'm Yuvraj Chaurasia, a dedicated Web Designer & Developer based in the
              Noida city of Uttar Pradesh, India. I specialize in creative design
              with seamless technical execution to craft exceptional digital
              experiences.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-6" role="list">
              {PROFILE_TAGS.map((tag) => (
                <span
                  key={tag}
                  role="listitem"
                  className="bg-black/50 border border-white/10 text-white text-sm px-3 py-1 rounded-full backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Experience Table */}
            <div className="space-y-3 text-sm" role="table" aria-label="Work experience">
              {EXPERIENCES.map(([role, company, year]) => (
                <div
                  key={`${role}-${company}-${year}`}
                  role="row"
                  className="flex justify-between bg-black/50 border border-white/10 px-4 py-3 rounded-xl text-gray-300 backdrop-blur-md"
                >
                  <span role="cell">{role}</span>
                  <span role="cell">{company}</span>
                  <span role="cell">{year}</span>
                </div>
              ))}
            </div>
          </article>
        </BackgroundGradient>
      </div>
    </section>
  );
}

export default memo(About);
