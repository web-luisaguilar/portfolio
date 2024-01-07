'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IconClose, IconMenu } from './Icons'
import Dropdown, { option } from './Dropdown'
import { useState } from 'react'

const routes = [
  { name: 'Inicio', path: '/' },
  { name: 'Biblioteca', path: '/library' },
  { name: 'Proyectos', path: '/proyects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Acerca', path: '/about' },
  { name: 'Contacto', path: '/contact' },
]

// const idiomas = [
//   { text: 'Español', value: 'es' },
//   { text: 'Ingles', value: 'en' },
//   { text: 'Aleman', value: 'de' },
//   { text: 'Japones', value: 'ja' },
// ]

const Header = () => {
  const pathName = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="  sticky md:flex  top-0 left-0 z-50 lg:h-[80px] md:justify-center  bg-transparent md:bg-customTheme-950/70 lg:bg-transparent   xl:bg-transparent lg:backdrop-blur xl:backdrop-blur ">
      <div
        onScroll={() => console.log('scroll')}
        className={`py-4 md:px-8 md:relative  xl:px-0 absolute md:flex w-full items-center lg:max-w-[1200px] bg-customTheme-950 md:bg-customTheme-950/70 md:backdrop-blur xl:backdrop-filter-none xl:bg-transparent  h-screen md:h-fit lg:h-[80px] gap-4 duration-200 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full md:-translate-x-0 '
        }`}
      >
        <div className="px-4 md:px-0 flex xl:items-center  md:py-0  justify-between  ">
          <Link
            href="/"
            className="  flex-grow flex items-center justify-center py-4 gap-2 text-2xl font-extrabold w-[200px] md:w-auto"
          >
            <h2>LUIS </h2>
            <h2 className=" text-customTheme-500"> AGUILAR</h2>
          </Link>
          <button
            className={`
          btn md:hidden  z-50 items-center aspect-square pointerHover hover:after:block `}
            onClick={() => setMenuOpen(false)}
          >
            <IconClose size="30px" />
          </button>
        </div>
        <nav className="w-full  overflow-x-hidden overflow-y-auto md:overflow-visible ">
          <ul className=" flex md:flex-row flex-col w-full justify-center xl:justify-normal flex-wrap">
            {routes.map((route, index) => (
              <li key={route.name + 'test'}>
                <Link
                  className={`flex items-center justify-center hover:text-customTheme-300 px-4 py-6 md:py-2 pointerHover hover:border-y !duration-100 border-y-customTheme-500/10 md:border-none  ${
                    pathName === route.path && 'text-customTheme-700 '
                  }`}
                  key={`${index}-${route.name}-route`}
                  href={route.path}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="uppercase max-w-[200px] md:w-fit text-ellipsis overflow-clip">{route.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* <button
        className={`  ${menuOpen ? ' !hidden' : ' fixed '}  btn  bottom-4 left-1/2 -translate-x-1/2 md:hidden`}
        onClick={() => setMenuOpen(true)}
      >
        <IconMenu size="40px" />
      </button> */}

      <div
        className={`md:!hidden  bg-customTheme-950/70 backdrop-blur     items-center justify-between px-4 py-4 ${
          menuOpen ? '!hidden' : '!flex'
        } `}
      >
        <Link
          href="/"
          className=" flex-grow flex items-center justify-center py-4 gap-2 text-2xl font-extrabold w-[200px] md:w-auto"
        >
          <h2>LUIS </h2>
          <h2 className="text-customTheme-500"> AGUILAR</h2>
        </Link>
        <button
          className={`btn aspect-square flex items-center  pointerHover hover:after:block`}
          onClick={() => setMenuOpen(true)}
        >
          <IconMenu size="30px" />
        </button>
      </div>

      {/* <Dropdown options={idiomas} handleChange={()=>{})} /> */}
    </header>
  )
}

export default Header
