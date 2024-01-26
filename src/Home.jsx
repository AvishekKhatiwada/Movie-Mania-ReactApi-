import { useState } from "react";
import Navbar from "./Navbar";
import MovieList from "./MovieList";

const Home = () => {

    const [movies, setMovies] = useState();
	const [currentPage, setCurrentPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState(''); 
	const itemsPerPage = 5;

    // 61bac264

	//Fetching from api
	// const handleFetch = (page) => {
	// 	const startIndex = (page - 1) * itemsPerPage + 1;
	// 	const endIndex = startIndex + itemsPerPage - 1;

	// 	fetch(`http://www.omdbapi.com/?apikey=61bac264&s=marvel&page=${page}`)
	// 		.then((res) => {
	// 			return res.json();
	// 		})
	// 		.then((data) => {
	// 			const slicedData = data.Search ? data.Search.slice(startIndex - 1, endIndex) : [];
	// 			console.log(data);
	// 			setMovies(slicedData);
	// 		});
	// };
	// useEffect(() => {
	// 	handleFetch(currentPage);
	// }, [currentPage]);

	// useEffect(()=>{
	// 	const movies = useFetch(`http://www.omdbapi.com/?apikey=61bac264&s=marvel&page=${page}`,currentPage);
	// },[currentPage])
	//Pagination Next Page
	// const handleNextPage = () => {
	// 	setCurrentPage((prevPage) => prevPage + 1);
	// };

	//Pagination previous page
	// const handlePrevPage = () => {
	// 	setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
	// };

	//handling Search
	const handleSearch = async ()=>{
		const startIndex =1;
		const endIndex = startIndex + itemsPerPage - 1;

		console.log(searchTerm);
		try {
			const response = await fetch(`http://www.omdbapi.com/?apikey=61bac264&s=${searchTerm}`);
			const data = await response.json();
			const slicedData = data.Search ? data.Search.slice(startIndex - 1, endIndex) : [];
			setMovies(slicedData);
		} catch (error) {
			console.error('Error Fetching Data: ',error);

		}
	}

    return (
        <>
            <div className="all-body">
                <Navbar />
                {/* <div className="searchDiv">
                    <input type="text" className="searchBar form-control rounded"
					 value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
					  aria-label="Search" aria-describedby="search-addon"/>   
					<button onClick={handleSearch}>Search</button>                     
				</div> */}
                <MovieList />
            </div>
            {/* <div className="all-body">
				<Navbar />
				<Firstpage /> */}
			{/* <Navbar brand={"Trending"} item1={"Movies"} item2={"Tv Shows"} /> */}
			{/* <div className="searchDiv">
                    <input type="text" className="searchBar form-control rounded"
					 value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
					  aria-label="Search" aria-describedby="search-addon"/>   
					<button onClick={handleSearch}>Search</button>                     
				</div> */}
			{/* <MovieList movies={movies} /> */}
			{/* </div> */}
			{/* {movies ? (
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
			)} */}
        </>
    );
}

export default Home;