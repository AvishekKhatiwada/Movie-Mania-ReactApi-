import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
	const [movies, setMovies] = useState();

	const { id } = useParams();

	useEffect(() => {
		fetch(`http://www.omdbapi.com/?apikey=61bac264&i=${id}`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setMovies(data);
			});
	}, [id]);

	console.log(movies);
	return (
		<div>
			{' '}
			this is details page Details
			<br />
			{movies?.Title}
		</div>
	);
};

export default Details;
