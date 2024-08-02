import React from 'react'
import { Link } from 'react-router-dom';
import StaticMovies from '../../components/StaticMovies/StaticMovies';
import Movies from '../../components/Movies/Movies';


const Home = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Welcome to Adviters Movies!</h1>
      <Link to={`/search-movie`}>
        <button>Search Movies</button>
      </Link>
      <Movies />
      <StaticMovies />
    </>
  );
};

export default Home;