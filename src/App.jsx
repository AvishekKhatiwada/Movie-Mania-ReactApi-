import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import MovieList from './MovieList'

function App() {
  const [movies, setMovies] = useState();
  // 61bac264

  const handleFetch = () => {
    fetch('http://www.omdbapi.com/?apikey=61bac264&i=tt4154664')
    .then(res => {
     return res.json();
    })
    .then((data) => {
      console.log(data);
      setMovies(data);
  })
  }

  return (
    <>
    <div>
      <Navbar/>
      <button className="btn btn-sm btn-primary" onClick={handleFetch}>Fetch</button>
      <MovieList movies={movies}/>
    </div>     
    </>
  )
}

export default App