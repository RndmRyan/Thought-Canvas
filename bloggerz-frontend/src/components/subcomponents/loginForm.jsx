import React, {useState, useContext} from 'react'

import { SessionContext } from '../../App';

function loginForm() 
{
  const {setsessionUserID} = useContext(SessionContext);

  return (    
    <form>
        <input type='text' className="form-control" placeholder='Enter Name' />
        <input type='text' className="form-control" placeholder='Enter Password' />
        <input type='submit' className="form-control" value='Submit' onClick={()=>{setsessionUserID(0)}} />
    </form>
  )
}

export default loginForm