import {Navigate} from 'react-router-dom';
import UserContext from '../context/UserContext';
import { useContext } from 'react';

export default function PrivateRoute({children}){
  const { user } = useContext(UserContext);
  // alert(user.id)
  if(!user){
    return <Navigate to="/login" replace/>
  }
  else{
    return children;
  }
}