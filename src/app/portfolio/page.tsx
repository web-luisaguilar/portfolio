import ProyectGrid from '@/components/portfolio/ProyectGrid'
export const metadata = {
  title: 'Portafolio | LuisAguilar',
}
const PortfolioPage = () => {
  return (
    <main>
      <h1 className="text-center">Portafolio de proyectos</h1>

      <ProyectGrid />
    </main>
  )
}

export default PortfolioPage
