/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */ // Disable eslint for unused variables, if needed

import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0); // Define state for the count

  return (
    <>
      <Navbar counter={count} />
      <Herosection />
    </>
  );
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

function Herosection() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="./public/Hero img.jpeg"
            className="d-block mx-lg-auto img-fluid"
            alt="Multiple People Shopping Illustration"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">
            Welcome to Our Shopping Cart
          </h1>
          <p className="lead">
            Discover amazing deals and shop your favorite products!
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Shop Now!
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Learn More &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
