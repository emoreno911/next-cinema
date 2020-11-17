import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

const AppContextProvider = (props) => {
	const [movies, setMovies] = useState([])
	const [currentMovie, setCurrentMovie] = useState(null)
	const [modalActive, setModalActive] = useState(false)
	const [menuActive, setMenuActive] = useState(false)

	const setCheckoutMovie = (id) => {
		const movie = movies.find(m => m.id === id)
		setCurrentMovie(movie)
	}

  return (
    <AppContext.Provider value={{ 
			menuActive,
			modalActive,
			currentMovie,
			setMenuActive,
			setModalActive, 
			setCheckoutMovie,
			setMovies
		}}>
      {props.children}
    </AppContext.Provider>
  );
}
 
export default AppContextProvider;