import { projectDetail } from '@/constants/data'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons'

interface ImageProjectProps {
  projectName: keyof typeof projectDetail
}

const ImageProject = ({ projectName }: ImageProjectProps) => {
  const [initialIndex, setInitialIndex] = useState<{ [key: string]: number }>({
    maestro: 0,
    infotv: 0,
    locker: 0,
  })

  const handleNextImage = () => {
    setInitialIndex((prev) => ({
      ...prev,
      [projectName]:
        initialIndex[projectName] === projectDetail?.[projectName].images.length - 1
          ? 0
          : prev[projectName] + 1,
    }))
  }

  const handlePrevImage = () => {
    setInitialIndex((prev) => ({
      ...prev,
      [projectName]:
        initialIndex[projectName] === 0
          ? projectDetail?.[projectName].images.length - 1
          : prev[projectName] - 1,
    }))
  }

  return (
    <div className="flex w-full">
      <button
        className="animate-prev-btn cursor-pointer w-10 h-[100px] scale-125 m-auto z-10"
        onClick={() => {
          handlePrevImage()
        }}
      >
        <FontAwesomeIcon icon={faAnglesLeft} />
      </button>
      <div className="relative w-full">
        <img
          src={`/images/${projectDetail?.[projectName].images?.[initialIndex[projectName]]}`}
          alt={projectDetail?.[projectName].images?.[initialIndex[projectName]]}
        />
      </div>
      <button
        className="animate-next-btn cursor-pointer w-10 h-[100px] scale-125 m-auto z-10"
        onClick={() => {
          handleNextImage()
        }}
      >
        <FontAwesomeIcon icon={faAnglesRight} />
      </button>
    </div>
  )
}

export default ImageProject
