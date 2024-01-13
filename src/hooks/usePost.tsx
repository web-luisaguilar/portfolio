import { getAllArticles } from '@/actions/blog/mdxActions'
import { useState } from 'react'

const usePost = () => {
  const [postMeta, setPostMeta] = useState([])
  getAllArticles({ pathName: '/src/articulos/blog' })
  return { postMeta }
}

export default usePost
