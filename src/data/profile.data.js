/**
 * Profile Data - Contains all profile information
 * Centralized data source for the entire application
 */

export const profileData = {
  personal: {
    firstName: 'KB',
    lastName: 'Mohan',
    title: 'Technical Architect',
    location: 'Bengaluru, Karnataka',
    email: 'mohan.kb5473@gmail.com',
    phone: '+91 7259615473',
    profileImage: '/myphoto.png',
  },

  profile: {
    description:
      'I am a responsible and dedicated individual who is always eager to learn new things. I have successfully completed various complex projects in the past and have over 10+ years of experience in the software development field, with numerous achievements to my credit.',
  },

  social: [
    {
      id: 1,
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mohankumara-k-b-02681979/',
      username: '@Mohankumara-k-b',
      icon: 'bxl-linkedin-square',
    },
    {
      id: 2,
      platform: 'Facebook',
      url: 'https://www.facebook.com/manu.kb3/',
      username: '@manu.kb3',
      icon: 'bxl-facebook',
    },
    {
      id: 3,
      platform: 'Instagram',
      url: 'https://www.instagram.com/manu.kmh/',
      username: '@manu.kmh',
      icon: 'bxl-instagram',
    },
  ],

  education: [
    {
      id: 1,
      title: 'Degree',
      school: 'B.E-EC, UVCE Bengaluru',
      year: '2010-2014',
    },
    {
      id: 2,
      title: 'PUC/12th',
      school: 'PCMB, GJC Kadur',
      year: '2008-2010',
    },
  ],

  skills: [
    {
      id: 1,
      name: 'Pega PRPC',
      category: 'Enterprise Systems',
    },
    {
      id: 2,
      name: 'Pega RPA',
      category: 'Automation',
    },
    {
      id: 3,
      name: 'JAVA',
      category: 'Programming',
    },
    {
      id: 4,
      name: 'SQL',
      category: 'Databases',
    },
    {
      id: 5,
      name: 'HTML, CSS, JS, jQuery',
      category: 'Web Development',
    },
    {
      id: 6,
      name: 'React',
      category: 'Frontend',
    },
    {
      id: 7,
      name: 'System Design',
      category: 'Architecture',
    },
    {
      id: 8,
      name: 'DevOps',
      category: 'Infrastructure',
    },
  ],

  experience: [
    {
      id: 1,
      title: 'Senior Manager',
      company: 'Morgan Stanley',
      period: '2021 - Present',
      description:
        'Working as an LSA on multiple projects, where responsible for gathering requirements, designing applications, and setting up environments. Additionally, Part of the Pega COE team, where we identified reusable and repeatable functionalities and created frameworks/components for them.',
    },
    {
      id: 2,
      title: 'System Architect II',
      company: 'Pegasystems',
      period: '2017 - 2021',
      description:
        'Worked in Pega consultanting team, where provided expert services to clients for building applications in Pega. Also involved in the development of Pega offline mobile applications and successfully deployed several applications using Pega PRPC and Pega RPA tools.',
    },
    {
      id: 3,
      title: 'Software Engineering Analyst',
      company: 'Accenture',
      period: '2014 - 2017',
      description:
        'Served as a proficient Full Stack Developer, autonomously integrating DevOps practices into the application, and actively contributed to the architecture team.',
    },
  ],

  certifications: [
    {
      id: 1,
      title: 'Pega CSS & CSSA',
      description: 'Pega PRPC certification on Pega both 7.X and 8.X version',
      issuer: 'Pegasystems',
    },
    {
      id: 2,
      title: 'Pega RPA',
      description: 'Pega Robotic Automation certification',
      issuer: 'Pegasystems',
    },
    {
      id: 3,
      title: 'Best Individual Contributor Award-2022',
      description: 'Morgan Stanley Yearly Award',
      issuer: 'Morgan Stanley',
    },
    {
      id: 4,
      title: 'PAVE Award',
      description: 'Pega Award for Excellence',
      issuer: 'Pegasystems',
    },
    {
      id: 5,
      title: 'ACE Award',
      description: 'Accenture Award for Excellence',
      issuer: 'Accenture',
    },
  ],

  references: [
    {
      id: 1,
      name: 'Divya Sridhar',
      position: 'Vice President',
      company: 'Morgan Stanley',
      phone: '+1 732-688-5138',
      email: 'divya.sridhar@morganstanley.com',
    },
    {
      id: 2,
      name: 'Suraj Victor',
      position: 'Director',
      company: 'Pegasystems',
      phone: '+91 984-508-0010',
      email: 'suraj.victor@in.pega.com',
    },
  ],

  languages: [
    { id: 1, name: 'Kannada', proficiency: 'Native' },
    { id: 2, name: 'English', proficiency: 'Professional' },
    { id: 3, name: 'Telugu', proficiency: 'Fluent' },
    { id: 4, name: 'Hindi', proficiency: 'Fluent' },
    { id: 5, name: 'Tamil', proficiency: 'Conversational' },
  ],

  interests: [
    { id: 1, name: 'Music', icon: 'bx-headphone' },
    { id: 2, name: 'Travel', icon: 'bxs-plane-alt' },
    { id: 3, name: 'Fitness', icon: 'bx-dumbbell' },
    { id: 4, name: 'Learning', icon: 'bx-book' },
    { id: 5, name: 'Surfing net', icon: 'bx-search-alt' },
  ],

  navigation: [
    { id: 1, label: 'Home', href: '#home', icon: 'bx-home' },
    { id: 2, label: 'Profile', href: '#profile', icon: 'bx-user' },
    { id: 3, label: 'Education', href: '#education', icon: 'bx-book' },
    { id: 4, label: 'Skills', href: '#skills', icon: 'bx-receipt' },
    { id: 5, label: 'AI Skills', href: '#aiskills', icon: 'bx-bulb' },
    { id: 6, label: 'Experience', href: '#experience', icon: 'bx-briefcase-alt' },
    { id: 7, label: 'Certifications', href: '#certifications', icon: 'bx-award' },
    { id: 8, label: 'References', href: '#references', icon: 'bx-link-external' },
  ],
};
