import Link from 'next/link'
import React from 'react'

const ProyectCard = () => {
  return (
    <div className=" max-w-[500px] h-[450px] border border-customTheme-300/50 rounded-sm hover:shadow-md hover:shadow-customTheme-50/20 flex flex-col justify-between p-4 bg-customTheme-900/25">
      <div className="">
        <div className="flex items-center justify-center w-full aspect-video ">
          <img className=" " src="" alt="img" />
        </div>
        <h2>TITULO DE PORYECTO</h2>
        <p className="text-base md:line-clamp-4 line-clamp-2">
          Descripcion Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit hic impedit, sequi soluta
          consequuntur eligendi nobis distinctio eius, delectus temporibus tempora laboriosam culpa iusto ut aspernatur
          laudantium reprehenderit quaerat beatae!
        </p>
      </div>
      <div className="flex gap-4 justify-between">
        <Link href={''} className="btn">
          Visita el sitio web
        </Link>
        <Link href={''} className="btn">
          Leer mas
        </Link>
      </div>
    </div>
  )
}

export default ProyectCard
