import path from 'path'
import { readFile } from 'fs/promises'
import dynamic from 'next/dynamic'
import ArticleSkeleton from '../blog/ArticleSkeleton'

const Article = dynamic(() => import('../Article'), { loading: () => <ArticleSkeleton /> })

const About = async () => {
  const pathFile = path.join(process.cwd(), '/src/articulos/me.mdx')
  const data = await readFile(pathFile, 'utf-8')

  return (
    <>
      <Article mdxSource={data} />
    </>
  )
}
export default About
