import React from 'react'
import Slide from './Slide'
import { slideBackgrounds } from '../../../utils'

// https://codepen.io/team/keyframers/pen/rNxmVZN
const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % state.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? state.length - 1 : state.slideIndex - 1
    };
  }
};

export default function Slideshow({ movies = [], count = 19 }) {
  const [state, dispatch] = React.useReducer(slidesReducer, {length: count , ...initialState});

	const slides = movies.map((m, index) => {
		return {
			id: m.id,
			title: m.title,
			subtitle: m.vote_average,
			description: m.genre_ids.join(', '),
			image: `https://image.tmdb.org/t/p/w300${m.poster_path}`,
			bgcolor: slideBackgrounds[m.id]
		}
	})

  return (
		<div className="slide-wrap">
			<div className="slides">
				<button onClick={() => dispatch({ type: "PREV" })}>‹</button>

				{[...slides, ...slides, ...slides].map((slide, i) => {
					let offset = slides.length + (state.slideIndex - i);
					return <Slide slide={slide} offset={offset} key={i} />;
				})}
				<button onClick={() => dispatch({ type: "NEXT" })}>›</button>
			</div>
		</div>
  );
}