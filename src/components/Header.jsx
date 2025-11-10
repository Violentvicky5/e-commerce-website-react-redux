import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartVisibility } from "../features/cart/CartSlice";
import { setSearchQuery } from "../features/search/SearchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.items.length);
  const searchValue = useSelector((state) => state.search.query);

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <header className="bg-dark border-bottom">
      <div className="container d-flex align-items-center justify-content-between py-2">
        <span className="topbar-text text-white">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <a href="#" className="text-decoration-underline text-white">
            Shop Now
          </a>
        </span>
        <div className="d-flex topbar-lang ms-auto">
          <select className="form-select w-auto border-0 bg-transparent text-white">
            <option>English</option>
            <option>Tamil</option>
          </select>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            Exclusive
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sign Up
                </a>
              </li>
            </ul>

            <form className="d-flex" style={{ width: "250px" }}>
              <input
                type="text"
                value={searchValue || ""}
                onChange={handleSearch}
                className="form-control form-control-sm"
                placeholder="What are you looking for?"
              />
              <i
                className="fas fa-search py-2"
                style={{ position: "relative", right: "25px", color: "black" }}
              ></i>
            </form>

            <div
              className="d-flex align-items-center ms-3"
              onClick={() => dispatch(toggleCartVisibility())}
              style={{ cursor: "pointer" }}
            >
              <i
                className="fa fa-cart-shopping"
                style={{ color: "black", fontSize: "20px" }}
              ></i>
              {cartCount > 0 && (
                <span className="badge bg-warning ms-1">{cartCount}</span>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
