import Link from 'next/link'

const Hero = () => {
  return (
    <section className="min-h-screen items-center flex fadeIn">
      <div className="lg:flex items-center gap-8 font-light justify-center md:justify-between w-full">
        <Link href={'/'} className="flex items-center justify-center my-4   duration-200 hover:-translate-y-4">
          <img
            className={`w-[200px] h-[200px] `}
            src={'/la-logo.svg'}
            alt={'logo original basado en la letra "L" y "A" de LuisAguilar '}
          />
        </Link>
        <div className="flex flex-col justify-center gap-4 ">
          <div className="text-xl">
            <p>
              Hola, mi nombre es Luis Eduardo, soy un fanatico de la tecnologia. !Puedes crear todo lo que te imagines¡
            </p>
            <br />
            <p>
              Bienvenido a mi web personal, aqui encontraras, desde una seccion
              <Link href={'/library'}>
                <strong> biblioteca </strong>
              </Link>
              donde encontraras distintos ejemplos de componentes web, hasta una seccion de{' '}
              <Link href={'/about'}>
                <strong>acerca </strong>
              </Link>
              donde podras saber un poco mas de mi.
            </p>
            <br />
            <p>Espero que encuentres lo que buscas</p>
          </div>
          <div className="flex flex-col md:flex-row  w-auto justify-between float-end gap-4">
            <Link className="link" href={'/about'}>
              Mas Acerca de Mi
            </Link>
            <Link className="btn-solid" href={'/contact'}>
              Descarga mi CV / Contacto
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
