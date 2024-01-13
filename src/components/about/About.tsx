import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypePrism from 'rehype-prism-plus'
import path from 'path'
import { mdxComponents } from '@/components/mdxComponents'
import { readFile } from 'fs/promises'
const About = async () => {
  const pathFile = path.join(process.cwd(), '/src/articulos/me.mdx')
  // const data = readFileSync(pathFile, 'utf-8')
  const data = await readFile(pathFile, 'utf-8')

  console.log('recargado')
  return (
    <MDXRemote
      source={data}
      components={mdxComponents}
      options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypePrism] } }}
    />
  )
}
export default About
