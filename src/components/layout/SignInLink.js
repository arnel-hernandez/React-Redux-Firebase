import React from 'react'
import { NavLink } from "react-router-dom";

const SignInLink = () => {
  return (
    <ul className="right">
      <li><NavLink to='/createproject'>New Project</NavLink></li>
      <li><NavLink to='/'>Logout</NavLink></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten -1'>AH</NavLink></li>
    </ul>
  )
}

export default SignInLink
