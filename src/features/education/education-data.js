/**
 * Education section static data.
 * Extracted from EducationSection.jsx for maintainability.
 */

export const SCHOOLS = [
  {
    id: 1,
    institution: 'Dr. A.P.J. Abdul Kalam Technical University, Lucknow',
    degree: 'Master Of Computer Applications (M.C.A)',
    date: '2023 - 2025',
    location: 'Allahabad, India',
    description:
      'Focused on algorithms, distributed systems and web technologies. Coursework included Operating Systems, Databases, and Machine Learning.',
    // show a graduation icon for this entry
    icon: 'postgraduation',
    bullets: [
      'Graduated with honours',
      '7.84 CGPA',
      '4 times Class Representative',
      'Active member of Programming Club',
      'Thesis on distributed consensus protocols',
    ],
  },
  {
    id: 2,
    institution: 'Allahabad State University, Allahabad',
    degree: 'Bachelor Of Science (Computer Science)',
    date: '2019 - 2022',
    location: 'Allahabad, India',
    description:
      'Specialised in Computer Science, Physics, Mathematics. Participated in College level coding competitions.',
    // show an award icon for the bachelor's entry
    icon: 'graduation',
    bullets: ['Graduated with First Class', 'Captain of school coding team'],
  },
  {
    id: 3,
    institution: 'Board of Highschool & Intermediate Education, Uttar Pradesh',
    degree: 'Intermediate (Science)',
    date: '2016 - 2019',
    location: 'Allahabad, India',
    icon : 'upboard',
    description: 'Specialised in, Physics, Mathematics, Chemistry.',
    bullets: ['Passed with First Class', 'School Topper in all subjects'],
  },
  {
    id: 4,
    institution: 'Board of Highschool & Intermediate Education, Uttar Pradesh',
    degree: 'High School (Science)',
    date: '2014 - 2016',
    location: 'Allahabad, India',
    icon : 'upboard',
    description: 'Specialised in, Science, Mathematics, Computer.',
    bullets: ['Passed with First Class', 'Class monitor for 2 years'],
  },
];

/**
 * Get the initials from an institution name (max 2 characters).
 * @param {string} name
 * @returns {string}
 */
export function getInitials(name) {
  if (!name) return '';
  return name
    .split(' ')
    .map((s) => s[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}
