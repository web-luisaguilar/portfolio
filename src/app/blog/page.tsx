import ArticleGrid from '@/components/blog/ArticleGrid'
import { MetadataPost } from '@/types'
import { promises as fs } from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { Suspense } from 'react'

export const metadata = {
  title: 'Blog | Luis Aguilar',
}
const page = async () => {
  return (
    <main>
      <h1>Articulos</h1>
      <Suspense fallback={<p>Cargando...</p>}>
        <ArticleGrid
          metadataPosts={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}] as MetadataPost[]}
        />
      </Suspense>
    </main>
  )
}

export default page
