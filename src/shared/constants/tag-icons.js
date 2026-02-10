/**
 * Shared tag-to-icon mapping used across Experience and Projects sections.
 * Consolidated from FeaturedProjects.jsx and myprojects.jsx to eliminate duplication.
 *
 * Icons are resolved from /public/images/social/.
 */
export const TAG_ICON_MAP = {
  flutter: '/images/social/flutter.png',
  firebase: '/images/social/firebase.png',
  react: '/images/social/react.png',
  next: '/images/social/nextjs.png',
  nodejs: '/images/social/nodejs.png',
  node: '/images/social/nodejs.png',
  aws: '/images/social/aws.png',
  typescript: '/images/social/typescript.png',
  github: '/images/social/github.png',
  git: '/images/social/git.png',
  docker: '/images/social/docker.png',
  figma: '/images/social/figma.png',
  htmlcss: '/images/social/htmlcss.png',
  postgresql: '/images/social/postgresql.png',
  python: '/images/social/python.png',
  leetcode: '/images/social/leetcode.png',
  linkedin: '/images/social/linkedin.png',
  shipskart: '/images/social/shipskart.png',
  aktu: '/images/social/aktu.png',
  jira: '/images/social/jira.png',
  dart: '/images/social/dart.png',
  mongodb: '/images/social/mongodb.png',
  gatsby: '/images/social/gatsby.png',
  netlify: '/images/social/netlify.png',
  webpack: '/images/social/webpack.png',
  temporal: '/images/social/temporal.png',
  cpp: '/images/social/c++.png',
  sql: '/images/social/sql.png',
  dotnet: '/images/social/dotnet.png',
  postgraduation: '/images/social/aktu.png',
  graduation: '/images/social/prsu.png',
  upboard: '/images/social/upboard.png',
  intermediate: '/images/social/upboard.png',
  highschool: '/images/social/upboard.png',
};

/**
 * Resolves a tag name to its corresponding icon path.
 * @param {string} tag - The technology tag name
 * @returns {string|null} Path to icon image, or null if not found
 */
export function getTagIcon(tag) {
  if (!tag) return null;
  const key = tag.toLowerCase().replace(/[^a-z0-9]/g, '');
  return TAG_ICON_MAP[key] || null;
}
