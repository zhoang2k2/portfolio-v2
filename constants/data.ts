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

export { skillsDetail, renderSkills }
