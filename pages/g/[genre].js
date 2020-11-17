import React from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../../components/layout'
import Presentation from '../../components/common/Presentation'
import { slugify } from '../../utils'


export default function MovieGenre({ genre, genres, movies, count }) {
	return (
		<Layout>
      <Presentation
        movies={movies} 
				genres={genres}
				genre={genre}
        count={count}
      />
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const genres = await (await fetch('https://run.mocky.io/v3/437fc49d-658a-4c5e-a0f1-9bca2b8e5295')).json()
  const paths = genres.map(({ id, name }) => ({ params: { genre: slugify(name) } }))

  return {
    paths, 						// Statically generate all paths
    fallback: false, 	// Display 404 for everything else
  }
}

export const getStaticProps = async ({ params }) => {
	let filteredMovies = await (await fetch('https://run.mocky.io/v3/d5298374-fc6c-443d-97b9-14db25a45893')).json()
	let genres = await (await fetch('https://run.mocky.io/v3/437fc49d-658a-4c5e-a0f1-9bca2b8e5295')).json()
	const { genre } = params;

	if (genre) {
		const current = genres.find(g => slugify(g.name) === genre)
		filteredMovies = filteredMovies.filter(m => m.genre_ids.indexOf(current.id) !== -1)
	}

  return {
    props: {
			genre,
			genres,
			movies: filteredMovies,
			count: filteredMovies.length
    }
  }
}

// export async function getServerSideProps({ params }) {
//   const _movies = await fetch('https://run.mocky.io/v3/d5298374-fc6c-443d-97b9-14db25a45893')
// 	let filteredMovies = await _movies.json()
// 	const _genres = await fetch('https://run.mocky.io/v3/14c23c8b-a47b-4848-b238-c4c1e49e20d9')
// 	const genres = await _genres.json()

// 	const { genre } = params;
// 	if (genre) {
// 		const current = genres.find(g => slugify(g.name) === genre)
// 		filteredMovies = filteredMovies.filter(m => m.genre_ids.indexOf(current.id) !== -1)
// 	}

//   return {
//     props: {
// 			genre,
// 			genres,
// 			movies: filteredMovies,
// 			count: filteredMovies.length
//     }
//   }
// }