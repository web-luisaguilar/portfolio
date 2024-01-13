import About from '@/components/about/About'

export const metadata = {
  title: 'Acerca | Luis Aguilar',
}

const Loading = () => {
  console.log('cargando...')
  return <p>Loading...</p>
}

const AboutPage = () => {
  return (
    <>
      <main className={`fadeIn`}>
        <article>
          <About />
        </article>
      </main>
    </>
  )
}

export default AboutPage
