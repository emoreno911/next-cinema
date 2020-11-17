import React from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'
import Presentation from '../components/common/Presentation'

export default function Home({ movies, genres, count }) {
  return (
		<Layout>
      <Presentation
        movies={movies} 
        genres={genres}
        count={count}
        isIndex={true}
      />
    </Layout>
  )
}

export const getStaticProps = async () => {
	let movies = await (await fetch('https://run.mocky.io/v3/d5298374-fc6c-443d-97b9-14db25a45893')).json()
	let genres = await (await fetch('https://run.mocky.io/v3/437fc49d-658a-4c5e-a0f1-9bca2b8e5295')).json()

  return {
    props: {
			genres,
			movies,
			count: movies.length
    }
  }
}