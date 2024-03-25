/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */ // Disable eslint for unused variables, if needed

import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0); // Define state for the count

  return <Navbar counter={count} />; // Pass the count as a prop to Navbar
}

function Navbar({ counter }) {
  return (
    <nav className="nav navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <article className="container-fluid js">
        <a className="navbar-brand" href="#">
          <img
            className="logo-img"
            src="/shopping logo.svg"
            alt="Shopping-cart icon"
          />
          Shopping Cart
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <section className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ "--bs-scroll-height": "100px" }}
          >
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    All Products
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Popular Items
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    New Arrivals
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button
              className="btn btn-outline-dark"
              onClick={(e) => e.preventDefault()}
            >
              <span className="cart-icon">
                <i className="fa fa-shopping-cart me-1"></i>
              </span>
              Cart{" "}
              <span className="badge bg-dark text-white ms-1 rounded-pill ">
                {counter}
              </span>
            </button>
          </form>
        </section>
      </article>
    </nav>
  );
}

export default App;
