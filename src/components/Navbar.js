import React,{useState} from "react";
// use impt for importing proptypes:
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// rfc used for importing the inital structure
export default function Navbar(props) {
  return (
    <div>
         {/* we are useing curly bracket which will define that we are using the java script for and anf backtick so that we can props and use it here*/}
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
        <div className={`container-fluid`}>
          <a className={`navbar-brand text-${props.alt}`} href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={`navbar-nav me-auto mb-2 mb-lg-0 text-${props.alt}`}>
              <li className={`nav-item text-${props.alt}`}>
                <Link
                  className={`nav-link active text-${props.alt}`}
                  aria-current="page"
                  to="/#"
                >
                  {props.Home}
                </Link>
              </li>
              <li className={`nav-item text-${props.alt}`}>
                <Link
                  className={`nav-link active text-${props.alt}`}
                  to="/About"
                //   /*this is inline css that have added */ style={{
                //     color: "white",
                //   }}
                >
                  {props.About}
                </Link>
              </li>
              <li className={`nav-item text-${props.alt}`}>
                <Link
                  className={`nav-link active text-${props.alt}`}
                  aria-disabled="true"
                >
                  {props.Contact}
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
              <div className={`form-check form-switch text-${props.alt}`}>
               <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.value}Mode</label>
             </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
// used for declaration the type of passed argument s
Navbar.propTypes = {
  // as we used isRequired in any of them then we have to pass it else it will show the error.
  title: PropTypes.string.isRequired,
  About: PropTypes.string.isRequired,
  Home: PropTypes.string.isRequired,
  Contact: PropTypes.string.isRequired,
};
// this is used when we didn't pass the value of title and others
Navbar.defaultProps = {
  title: "Set title here",
  About: "About us",
  Home: "HomePage",
  Contact: "Contacts",
};
