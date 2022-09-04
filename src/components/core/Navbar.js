import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

export default function Home(){
  const { 
    Logout,
    SignInWithGoogle,
    SignInWithFacebook,
    SignInWithGithub
  } = useContext(UserContext);
  const navigate = useNavigate();
  
  async function handleLogOut(){
    try {
      await Logout();
      navigate('/login');
    } catch(e){
      alert(e);
    }
  }
  
  async function handleGoogleSignIn(){
    try {
      await SignInWithGoogle();
      navigate('/');
    } catch(e){
      alert(e);
    }
  }
  
  async function handleFacebookSignIn(){
    try {
      await SignInWithFacebook();
      navigate('/');
    } catch (e) {
      alert(e);
    }
  }

  async function handleGithubSignIn(){
    try {
      await SignInWithGithub();
      navigate('/');
    } catch (e) {
      alert(e);
    }
  }

  return(
    <>
      <div className='bg-dark text-light p-3'>
          <ul className='nav'>
            <li className='nav-item'><Link className="nav-link text-light" to="/">Home</Link></li>
            <li className='nav-item'><Link className="nav-link text-light" to="/signup">Signup</Link></li>
            <li className='nav-item'><Link className="nav-link text-light" to="/login">Login</Link></li>
            <button onClick={ handleLogOut } className='m-2 btn btn-primary mx-2'>Log Out</button>
            <button onClick={ handleGoogleSignIn } className='m-2 btn btn-warning mx-2'>Sign In With Google</button>
            <button onClick={ handleFacebookSignIn } className='m-2 btn btn-info mx-2'>Sign In With Facebook</button>
            <button onClick={ handleGithubSignIn } className='m-2 btn btn-danger mx-2'>Sign In With Github</button>
          </ul>
      </div>
    </>
  );
}