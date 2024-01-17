import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import MovieList from './MovieList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
	const [movies, setMovies] = useState();
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5;

	// 61bac264

	const handleFetch = (page) => {
		const startIndex = (page - 1) * itemsPerPage + 1;
		const endIndex = startIndex + itemsPerPage - 1;

		fetch(`http://www.omdbapi.com/?apikey=61bac264&s=marvel&page=${page}`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				const slicedData = data.Search ? data.Search.slice(startIndex - 1, endIndex) : [];
				console.log(data);
				setMovies(slicedData);
			});
	};
	useEffect(() => {
		handleFetch(currentPage);
	}, [currentPage]);

	const handleNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const handlePrevPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
	};
	return (
		<>
			<div className="all-body">
				<Navbar />
				{/* <Navbar brand={"Trending"} item1={"Movies"} item2={"Tv Shows"} /> */}
				<div className="searchDiv">
                    <input type="text" class="searchBar form-control rounded" placeholder="Search movie...."
                        aria-label="Search" aria-describedby="search-addon"/>                        
				</div>
				<MovieList movies={movies} />
			</div>
			{movies ? (
				<nav aria-label='Page navigation'>
					<ul className='pagination'>
						{currentPage > 1 ? (
							<li className='page-item'>
								<button onClick={handlePrevPage} className='page-link' href='#'>
									Previous
								</button>
							</li>
						) : (
							<></>
						)}
						<li className='page-item'>
							<button disabled className='page-link' href='#'>
								{currentPage}
							</button>
						</li>
						<li className='page-item'>
							<button onClick={handleNextPage} className='page-link' href='#'>
								Next
							</button>
						</li>
					</ul>
				</nav>
			) : (
				<></>
			)}
		</>
	);
}

export default App;
