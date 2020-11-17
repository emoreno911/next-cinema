import React, { useEffect, useState } from 'react'


function Seats({ updateTotal }) {
	const onSelectSeat = (evt) => {
		const $seat = evt.currentTarget;
		
		if(!$seat.classList.contains('taken')) {
			$seat.classList.toggle('selected')
	
			const $sel = $seat.parentNode.querySelectorAll('.selected')
			const qty = $sel.length * 5.44
			const _total = `$${qty}`.substring(0,6)
			updateTotal(_total)
		}
	}

	var seats = [];
	var initPos = 65;
	for (var i = 0; i < 78; i++) {
		var row = String.fromCharCode(initPos + Math.floor(i/9));
		var taken = (i%7 == 0 || i%6 == 0)? 'taken' : '';

		var aisle = (i%9 === 1)? 'aisle-right':
			(i%9 === 7)? 'aisle-left': '';

		if(row === 'I')
			aisle = 'aisle-top';

		const seatID = `${row}${i%9 + 1}`
		seats.push(
			<div key={seatID} className={`seat ${taken} ${aisle}`} onClick={onSelectSeat}>
				{seatID}
			</div>
		);
	}

	return <>{seats}</>
}

export default function Checkout({ movie, setModalActive }) {
	if (!movie)
		return <div></div>

	const [openEffect, setOpenEffect] = useState(true) 
	const [showLoader, setShowLoader] = useState(false)
	const [success, setSuccess] = useState(false)
	const [total, setTotal] = useState("$0")

	useEffect(() => {
		setTimeout(() => {
			setOpenEffect(v => true)
		}, 400);
	}, [])

	const handleCheckout = (evt) => {
		if (total === '$0')
			return;

		evt.currentTarget.textContent = 'Booking...'
		setShowLoader(true)

		setTimeout(() => {
			setShowLoader(false)
			setSuccess(true)
		}, 2000);
	}

	return (
		<React.Fragment>
			<div className="close-div">
				<button 
					onClick={() => setModalActive(false)}
					className="btn btn-sm btn-secondary btn-close"
				>
					<i className="zmdi zmdi-close-circle-o"></i>
				</button>
			</div>
			<div className={`checkout ${openEffect ? 'open' : ''}`}>
				<div className="sinopsis">				
					<img 
						className="cover" 
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8zw8AAhMBENYXhyAAAAAASUVORK5CYII=" 
						style={{backgroundImage: `url(https://image.tmdb.org/t/p/w300${movie.poster_path})`}} 
					/>
					<h3>{movie.title}</h3>
					<p>{movie.overview}</p>
					<span>Wed, 28 Jun </span>
					<small>16:00 (2h 15m)</small>
				</div>
				<section>
					<ul className="legend">
						<li>available</li>
						<li>taken</li>
					</ul>
					<span>Select your seats</span>
					<div className="seats">
						<Seats updateTotal={setTotal} />
					</div>
					<div className="screen">screen</div>
				</section>
				<div className="total">
					<small>Total </small><span>{total}</span>
					{
						!success ? 
						<button onClick={handleCheckout}>CHECKOUT</button> :
						<button className="success">
							<i className="zmdi zmdi-check-circle"></i> Movie Booked
						</button>
					}
					{
						showLoader && <div className="loader"></div>
					}
				</div>
			</div>
		</React.Fragment>
	)
}