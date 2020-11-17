import React, { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import GenresMenu from './GenresMenu'
import Slideshow from './slideshow'
import Checkout from './Checkout'
import Modal from './Modal'
import { AppContext } from '../contexts/AppContext'
import { slugify } from '../../utils'

// dynamic import for a non-ssr component
const MySelect = dynamic(
  () => import('react-select'),
  { ssr: false }
)

export default function Presentation({ 
	movies, 
	genres, 
	count, 
	genre="all-genres", 
	isIndex = false 
}) {
	const {
		menuActive,
		modalActive, 
		currentMovie,
		setCheckoutMovie,
		setModalActive,
		setMenuActive,
		setMovies
	} = useContext(AppContext)
	const [currentGenre, setCurrentGenre] = useState("")

	const options = genres.map(
		({id, name}) => ({
			label: name,
			slug: slugify(name)
		})
	)

	const router = useRouter()
	const handleChange = ({ value }) => {
		console.log(value)
    if (value !== 'all-genres') {
			setCurrentGenre(value)
			router.push(`/g/${value}`)
		}
		else if (!isIndex) {
			setCurrentGenre(value)
			router.push('/')
		}
		else {
			console.log('false here')
		}
	}

	useEffect(() => {
		setMovies(movies)
		setCheckoutMovie(movies[0].id)
		setCurrentGenre(genre)
	}, [])

  return (
		<React.Fragment>
			<div className="topbar">
				<h1>Next Cinema</h1>
				<button onClick={() => setMenuActive(true)}> 
					<i className="zmdi zmdi-filter-list"></i>
				</button>
			</div>
			
			<Slideshow movies={movies} count={count} />

			{ 
				modalActive && 
				<Modal>
					<Checkout 
						movie={currentMovie} 
						setModalActive={setModalActive} 
					/>
				</Modal>
			}
			{ 
				menuActive && 
				<Modal clsName="modal-menu">
					<GenresMenu
						options={options}
						setMenuActive={setMenuActive}
					/>
				</Modal>
			}
		</React.Fragment>  
  )
}