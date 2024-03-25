/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */ // Disable eslint for unused variables, if needed

import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0); // Define state for the count

  return <Navbar counter={count} />; // Pass the count as a prop to Navbar
}

function Navbar({ counter }) {
  // Destructure the prop 'count' as 'counter'
  return (
    <nav className="nav-bar">
      <a className="home-link" href="#">
        {" "}
        <img src="/shopping logo.svg" alt="logo" className="logo-img" />
      </a>
      <ul className="nav text-font">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">
            About
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
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
      <form className="d-flex">
        <button className="btn btn-outline-dark">
          <span className="cart-icon">
            <i className="fa fa-shopping-cart me-1"></i>
          </span>
          Cart{" "}
          <span className="badge bg-dark text-white ms-1 rounded-pill ">
            {counter} {/* Display the count received from props */}
          </span>
        </button>
      </form>
    </nav>
  );
}

export default App;
