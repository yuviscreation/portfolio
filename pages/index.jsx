// pages/index.js
import Head from "next/head";
// Feature-module imports via barrel files
import {
  Hero,
  AboutSection,
  SkillsSection,
  FeaturedProjects,
  EducationSection,
  MyProjects,
  About,
  ContactSection,
  Footer,
} from "@/src/features";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/images/social/my_logo.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/images/social/my_logo.png" />
        <link rel="shortcut icon" href="/images/social/my_logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/social/my_logo.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <title>
          React & Next.js Portfolio Template for Designers, Developers & Creatives
        </title>
        <meta name="description"
          content="A morden React & Next.js portfolio template for designers, developers, and creatives — built with Tailwind CSS for speed, modern design, and responsiveness." />
        <link rel="canonical" href="https://themixly.com/preview/2067/portfolio-react-nextjs-template" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Portfolio Template" />
        <meta property="og:title"
          content="React & Next.js Portfolio Template for Designers, Developers & Creatives" />
        <meta property="og:description"
          content="A morden React & Next.js portfolio template for designers, developers, and creatives — built with Tailwind CSS for speed, modern design, and responsiveness." />
        <meta property="og:url" content="https://themixly.com/preview/2067/portfolio-react-nextjs-template/" />
        <meta property="og:image" content="https://themixly.com/wp-content/uploads/2025/08/Artboard-2-3-scaled.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title"
          content="React & Next.js Portfolio Template for Designers, Developers & Creatives" />
        <meta name="twitter:description"
          content="A morden React & Next.js portfolio template for designers, developers, and creatives — built with Tailwind CSS for speed, modern design, and responsiveness." />
        <meta name="twitter:url" content="https://themixly.com/preview/2067/portfolio-react-nextjs-template/" />
        <meta name="twitter:image" content="https://themixly.com/wp-content/uploads/2025/08/Artboard-2-3-scaled.jpg" />

      </Head>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjects />
      <EducationSection />
      <MyProjects />
      <About />
      <ContactSection />
      <Footer />
    </>
  );
}
