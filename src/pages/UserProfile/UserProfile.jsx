import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';


const UserProfile = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('AuthToken')))
  const userEmail = items.email


  console.log({items});
  //const { email } = useParams();
  
  const {data: user, load, error} = useFetch(`http://localhost:3002/users`)
  
  
  if(load) return <div>Loading...</div>
  if(error) return <div>Error: {error}</div>

  return (
    <div>
      <h1>User Profile</h1>
      <p>User Name: {user.username}</p>

      <p>Email: {user.email}</p>
      
      
      <div>Look at you..profile user page...</div>
      
      {/*valid only when the user is logged, otherwise, redirect to login */}
      
      <Link to={(items === null) ? '/login' : '/user-edit-review'}>
       <button>Add a Review!</button> 
      </Link>
      
      
    </div>
  );
};

export default UserProfile;