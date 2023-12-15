import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
	const [movies, setMovies] = useState();

	const { id } = useParams();

	console.log(id);

	useEffect(() => {}, []);
	return (
		<div>
			{' '}
			this is details page Details
			{}
		</div>
	);
};

export default Details;
