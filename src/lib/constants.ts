import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/ivantrj',
  linkedin: 'https://www.linkedin.com/in/ivantrj/',
  mail: 'mailto:hello.ivantrj@gmail.com',
  instagram: 'https://www.instagram.com/ivantrjdev/',
  twitter: 'https://www.x.com/ivan_trj',
  // medium: 'https://ladvace.medium.com/',
  // discord: 'https://discordapp.com/users/163300027618295808',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

export const PROJECTS_DATA = [
  {
    name: 'Personal Website',
    description: 'My personal website built with Astro and TailwindCSS',
    img: '/me.png',
    website: 'https://ivantrj.dev',
    repository: 'https://github.com/ivantrj/personal-website'
  },
  {
    name: 'Example Project',
    description: 'A sample project to showcase the portfolio structure',
    img: '/me.png',
    website: 'https://example.com',
    repository: 'https://github.com/example/project'
  }
]

// Study Page
export const STUDIES = [
  {
    title: 'Computer Science',
    institution: 'Universidad Central',
    link: 'https://www.ucentral.edu.co/',
    date: '2019 - 2027',
  },
  {
    title: '...',
    institution: 'Platzi',
    link: 'https://platzi.com/',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'Udemy',
    link: 'https://www.udemy.com/',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'Youtube',
    link: 'https://www.youtube.com/@ivantrj',
    date: '2018 - 2022',
  },
]

export const EXPERIENCE = [
  {
    company: 'ruwido',
    location: 'Salzburg, Austria',
    position: 'iOS & Android Developer',
    start: '2022',
    link: 'https://ruwido.com/',
    end: 'Current',
    tasks: [
      'Developing and maintaining current Flutter apps',
      // 'Develo',
    ],
  },
  {
    company: 'E-Group',
    location: 'Budapest, Hungary',
    position: 'Software Engineer',
    link: 'https://egroup.hu/',
    start: '2019',
    end: 'Current',
    tasks: [
      'Development of the Spot2 platform with the use of React, Redux, and Material UI',
      'Development map with the use of Google Maps API',
      'Development internal platform with the use of React, Redux, and Material UI',
      'Testing and debugging',
    ],
  },
]
