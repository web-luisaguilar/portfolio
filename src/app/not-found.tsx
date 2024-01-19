import Link from 'next/link'

const NotFound = () => {
  return (
    <main className="flex items-center justify-center flex-col ">
      <h1 className="text-red-400">Pagina no encontrada</h1>
      <Link href={'/'} className="link">
        Regresar a la pagina principal
      </Link>
    </main>
  )
}

export default NotFound
