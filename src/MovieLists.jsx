import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import MovieList from './MovieList';

function App() {
	const [movies, setMovies] = useState();
	// 61bac264

	const handleFetch = () => {
		fetch('http://www.omdbapi.com/?apikey=61bac264&s=marvel')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setMovies(data);
			});
	};

	return (
		<>
			<div>
				<Navbar />
				<button className='btn btn-sm btn-primary' onClick={handleFetch}>
					Fetch
				</button>
				<MovieList movies={movies?.Search} />
			</div>
		</>
	);
}

export default App;
