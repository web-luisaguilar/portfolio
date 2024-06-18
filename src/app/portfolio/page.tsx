import MiniProyectGrid from '@/components/portfolio/MiniProyectGrid'
import ProyectGrid from '@/components/portfolio/ProyectGrid'
export const metadata = {
  title: 'Portafolio | LuisAguilar',
}
const PortfolioPage = () => {
  return (
    <main>
      <h1 className="text-center">Portafolio de proyectos</h1>
      <br />
      <br />
      <h2>Maquetas de paginas Web</h2>
      <hr />
      <ProyectGrid />
      <br />
      <br />
      <h2>Mini Proyectos</h2>
      <hr />
      <MiniProyectGrid />
    </main>
  )
}

export default PortfolioPage
