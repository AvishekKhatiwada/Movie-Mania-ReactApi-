/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
	return (
		<>
			<div className='movie-lists d-flex'>
				{movies ? (
					<>
						{movies.map((data, i) => (
							<div key={i} className='card'>
								{data.Poster !== 'N/A' ? <img src={data?.Poster} className='card-img-top' style={{ minHeight: '20rem', maxHeight: '20rem' }} /> : <img src="https://www.shutterstock.com/shutterstock/photos/549465931/display_1500/stock-vector-not-available-grunge-rubber-stamp-on-white-background-vector-illustration-549465931.jpg" className='card-img-top' style={{ minHeight: '20rem', maxHeight: '20rem' }} />}
								<div className='card-body'>
									<h5 className='card-title'>{data.Title}</h5>
									{/* <p className='card-text'>{data.Year}</p> */}
									<Link to={`/details/${data.imdbID}`} className='btn btn-sm btn-primary'>
										Details
									</Link>
								</div>
							</div>
						))}
					</>
				) : (
					<div>Loading......</div>
				)}
			</div>
		</>
	);
};

export default MovieList;
