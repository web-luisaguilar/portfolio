'use server'
import { readFile, readdir } from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

export const getArticleBySlug = async ({ slug }: { slug: string }) => {
  const pathFile = path.join(process.cwd(), `/src/articulos/blog/${slug}`)
  const data = await readFile(pathFile, 'utf-8')
  const frontMatter = matter(data)
  const { content: mdxContent, data: mdxMetadata } = frontMatter
  return { mdxContent, mdxMetadata }
}

export const getAllArticles = async ({ pathName }: { pathName: string }) => {
  const pathFiles = path.join(process.cwd(), pathName)
  const files = await readdir(pathFiles, 'utf-8')
  // const posts = files.map(async (file) => {
  //   const pathFile = path.join(pathFiles, file)
  //   const dataFile = await readFile(pathFile, 'utf-8')
  //   const { data, content } = matter(dataFile)
  //   return { data, content }
  // })
  return files.map(async (file) => {
    const data = await getArticleBySlug({ slug: file })
    return data.mdxMetadata
  })
}
