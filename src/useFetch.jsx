import { useState,useEffect } from "react";

const useFetch = (url) => {

    const [movies, setMovies] = useState();

    //Fetching from api
    useEffect(() => {
		// const startIndex = (page - 1) * itemsPerPage + 1;
		// const endIndex = startIndex + itemsPerPage - 1;

		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				// const slicedData = data.Search ? data.Search.slice(startIndex - 1, endIndex) : [];
				// console.log(data);
				setMovies(data.Search);
			});
	}, [url]);

    return {movies}
}

export default useFetch;