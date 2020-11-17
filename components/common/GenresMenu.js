import React from 'react'

const GenresMenu = ({ options, setMenuActive }) => {
	const path = window.location.pathname

	return (
		<React.Fragment>
			<div className="close-div">
				<button 
					onClick={() => setMenuActive(false)}
					className="btn btn-sm btn-secondary btn-close"
				>
					<i className="zmdi zmdi-close-circle-o"></i>
				</button>
			</div>
			<h3 className="genres-menu-title">Genres</h3>
			<ul className="genres-menu">
			{
				options.map(({ label, slug }) => (
					<li 
						key={slug}
						className={`${ (path.indexOf(slug) !== -1 ? 'active' : (path === '/' && slug === 'all-genres') ? 'active' : '') }`}
					>
						{
							slug === 'all-genres' ?
							<a href="/">{label}</a> :
							<a href={`/g/${slug}`}>{label}</a>							
						}
					</li>
				))
			}
			</ul>
		</React.Fragment>
	)
}

export default GenresMenu