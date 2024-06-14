import { Children } from 'react'

export const mdxComponents = {
  h1: (props: any) => <h1 {...props} className="text-center"></h1>,
  ul: (props: any) => (
    <ul
      {...props}
      className="py-4 bg-opacity-10 bg-customTheme-900 rounded-md w-fit px-12 "
      style={{ listStyle: 'disclosure-closed' }}
    ></ul>
  ),
}
