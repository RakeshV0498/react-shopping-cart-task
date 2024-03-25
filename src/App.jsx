/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */ // Disable eslint for unused variables, if needed

import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0); // Define state for the count
  // Fake Store App Data
  const ProductData = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: { rate: 4.7, count: 500 },
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: { rate: 2.1, count: 430 },
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 4.6, count: 400 },
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 3.9, count: 70 },
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 3, count: 400 },
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 1.9, count: 100 },
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: { rate: 3.3, count: 203 },
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      description:
        "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating: { rate: 2.9, count: 470 },
    },
    {
      id: 11,
      title:
        "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      price: 109,
      description:
        "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      rating: { rate: 4.8, count: 319 },
    },
    {
      id: 12,
      title:
        "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      price: 114,
      description:
        "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      rating: { rate: 4.8, count: 400 },
    },
  ];
  return (
    <>
      <Navbar counter={count} />
      <Herosection />
      <article className="product-container">
        {ProductData.map((product, index) => (
          <ProductSpace
            productDetails={product}
            key={index}
            count={count}
            setCount={setCount}
          />
        ))}
      </article>
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

// Reusable Component for displaying products
function ProductSpace({ productDetails, count, setCount }) {
  const [show, setshow] = useState(true);
  function addCart() {
    setshow(!show);
    setCount(count + 1);
  }
  function removeCart() {
    setshow(!show);
    setCount(count - 1);
  }
  return (
    <section className="product">
      <div className="img-container">
        <img
          src={productDetails.image}
          alt={productDetails.title}
          className="product-img"
        />
      </div>
      <div className="details-container">
        <p className="product-title">{productDetails.title}</p>
        <h3 className="product-price">${productDetails.price.toFixed(2)}</h3>
        <p className="product-rating">
          {}
          <StarRating product={productDetails} />{" "}
        </p>
      </div>
      {show ? (
        <div className="btn-container">
          <button className="btn btn-primary" onClick={addCart}>
            Add To Cart
          </button>
        </div>
      ) : (
        <div className="btn-container">
          <button className="btn btn-danger" onClick={removeCart}>
            Remove From Cart
          </button>
        </div>
      )}
    </section>
  );
}

// Star Rating Component
function StarRating({ product }) {
  const stars = [];

  const rating = Number(product.rating.rate);
  const ratingCount = Number(product.rating.count);

  // Calculate the number of full stars
  const fullStars = Math.floor(rating);

  // Calculate whether to display a half star
  const hasHalfStar = rating % 1 !== 0;

  // Loop to render full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={i} className="fa fa-star" aria-hidden="true"></i>);
  }

  // Add half star if applicable
  if (hasHalfStar) {
    stars.push(
      <i key="half" className="fa fa-star-half-o" aria-hidden="true"></i>
    );
  }

  // Fill remaining stars with empty stars
  for (let i = stars.length; i < 5; i++) {
    stars.push(<i key={i} className="fa fa-star-o" aria-hidden="true"></i>);
  }

  return (
    <div className="star-rating">
      <span className="content-title">Rating:</span>{" "}
      <span className="content-star">{stars}</span>
      <span className="content-count"> ({ratingCount})</span>
    </div>
  );
}

export default App;
