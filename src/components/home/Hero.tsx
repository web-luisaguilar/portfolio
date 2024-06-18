import Link from 'next/link'

const Hero = () => {
  return (
    <section className="min-h-[90dvh] items-center flex fadeIn">
      <div className="md:justify-between lg:flex xl:justify-evenly 2xl:justify-between items-center gap-8 font-light justify-center w-full ">
        <Link href={'/'} className="flex items-center justify-center my-8   duration-200 hover:-translate-y-4">
          <img
            className={`w-[200px] h-[200px] `}
            src={'/la-logo.svg'}
            alt={'logo original basado en la letra "L" y "A" de LuisAguilar '}
          />
        </Link>
        <div className="flex flex-col justify-center gap-4 ">
          <div>
            <p className="text-xl">
              Hola 👋, te quiero dar la bienvenida a un lugar donde no están todas las respuestas, pero tranquilo,
              porque si de algo estoy seguro es de que{' '}
              <strong className=" italic">&quot;la solución existe, solo hay que encontrarla&quot;</strong>.
            </p>
          </div>
          <br />
          <div className="flex flex-col md:flex-row  w-auto justify-between float-end gap-4 ">
            <Link className="link" href={'/about'}>
              Mas Acerca de Mi
            </Link>
            <Link className="btn-solid" href={'/contact'}>
              Contactame
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
