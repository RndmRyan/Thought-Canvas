import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import './stylesheets/formPage.css'

import LoginForm from './subcomponents/loginForm';
import RegisterForm from './subcomponents/registerForm';
import { SessionContext } from '../App';

function formPage() 
{

  const navigate = useNavigate();

  const setpathGuest = () => {
      navigate("/BlogSearch");
  }

    const [currentForm, setCurrentForm] = useState('Login');

  return (
    <div className='Main'>
        <div className='RightDesign'>
            <h1>Start Painting Your Thougths Today</h1>
        </div>
        <div className='LeftForm wave-container'>
           { currentForm === 'Login' ? <h2>Login</h2> : <h2>Register</h2>} 
           
           { currentForm === 'Login' ? <LoginForm /> : <RegisterForm />} 

           { currentForm === 'Login' ? <p> Not a Writer Yet? <a className='formChange' onClick={() => setCurrentForm('Register')}>Register Here</a></p>
            : <p>Already a Writer? <a className='formChange' onClick={() => setCurrentForm('Login')}>Login Here</a></p> }
          <p>Continue Reading as a Guest? <a className='formChange' onClick={setpathGuest()}>Click Here</a></p>
        </div>
    </div>
  )
}

export default formPage