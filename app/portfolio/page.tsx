'use client'

import { renderSkills, skillsDetail } from '@/constants/data'
import { hexToRGBA } from '@/utils/common'
import { useRef, useState } from 'react'

const PortfolioPage = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <div className="flex flex-col w-[80%] m-auto">
      <section>1</section>
      <section>
        <h2>Skills</h2>
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
      <section>3</section>
    </div>
  )
}

export default PortfolioPage
