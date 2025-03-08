'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const navigateTimeout = setTimeout(() => {
      window.location.href = '/portfolio'
    }, 1000)

    return () => clearTimeout(navigateTimeout)
  }, [])

  return <>this is home</>
}
