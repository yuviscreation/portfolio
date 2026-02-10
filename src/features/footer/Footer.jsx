import { Github, Instagram, Linkedin, Dribbble } from "lucide-react";
import { memo } from "react";
import { SOCIAL_ICONS } from "../hero/hero-data";

/**
 * Footer Component
 * Displays the site logo, navigation links, social media icons, and credits.
 * Memoized to prevent unnecessary re-renders.
 */
function Footer() {
  return (
    <footer
      className="bg-black text-gray-400 py-10"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Section - Branding & Navigation */}
        <div className="space-y-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <h2 className="text-md md:text-2xl font-light tracking-tight leading-tight">
              Yuvraj Chaurasia
            </h2>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex gap-6 text-sm flex-wrap">
              <li>
                <a
                  href="/#"
                  className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-gray-500 mt-2">© 2025</p>
        </div>

        {/* Right Section - Social Media & Credits */}
        <div className="flex flex-col justify-between items-end w-full md:w-auto gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-5 text-white text-lg">
            {(() => {
              const map = Object.fromEntries(
                SOCIAL_ICONS.map((s) => [s.alt.toLowerCase(), s.url])
              );
              return (
                <>
                  <a
                    href={map.linkedin || "#"}
                    target={map.linkedin ? "_blank" : undefined}
                    rel={map.linkedin ? "noopener noreferrer" : undefined}
                    aria-label="LinkedIn"
                    className="hover:text-gray-400 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                  >
                    <Linkedin size={20} aria-hidden="true" />
                  </a>
                  <a
                    href={map.instagram || "#"}
                    target={map.instagram ? "_blank" : undefined}
                    rel={map.instagram ? "noopener noreferrer" : undefined}
                    aria-label="Instagram"
                    className="hover:text-gray-400 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                  >
                    <Instagram size={20} aria-hidden="true" />
                  </a>
                  <a
                    href={map.github || "#"}
                    target={map.github ? "_blank" : undefined}
                    rel={map.github ? "noopener noreferrer" : undefined}
                    aria-label="GitHub"
                    className="hover:text-gray-400 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                  >
                    <Github size={20} aria-hidden="true" />
                  </a>
                  <a
                    href={map.dribbble || "#"}
                    target={map.dribbble ? "_blank" : undefined}
                    rel={map.dribbble ? "noopener noreferrer" : undefined}
                    aria-label="Dribbble"
                    className="hover:text-gray-400 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                  >
                    <Dribbble size={20} aria-hidden="true" />
                  </a>
                </>
              );
            })()}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
