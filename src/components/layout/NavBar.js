import React from 'react'
import { Link } from "react-router-dom";
import SignedInLink from '../layout/SignInLink';
import SignedOutLink from '../layout/SignOutLink';

const NavBar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">Project Planner</Link>
        <SignedInLink />
        <SignedOutLink />
      </div>
    </nav>
  )
}

export default NavBar;