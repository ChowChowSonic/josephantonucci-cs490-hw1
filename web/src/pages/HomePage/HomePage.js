import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage by Joseph Antonucci</h1>
      <ArticlesCell />
    </>
  )
}

export default HomePage
