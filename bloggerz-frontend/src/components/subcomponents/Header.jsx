import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import '../stylesheets/home.css'

import LoggedinUser from './loggedinUser';

import { SessionContext } from '../../App';

function Header() 
{
  const {sessionUserID} = useContext(SessionContext);

    const navigate = useNavigate();

    const setpathLogin = () => {
        navigate("/SignIn");
    }

  return (
    <div className='Header'>
        <img src='../../src/assets/logo.png' height='60px'/>
        <h4>Thought Canvas</h4>
        { sessionUserID === -5 ? <button className='' onClick={setpathLogin}>Login</button> : <LoggedinUser />} 
    </div>  
  )
}

export default Header