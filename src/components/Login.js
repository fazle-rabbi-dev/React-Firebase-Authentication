import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import UserContext from '../context/UserContext';
import {
  useContext,
  useState
} from 'react';
import { useNavigate } from 'react-router-dom';

// Component Start Here:
export default function Signup(){
  // Initialize Stare Variable:
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  
  // Getting Data From Context Api:
  const Data = useContext(UserContext);
  const { Login,user } = Data;
  
  // Form Handler:
  async function handleSubmit(e){
    try {
      e.preventDefault();
      await Login(email,password);
      alert('Login is successful as'+ user.email);
      navigate('/');
    } catch (e) {
      alert(e);
    }
  }
  
  return(
    <>
      <h2 className='m-3 text-success display-4 fs-bold'>Login to your account</h2>
      <Form onSubmit={ handleSubmit } className='m-3 p-2 bg-light'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={ (e) => setEmail(e.target.value) } type="email" placeholder="Enter email" required value={ email } />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={ (e) => setPassword(e.target.value) } type="password" placeholder="Password" required value={ password } />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    </>
  );
}