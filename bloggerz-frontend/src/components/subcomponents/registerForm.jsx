import React from 'react'

function registerForm() {
  return (
    <form>
        <input type='text' className="form-control" placeholder='Enter Name' />
        <input type='text' className="form-control" placeholder='Enter Email' />
        <input type='text' className="form-control" placeholder='Enter Password' />
        <input type='text' className="form-control" placeholder='ReEnter Password' />
        <input type='submit' className="form-control" value='Submit' />
    </form>
  )
}

export default registerForm