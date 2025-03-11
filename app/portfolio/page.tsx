'use client'

import ImageProject from '@/components/image/ImageProject'
import {
  projectDetail,
  renderProjects,
  renderSkills,
  skillsDetail,
  socialLinks,
} from '@/constants/data'
import { hexToRGBA } from '@/utils/common'
import { useState } from 'react'

const PortfolioPage = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <div className="flex flex-col gap-16 w-[80%] m-auto">
      {/*============================================ INTRO SECTION ============================================*/}
      <section className="grid grid-cols-12">
        <div className="col-span-8 flex flex-col gap-8">
          <h1>
            I'm <span>Hoang Nguyen</span>.
            <br />
            <span>Frontend</span> <span className="hollow-text">Developer</span>
            <br />
            based in <span>Da Nang</span>.
          </h1>

          <p className="text-lg">
            I have <span>8+ months of experience</span>, along with{' '}
            <span>2+ months of freelancing</span>. <br /> During my time working on various projects
            at my previous company, I developed skills in <br /> SEO & Performance optimization,
            Customer communication, and Project management.
          </p>

          <ul className="pl-4 pr-12 ml-6 z-1 w-fit flex gap-4 mt-16">
            {socialLinks.map((social, index) => {
              return (
                <li
                  key={index}
                  className="border border-white bg-white p-1 rounded-full w-[50px] h-[50px] flex justify-center items-center"
                >
                  <a href={social.url} className="flex justify-center items-center" target="_blank">
                    <img src={social.icon} className="max-w-[80%]" alt={social.name} />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="relative col-span-4">
          <div className="border-absolute"></div>
        </div>
      </section>

      {/*============================================ SKILLS SECTION ============================================*/}
      <section>
        <h2>
          My <span>Skills</span>
        </h2>
        <ul className="grid grid-cols-6" style={{ rowGap: '34px', columnGap: '56px' }}>
          {renderSkills.map((skill, index) => {
            return (
              <li
                key={index}
                className="relative rounded-md py-12 grid grid-rows-4 gap-2 transition-all duration-250"
                style={{
                  border: `3px solid`,
                  borderColor:
                    hoveredSkill === skill
                      ? hexToRGBA(skillsDetail[skill]?.color, 0.8)
                      : 'rgba(255, 255, 255, 0.8)',
                }}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="row-span-3 flex justify-center items-center align-middle">
                  <img
                    className="max-w-[35%] transition-all duration-250"
                    src={skillsDetail[skill]?.image}
                    alt={skillsDetail[skill]?.label}
                    style={{ filter: hoveredSkill === skill ? 'grayscale(0%)' : 'grayscale(80%)' }}
                  />
                </div>
                <p className="mt-auto  row-span-1 text-center">{skillsDetail[skill]?.label}</p>

                <div
                  className="w-[100px] h-[100px] absolute rounded-full left-[50%] top-[50%] blur-3xl z-[-1] transition-all duration-250"
                  style={{
                    translate: '-50% -60%',
                    backgroundColor:
                      hoveredSkill === skill ? skillsDetail[skill]?.color : 'transparent',
                  }}
                ></div>
              </li>
            )
          })}
        </ul>
      </section>

      {/*============================================ PROJECTS SECTION ============================================*/}
      <section>
        <h2>
          My <span>Projects</span> I have worked on
        </h2>
        <div className="flex flex-col gap-16">
          {renderProjects.map((project, index) => {
            const data = projectDetail[project]
            const technologies = data.techStack as string[]
            const responsibilities = data.responsibility as string[]
            return (
              <div
                key={index}
                className="grid grid-cols-12 items-center gap-8"
                style={{ rowGap: '16px' }}
              >
                <div className="col-span-6 blur-card w-full p-6 rounded-md">
                  <h3 className="text-xl mb-4">
                    <span className='italic'>{data.time}</span>
                    <span className="mx-10">|</span>
                    <span>{data.name}</span>
                  </h3>

                  <ul className="project-detail-list flex flex-col gap-2">
                    <li>
                      <span className="font-semibold">Description:</span>
                      <span>{data.description}</span>
                    </li>
                    <li>
                      <span className="font-semibold">Technology:</span>
                      <span>{technologies.join(', ')}</span>
                    </li>
                    <li>
                      <span className="font-semibold">Project Size:</span>
                      <span>{data.projectSize}</span>
                    </li>
                    <li>
                      <span className="font-semibold">Responsibility:</span>
                      <span>{responsibilities.join(', ')}</span>
                    </li>
                  </ul>
                </div>

                <div className="col-span-6">
                  <ImageProject projectName={project} />
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default PortfolioPage
