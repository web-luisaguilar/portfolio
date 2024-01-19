import ArticleGridSkeleton from '@/components/blog/ArticleGridSkeleton'
import dynamic from 'next/dynamic'

export const metadata = {
  title: 'Blog | Luis Aguilar',
}

const ArticleGrid = dynamic(() => import('@/components/blog/ArticleGrid'), { loading: () => <ArticleGridSkeleton /> })

const page = () => {
  return (
    <main>
      <h1>Articulos</h1>
      <ArticleGrid />
    </main>
  )
}

export default page
