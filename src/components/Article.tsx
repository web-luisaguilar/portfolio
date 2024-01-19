import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from './mdxComponents'
mdxComponents
import remarkGfm from 'remark-gfm'
import rehypePrism from 'rehype-prism-plus'

export interface propTypes {
  mdxSource: string
}

const Article = ({ mdxSource }: propTypes) => {
  return (
    <article>
      <MDXRemote
        source={mdxSource}
        components={mdxComponents}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypePrism] } }}
      />
    </article>
  )
}

export default Article
