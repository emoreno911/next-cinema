import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const MovieList = ({ movies, genre = "All" }) => {
	const $list = useRef()
	const [scroll, setScroll] = useState(0)
	const delta = 267

	const solidColor = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8zw8AAhMBENYXhyAAAAAASUVORK5CYII="
	const source = "/ph.png"

	useEffect(() => {
		const $covers = $list.current.querySelector('ul.covers')
		$covers.classList.remove('up')
		setTimeout(() => $list.current.querySelector('header').classList.toggle('loaded'), 50);
		setTimeout(() => $covers.classList.toggle('loaded'), 600);
	}, [])

	const doScroll = (scrollUp = false) => {
		const $covers = $list.current.querySelector('ul.covers')
		const listHeight = getComputedStyle($covers).getPropertyValue('height')
			
		if(!scrollUp && scroll < parseInt(listHeight) - delta*2) {
			const _scroll = scroll + delta
			$covers.classList.remove('up')
			$covers.querySelectorAll('li').forEach(el => {
				el.style.transform = `translateY(-${_scroll}px)`
			});
			setScroll(_scroll)
		}

		if(scrollUp && scroll >= delta) {
			const _scroll = scroll - delta
			$covers.classList.add('up')
			$covers.querySelectorAll('li').forEach(el => {
				el.style.transform = `translateY(-${_scroll}px)`
			});
			setScroll(_scroll)
		}
	}
	
	return (
		<div className="list" ref={$list}>
			<div className="scroll">
				<button 
					className="scrollTop" 
					onClick={() => doScroll(true)}
				>
					<i className="zmdi zmdi-arrow-left"></i>
				</button>
				<button 
					className="scrollDown" 
					onClick={() => doScroll()}
				>
					<i className="zmdi zmdi-arrow-right"></i>
				</button>
			</div>
			<header className="">
				<ul className="filter">
					<li className="selected">{genre}</li>
				</ul>
			</header>
			<div className="content">
				<ul className="covers">
					{
						movies.map(movie => (
							<li key={movie.id} data-index={movie.id}>
								<img src={solidColor} style={{ backgroundImage: `url(${source})` }} />
								<span>{movie.title}</span><small>16:00 (2h 15m)</small>
							</li>
						))
					}
				</ul>
			</div>
		</div>
	)
}

export default MovieList