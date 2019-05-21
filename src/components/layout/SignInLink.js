import React from 'react'
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { signOut } from "../../store/actions/authActions";

const SignInLink = (props) => {
  const { profile } = props;
  return (
    <ul className="right">
      <li><NavLink to='/createproject'>New Project</NavLink></li>
      <li><a onClick={props.signOut} href='/'>Logout</a></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten -1'>{profile.initials}</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignInLink)
