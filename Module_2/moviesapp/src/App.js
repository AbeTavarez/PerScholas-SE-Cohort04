import { useState, useEffect } from "react";

import { getMovie } from "./services/omdbapi";

import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";
import NavBar from "./components/NavBar";

import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';
// import { Alert } from "react-bootstrap";

function App() {
  // Store the data about a movie
  const [movie, setMovie] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovie("Clueless");
      console.log(data);
      setMovie(data);
    };
    fetchData();
  }, []);

  // if (movie?.Error) {
  //   console.log(movie.Error);
  //   toast(movie.Error)
  // }

  return (
    <div className="App">
      <NavBar />
      {/* <ToastContainer/> */}
      {/* {movie?.Error && <Alert>Movie Not Found!</Alert>} */}
      <Form movieSearch={getMovie} setMovie={setMovie} />


      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
