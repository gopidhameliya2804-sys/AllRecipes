import React from "react";
import { Link } from 'react-router-dom'

function Header() {
  return (
     <>
      <div>
        <div className="container">
          <div className="row p-3">
            <div className="col">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <h1 className="navbar-brand text-danger fw-bold fs-2">
                    Kocina
                  </h1>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                  >
                    <div className="navbar-nav ms-5">
                      <Link
                        className="nav-link text-dark  me-3"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </Link>
                      <Link
                        className="nav-link text-dark  me-3 "
                        to="allrecipes"
                      >
                        Recipe
                      </Link>
                      <Link
                        className="nav-link text-dark  me-3 "
                        to="search"
                      >
                        Search
                      </Link>
                      <Link
                        className="nav-link text-dark  me-3 "
                        to="contact"
                        tabIndex={-1}
                        aria-disabled="true"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                  <nav className="navbar navbar-light bg-light">
                    <form className="container-fluid justify-content-start">
                      <Link to="search">
                        <span className="fa  fa-search text-secondary" />
                      </Link>
                      <button
                        className="btn  border-0 rounded-pill pe-4 ps-4 p-2 ms-1 text-white"
                        type="button"
                      >
                        <Link to="signin" className="text-dark text-decoration-none">
                          Sign in
                        </Link>
                      </button>
                      <button
                        className="btn btn-sm  bg-danger text-white pe-4 ps-4 p-2 ms-3 rounded-pill"
                        type="button"
                      >
                        <Link to="signup" className="text-white text-decoration-none">
                          Sign up
                        </Link>
                      </button>
                    </form>
                  </nav>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
