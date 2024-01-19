import Link from 'next/link'
import {
  CssIcon,
  GitIcon,
  GithubIcon,
  JsIcon,
  LinuxIcon,
  MongodbIcon,
  MysqlIcon,
  NextIcon,
  NodeIcon,
  ReactIcon,
  SocketioIcon,
  SolidjsIcon,
  TailwindIcon,
  TypescriptIcon,
} from './Icons'

const Skills = () => {
  const imgSize = '70px'
  const customClass = 'stroke-customTheme-200 hover:stroke-customTheme-400 aspect-square'

  const skills = [
    {
      name: 'JavaScript',
      img: <JsIcon className={customClass} size={imgSize} />,
      doc: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
    },
    {
      name: 'React.Js',
      img: <ReactIcon className={customClass + ' ' + 'hover:animate-spin-slow'} size={imgSize} />,
      doc: 'https://es.react.dev/reference/react',
    },
    {
      name: 'TailwindCss',
      img: <TailwindIcon className={customClass} size={imgSize} />,
      doc: 'https://tailwindcss.com/docs/installation',
    },
    {
      name: 'Node.Js',
      img: <NodeIcon className={customClass} size={imgSize} />,
      doc: 'https://nodejs.org/docs/latest/api/',
    },
    {
      name: 'CSS 3',
      img: <CssIcon className={customClass} size={imgSize} />,
      doc: 'https://developer.mozilla.org/es/docs/Web/CSS',
    },
    {
      name: 'MySQL',
      img: <MysqlIcon className={customClass + ' ' + 'rotate-10'} size={imgSize} />,
      doc: 'https://dev.mysql.com/doc/',
    },
    {
      name: 'Next.js',
      img: <NextIcon className={customClass} size={imgSize} />,
      doc: 'https://nextjs.org/docs',
    },
    {
      name: 'Git',
      img: <GitIcon className={customClass} size={imgSize} />,
      doc: 'https://git-scm.com/doc',
    },
    {
      name: 'Linux',
      img: <LinuxIcon className={customClass + ' fill-customTheme-200 hover:fill-customTheme-400 '} size={imgSize} />,
      doc: 'https://www.debian.org/index.es.html',
    },
    // {
    //   name: 'Docker',
    //   img: <DockerIcon className={customClass} size={imgSize} />,
    //   doc: 'https://docs.docker.com',
    // },
    {
      name: 'Github',
      img: <GithubIcon className={customClass} size={imgSize} />,
      doc: 'https://github.com',
    },
    {
      name: 'MongoDB',
      img: <MongodbIcon className={customClass} size={imgSize} />,
      doc: 'https://www.mongodb.com/docs/manual/',
    },
    {
      name: 'Socket.io',
      img: <SocketioIcon className={customClass} size={imgSize} />,
      doc: 'https://socket.io/docs/v4/',
    },
    {
      name: 'Solid.js',
      img: <SolidjsIcon className={customClass} size={imgSize} />,
      doc: 'https://www.solidjs.com/docs/latest',
    },
    {
      name: 'TypeScript',
      img: <TypescriptIcon className={customClass} size={imgSize} />,
      doc: 'https://www.typescriptlang.org/docs/',
    },
  ]

  return (
    <section className="my-4">
      <div className="grid grid-cols-[repeat(auto-fill,150px)] gap-4 items-center justify-center sm:justify-between">
        {skills.map((skill) => (
          <figure
            key={skill.name + '-keySkill'}
            className="border border-customTheme-700 rounded-sm hover:bg-customTheme-950  flex flex-col items-center justify-center md:justify-between gap-4   w-[150px]  hover:shadow-md hover:shadow-customTheme-700 aspect-square  "
          >
            <div className="flex flex-col gap-2 py-2 w-full items-center ">
              {skill.img}
              <figcaption>{skill.name}</figcaption>
            </div>
            {skill.doc && (
              <Link
                href={skill.doc}
                target="_blank"
                rel="noreferrer"
                className="btn-solid !rounded-tr-none !rounded-tl-none w-full md:!flex items-center justify-center !hidden hover:cursor-alias "
              >
                <small>Documentacion</small>
              </Link>
            )}
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Skills
