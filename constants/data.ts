const socialLinks: { [key: string]: string }[] = [
  {
    name: 'Github',
    url: 'https://github.com/zhoang2k2',
    icon: 'github.svg',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hoangnv02/',
    icon: 'linkedin.svg',
  },
  {
    name: 'CV',
    url: 'https://www.canva.com/design/DAGEFom9ehY/wVMSz1fWz718V27TSDYE8Q/view',
    icon: 'cv.svg',
  },
]

const skillsDetail: {
  [key: string]: { image: string; color: string; label: string }
} = {
  html: {
    image: 'html.svg',
    color: '#E34F26',
    label: 'HTML',
  },
  css: {
    image: 'css.svg',
    color: '#1572B6',
    label: 'CSS',
  },
  js: {
    image: 'js.svg',
    color: '#F7DF1E',
    label: 'JavaScript',
  },
  ts: {
    image: 'ts.svg',
    color: '#3178C6',
    label: 'TypeScript',
  },
  react: {
    image: 'react.svg',
    color: '#61DAFB',
    label: 'React',
  },
  next: {
    image: 'next.svg',
    color: '#ffffff',
    label: 'Next.js',
  },
  electron: {
    image: 'electron.svg',
    color: '#47848F',
    label: 'ElectronJS',
  },
  redux: {
    image: 'redux.svg',
    color: '#764ABC',
    label: 'Redux',
  },
  scss: {
    image: 'scss.svg',
    color: '#CC6699',
    label: 'SCSS',
  },
  tailwind: {
    image: 'tailwind.svg',
    color: '#38B2AC',
    label: 'Tailwind',
  },
  mui: {
    image: 'mui.svg',
    color: '#007FFF',
    label: 'MUI',
  },
  antDesign: {
    image: 'ant-design.svg',
    color: '#1890FF',
    label: 'Ant Design',
  },
  bootstrap: {
    image: 'bootstrap.svg',
    color: '#563D7C',
    label: 'Bootstrap',
  },
  framerMotion: {
    image: 'framer-motion.svg',
    color: '#F70292',
    label: 'Framer Motion',
  },
  mongo: {
    image: 'mongo.svg',
    color: '#47A248',
    label: 'MongoDB',
  },
  git: {
    image: 'git.svg',
    color: '#F05032',
    label: 'Git',
  },
}

const renderSkills: string[] = [
  'js',
  'ts',
  'react',
  'next',
  'electron',
  'redux',
  'scss',
  'tailwind',
  'mui',
  'antDesign',
  'bootstrap',
  'git',
]

const projectDetail: {
  [key: string]: { [key: string]: string | string[] };
} = {
  maestro: {
    name: 'Maestro Database',
    description:
      'A healthcare website that manages large amounts of data related to diseases, therapeutics, and patient submissions worldwide.',
    techStack: ['NextJS (TypeScript)', 'NestJS', 'Tailwind CSS', 'PostgreSQL'],
    githubFe: '',
    githubBe: '',
    demo: '',
    images: ['maestro-home.png', 'maestro-submission.png', 'maestro-report.png'],
    time: '07/2024 - 01/2025',
    projectSize: '4 members | Role: Frontend Developer',
    responsibility: [
      'Debugging (100+ UI & database bugs)',
      'Performing data migration',
      'Adjusting logic to finalize the website',
    ],
  },
  infotv: {
    name: 'Info TV',
    description:
      'A website that provides advertising services related to digital billboards, managing customer data and advertisement images.',
    techStack: [
      'NextJS (TypeScript)',
      'Tailwind CSS',
      'Material UI',
      'C#',
      'PostgreSQL',
      'Web Sockets',
      'SignalR',
    ],
    githubFe: '',
    githubBe: '',
    demo: '',
    images: ['info-login.png', 'info-channel.png', 'info-existing.png', 'info-overview.png'],
    time: '12/2024 - 03/2025',
    projectSize: '3 members | Role: Frontend Developer',
    responsibility: [
      'Developing custom hooks for Redux to manage CRUD operations',
      'Handling automatic logout when the token expires',
      'Implementing various UI tasks across all pages',
    ],
  },
  locker: {
    name: 'LockerApp',
    description:
      'A desktop application for managing parcel shipments in lockers. Users enter a unique PIN on the login page to unlock the locker containing their packages.',
    techStack: ['ElectronJS', 'Tailwind CSS'],
    githubFe: '',
    githubBe: '',
    demo: '',
    images: ['locker-language.png', 'locker-edit.png', 'locker-finish.png', 'locker-item.png'],
    time: '11/2024 - 01/2025',
    projectSize: '2 members | Role: Frontend Developer',
    responsibility: [
      'Converting UI designs from Figma into a functional website',
      'Implementing logic flows for deliveries, users, and staff',
    ],
  },
  catShopping: {
    name: 'Cat Shopping',
    description:
      'Product Showcase Page and Admin Dashboard (Authentication, E-commerce Actions, Product Management).',
    techStack: ['ReactJS (TypeScript)', 'SCSS', 'Redux toolkit', 'JSON server'],
    githubFe: 'https://github.com/your-repo/frontend',
    githubBe: '',
    demo: 'https://your-demo-link.com',
    images: [],
    time: '01/2024 - 05/2024',
    projectSize: 'Individual',
    responsibility: [
      'Handling CRUD operations through Redux toolkit',
      'Creating UI with pure CSS',
      'Mocking data with JSON server',
    ],
  },
};



const renderProjects: string[] = ['infotv', 'locker', 'maestro']
const renderPersonalProjects: string[] = ['catShopping']

export { skillsDetail, renderSkills, socialLinks, projectDetail, renderProjects, renderPersonalProjects }
