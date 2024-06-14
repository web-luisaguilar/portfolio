'use client'
import { ReactNode, useEffect } from 'react'
import { IconClose } from './Icons'
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { close, toggle } from '@/lib/features/modal/modalSlice'

const Modal = () => {
  const { open, content } = useAppSelector((state) => state.modal)
  const dispatch = useAppDispatch()
  const handleClick = () => {
    dispatch(toggle())
  }
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == 'Escape') dispatch(close())
  }
  useEffect(() => {
    open && window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  })

  if (open)
    return (
      <>
        <div
          className="absolute top-0 left-0 z-50 bg-black w-full h-full opacity-40 flex justify-center items-center "
          onClick={handleClick}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-5/6 h-5/6 flex justify-center items-center bg-customTheme-900/30 modalAnimation">
          {content && <div className="relative w-full h-full ">{content as ReactNode}</div>}
        </div>
        <div className="absolute top-0 left-0 z-50 m-8 bg-customTheme-950  ">
          <button className="aspect-square btn-solid" onClick={handleClick}>
            <IconClose />
          </button>
        </div>
      </>
    )
  else {
    return <></>
  }
}

export default Modal
