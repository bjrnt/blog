import preval from 'preval.macro'
import Link from 'next/link'

const EXTERNAL_BLOG_POSTS = [
  {
    external: true,
    date: '2016-03-17',
    path:
      'https://medium.com/@btegelund/creating-an-eslint-plugin-87f1cb42767f',
    title: 'Creating an ESLint Plugin',
  },
  {
    external: true,
    date: '2017-03-22',
    path:
      'https://medium.com/@btegelund/migrating-code-using-codemods-808e2e29e5f2',
    title: 'Migrating Code Using Codemods',
  },
]

const BLOG_POSTS = preval`
  const glob = require('glob');
  const posts = glob.sync('./pages/**/meta.js');
  module.exports = posts.map(post => require('.' + post));
`

const POSTS = EXTERNAL_BLOG_POSTS.concat(BLOG_POSTS).sort(
  (x, y) => new Date(y.date) - new Date(x.date)
)

/** Used to extract the domain from external blog posts */
const extractDomain = url => {
  const [, domain] = url.match(/:\/\/(.[^\/]+)/)
  return domain
}

function Post({ path, external, title, date }) {
  const renderedTitle = <b>{title}</b>
  const externalTag = external && (
    <span
      style={{ marginLeft: '.5em', fontStyle: 'italic', fontSize: '0.7rem' }}
    >
      ({extractDomain(path)})
    </span>
  )
  const link = external ? (
    <a href={path}>{renderedTitle}</a>
  ) : (
    <Link href={path}>
      <a>{renderedTitle}</a>
    </Link>
  )
  return (
    <li style={{ marginBottom: '1em' }}>
      <p className="title is-5">
        {link}
        {externalTag}
      </p>
      <p className="subtitle is-6">{date}</p>
    </li>
  )
}

export default () => (
  <div className="content" style={{ maxWidth: '35em' }}>
    <h1>Blog Posts</h1>
    <ul>
      {POSTS.map(post => (
        <Post key={post.path} {...post} />
      ))}
    </ul>
  </div>
)
