import { MetadataPost } from '@/types'
import Link from 'next/link'
import { GithubIcon } from '../Icons'

const defaultPost = {
  date: 'XX/XX/XXXX',
  title: 'default title post',
  img: '/la-logo.svg',
  description:
    '  Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident explicabo vitae at fugit repellendus eius quod est odio omnis dolorum ipsam beatae asperiores accusantium hic, eum aspernatur expedita quis doloremque Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quas sequi dolorum, alias tenetur placeat velit, rerum quos ab optio sit rem quidem possimus ratione. Hic architecto ipsam sit illum!',
  category: 'default category',
  languages: ['javascript', 'react', 'node', 'mongodb', 'react', 'node', 'mongodb', 'react', 'node', 'mongodb'],
}

const ArticleCard = ({ metadataPost }: { metadataPost: MetadataPost }) => {
  return (
    <div className="  card">
      <div className=" flex flex-col overflow-hidden">
        <div className="flex items-center justify-center  w-full overflow-hidden  aspect-video mb-2 flex-shrink-0 shadow-sm ">
          <img
            className="w-full aspect-video scale-105 hover:scale-100 duration-200 backdrop-blur-md  "
            src={metadataPost.img || defaultPost.img}
            alt={metadataPost.title || defaultPost.title}
          />
        </div>
        <h2 className="text-lg m-0 text-center capitalize font-bold">{metadataPost.title || defaultPost.title}</h2>
        <h3 className="text-sm m-0 capitalize">
          <strong>Categoria: </strong> {metadataPost.category || defaultPost.category}
        </h3>
        {metadataPost.languages && (
          <div className="flex gap-2 my-1 flex-wrap">
            {metadataPost.languages?.slice(0, 4).map((language) => {
              return (
                <span
                  key={metadataPost.date + '-' + language}
                  className=" opacity-50 capitalize  hover:opacity-100 px-1 py-0.5 text-xs border border-customTheme-300 text-customTheme-300"
                >
                  {language}
                </span>
              )
            })}
          </div>
        )}
        <span className="text-xs text-end my-1 opacity-50 text-customTheme-50">
          📅 {metadataPost.date || defaultPost.date}
        </span>
        <p className="w-full text-base line-clamp-3 md:line-clamp-[6]">
          {metadataPost.description || defaultPost.description}
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-2 mt-2">
        <Link href="/" className="btn h-full " title="Ver respositorio del proyecto">
          <GithubIcon className="stroke-customTheme-50" />
        </Link>
        <Link href="/" className="btn h-full w-full text-xs !p-2" title="Preview del proyecto">
          Preview
        </Link>
        <Link href="/" className="btn w-full  h-full text-xs !p-2" title="Leer mas acerca del proyecto">
          Leer mas
        </Link>
      </div>
    </div>
  )
}

export default ArticleCard
