import ArticleCell from 'web/src/components/ArticleCell/ArticleCell.js'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ArticlePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <h1>ArticlePage {id}</h1>
      <p>
        Find me in <code>./web/src/pages/ArticlePage/ArticlePage.js</code>
      </p>
      <p>
        My default route is named <code>article</code>, link to me with `
        <Link to={routes.article({ id: 1 })}>Article</Link>`
        <ArticleCell id={id} />
      </p>
    </>
  )
}

export default ArticlePage
