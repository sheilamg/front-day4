import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
    const genreNames = movie.moviesGenre
    ? movie.moviesGenre.map(mg => mg.genre.name)
    : [];  

  return (
    <div>
      <Link to={`/movie/${movie.id}`}>
      <h2>{movie.title}</h2>
      </Link>
      <p>{movie.description}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Genres: {genreNames.length > 0 ? genreNames.join(', ') : 'No genres available'}</p>
      <img src={movie.image} alt={movie.title} style={{ width: '100px' }} />
      <Link to={`/movie/${movie.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default MovieItem;
