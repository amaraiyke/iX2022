import React, {useState} from 'react';

import {useNavigate} from 'react-router-dom';

import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../firebase/firebase';


export default function LoginPage() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  async function onFormSubmit(e) {
    e.preventDefault();
    try{
      const userCred = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log(userCred);
      
      navigate('/');
    } catch(err) {
      //deal with error
      alert(err.message);
    }

  }

  return (
    <div className='container my-4'>
      <div className='card card-body'>

        <h1>Login</h1>

        <p>Login with your email and password</p>
        
        <form onSubmit={onFormSubmit}>

          <div className="mb-3">
            <label className="form-label">
              Email address
            </label>
            <input
            value={email} //change to email state updates the value of input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            class="form-control"/>
          </div>

          <div className="mb-3">
            <label className="form-label">
              Password
            </label>
            <input
            value={password} //change to password state updates the value of input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            class="form-control"/>
          </div>

          <div className='text-center'>
            <button className='btn btn-primary px-5'>
              Login
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}
