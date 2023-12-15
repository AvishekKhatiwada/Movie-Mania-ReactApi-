import viteLogo from '/vite.svg'

const MovieList = ({movies}) => {

    return (
        <div className="movie-lists d-flex">
            {/* {movies.map((movie) => ( */}
                <div className="card">
                    <img src={movies.poster} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">MovieName</h5>
                        <p className="card-text">Director</p>
                        <a href="#" className="btn btn-primary">Details</a>
                    </div>
                </div>
            {/* ))} */}
        </div>
    );
}

export default MovieList;