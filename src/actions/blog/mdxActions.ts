'use server'
import { readFile, readdir } from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

export const getArticle = async ({ slug, type = 'blog' }: { slug: string; type?: string }) => {
  const pathFile = path.join(process.cwd(), `/src/articulos/${type}/${slug}.mdx`)

  const data = await readFile(pathFile, 'utf-8')
  const frontMatter = matter(data)
  const { content: mdxContent, data: mdxMetadata } = frontMatter
  return { mdxContent, mdxMetadata }
}

export const getAllArticles = async ({ type }: { type: string }) => {
  const rootArticlePath = path.join(process.cwd(), '/src/articulos')
  const pathFiles = path.join(rootArticlePath, type)
  const filesName = await readdir(pathFiles, 'utf-8')
  return await Promise.all(
    filesName.map(async (fileName) => {
      const slug = fileName.replace('.mdx', '')
      return await getArticle({ slug, type })
    }),
  )
}

export const getAllArticlesSlug = async ({ type }: { type: string }) => {
  const pathFiles = path.join(process.cwd(), '/src/articulos', type)
  const filesName = await readdir(pathFiles, 'utf-8')
  return filesName
}
