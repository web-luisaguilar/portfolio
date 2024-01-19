'use client'
import { useEffect, useState } from 'react'
import { ArrowUp } from './Icons'

const BackToTop = () => {
  const [scroll, setScroll] = useState(0)

  const toTop = () =>
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY > 700) {
        setScroll(scrollY)
      } else {
        setScroll(0)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {scroll !== 0 && (
        <button
          id="totop"
          className={` btn !fixed  !bottom-4 !right-4 !p-4 overflow-hidden !duration-700 ${
            scroll > 950 ? 'translate-y-0 animate-pulse ' : ' translate-y-[200px] '
          }`}
          onClick={toTop}
        >
          <ArrowUp className={`${scroll > 800 && ''}`} />
        </button>
      )}
    </>
  )
}

export default BackToTop
