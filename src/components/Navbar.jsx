import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">

        <p className="name mb-0">Mayur Kankale</p>

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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <NavLink to="/" className="nav-link ms-3">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link ms-3">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/project" className="nav-link ms-3">
                Project
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link ms-3">
                Contact
              </NavLink>
            </li>

          </ul>

          <div id="wrap">
            <a
              href="https://rxresu.me/Mayur_Kankale"
              className="btn-slide2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="circle2">
                <i className="fa fa-download"></i>
              </span>
              <span className="title2">Resume</span>
              <span className="title-hover2">Click here</span>
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
