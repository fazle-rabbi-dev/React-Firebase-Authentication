import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

export default function Home(){
  const { user } = useContext(UserContext);
  
  return(
    <>
      <div className='m-3 bg-white text-dark p-3'>
        <h2>Home Page</h2>
        <h3 className='d-block text-danger display-5'>Hello {user.email}, Welcome!</h3>
      </div>
    </>
  );
}