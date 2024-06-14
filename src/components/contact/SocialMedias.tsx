import Link from 'next/link'
import { GithubIcon, InstagramIcon, TwitterIcon } from '../Icons'

const SocialMediaLinks = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/luisaguilarweb',
    icon: <TwitterIcon className={' stroke-customTheme-600'} size="50px" />,
  },
  {
    name: 'Github',
    link: 'https://github.com/web-luisaguilar',
    icon: <GithubIcon className={' stroke-customTheme-600'} size="50px" />,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/luisaguilar_dev',
    icon: <InstagramIcon className={' stroke-customTheme-600'} size="50px" />,
  },
]

const SocialMedias = () => {
  return (
    <section className="py-8 flex justify-center">
      <div className="flex items-center gap-4">
        {SocialMediaLinks.map((media) => (
          <Link
            href={media.link}
            target="_blank"
            rel="noreferrer"
            key={media.name + '-key-socialMedias'}
            className=" flex items-center justify-center opacity-50 hover:opacity-100 bg-customTheme-800/20 rounded-sm  aspect-square h-24 shadow-sm hover:shadow-xl"
            title={media.name}
          >
            <figure className="flex flex-col items-center justify-center">
              {media.icon}
              <figcaption className="text-sm text-customTheme-600">{media.name}</figcaption>
            </figure>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default SocialMedias
