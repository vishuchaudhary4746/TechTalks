import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link-home" to="/Home">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link-link" to="/Latest">
              Latest Blogs
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button">
              Dropdown
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link-disabled" href="/Disabled">
              Disabled
            </a>
          </li>
          <li className="nav-item">
          <Link className="nav-link-login" to="/Login">
              Login
            </Link>
          </li>
        </ul>
        <form className="form-inline">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
