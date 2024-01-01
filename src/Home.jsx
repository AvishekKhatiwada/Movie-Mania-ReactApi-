import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import MovieList from './MovieList';

function App() {
	const [movies, setMovies] = useState();
	const [currentPage, setCurrentPage] = useState(1);
	
	// 61bac264

	const handleFetch = (page) => {
		fetch(`http://www.omdbapi.com/?apikey=61bac264&s=marvel&page=${page}`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setMovies(data);
			});
	};
	useEffect(() => {
		const fetchData = () => {
			const newData = handleFetch(currentPage);
			setMovies(newData);
		};
		fetchData();
	}, [currentPage]);

	const handleNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	}

	const handlePrevPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
	}
	return (
		<>
			<div>
				<Navbar />
				{/* <button className='btn btn-sm btn-primary' onClick={handleFetch}>
					Fetch
				</button> */}
				<MovieList movies={movies?.Search} />
			</div>
			{movies ? (
				<nav aria-label="Page navigation">
					<ul className="pagination">
						{currentPage > 1 ? 
						(<li className="page-item"><button onClick={handlePrevPage} className="page-link" href="#">Previous</button></li>) : <></>}
						<li className="page-item"><button disabled className="page-link" href="#">{currentPage}</button></li>
						<li className="page-item"><button onClick={handleNextPage} className="page-link" href="#">Next</button></li>
					</ul>
				</nav>
			) : <></>}
		</>
	);
}

export default App;
