/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
	return (
		<div className='movie-lists d-flex'>
			{/* {movies.map((movie) => ( */}
			{movies ? (
				<>
					{movies.map((data, i) => (
						<div key={i} className='card'>
							<img src={data.Poster} className='card-img-top' />
							<div className='card-body'>
								<h5 className='card-title'>MovieName</h5>
								<p className='card-text'>Director</p>
								<Link to={`/details/${data.imdbID}`} className='btn btn-primary'>
									Details
								</Link>
							</div>
						</div>
					))}
				</>
			) : (
				<div>please fetch data first</div>
			)}
			{/* ))} */}
		</div>
	);
};

export default MovieList;
