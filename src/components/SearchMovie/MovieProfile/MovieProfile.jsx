import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';

const MovieProfile = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('AuthToken')))
  console.log({items});
  const { id } = useParams();
  
  const {data: movie, load, error} = useFetch(`http://localhost:3002/movies/${id}`)

  const genreNames = movie.moviesGenre
    ? movie.moviesGenre.map(mg => mg.genre.name)
    : []; 

  
  if(load) return <div>Loading...</div>
  if(error) return <div>Error: {error}</div>

  return (
    <div>
      <h1>Movie Profile</h1>

      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Genres: {genreNames.length > 0 ? genreNames.join(', ') : 'No genres available'}</p>
      <img src={movie.image} alt={movie.title} style={{ width: '100px' }} />
      
      
      {movie.review.map((item, index) => (
       <div key={index}>
        <h2>Review {item.id}</h2>
        <p>User: {item.user.username}</p>
        <p>Title: {item.title}</p>
        <p>Description: {item.description}</p>
        <p>Calification: {item.rate}</p>
        
        {/*<Link to={''}>
        <button>View Comments</button>
        </Link>*/}
        
        <div>Comments of this Review:{(item.comments_user == []) ? ((
           item.comments_user).map((value, index) =>
             <div key={index}>
               <div>Comment from User: {value.user.username}</div>
               {value.comment}
             </div> )) : 
             <div>There are no comments for the moment...
              <button>Would you like to add a new comment?</button>
             </div>
              
        }</div>
      
       </div>
       )
      )}
      <div>Look at you..profile movie page...</div>
      
      {/*valid only when the user is logged, otherwise, redirect to login */}
      
      <Link to={(items === null) ? '/login' : `/create-user-review/${id}`}>
       <button>Add a Review!</button> 
      </Link>
      
      
    </div>
  );
};

export default MovieProfile;