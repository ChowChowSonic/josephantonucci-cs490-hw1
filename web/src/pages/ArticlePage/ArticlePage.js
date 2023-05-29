import ArticleCell from 'web/src/components/ArticleCell/ArticleCell.js'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ArticlePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <h1>ArticlePage {id} - Coded by Joseph Antonucci</h1>
      <p>
        <Link to={routes.article({ id: 1 })}>Article</Link>`
        <ArticleCell id={id} />
      </p>
    </>
  )
}

export default ArticlePage
