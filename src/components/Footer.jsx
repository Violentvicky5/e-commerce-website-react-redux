import React from "react";
import qr from "../assets/qr.png";
import googleStore from "../assets/googleplay.png";
import appleStore from "../assets/appstore.png";
const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <div className="container">
        <div className="row">
          <h3>Exclusive</h3>
          <div className="col-sm-2 col-md-2 mt-2">
            <h6>Subscribe</h6>
            <p>Get 10% off your first order</p>
            <form className="d-flex">
              <input
                type="search"
                className="form-control form-control-sm bg-transparent text-secondary"
                placeholder="enter phone number"
              />
              <a href="#">
                <i
                  className="fas fa-arrow-right py-2"
                  style={{
                    position: "relative",
                    right: "15px",
                    color: "black",
                  }}
                ></i>
              </a>
            </form>
          </div>
          <div className="col-sm-3 col-md-3 mt-2">
            <h6>Support</h6>
            <p>111 bijoy sarani, dhaka, DH 1515, Bangladesh.</p>
            <p className="text-ii">
              exclusive@gmail.com <br />
              +88015-88888
            </p>
          </div>
          <div className="col-sm-2 col-md-2 mt-2">
            <h6>Account</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="#" className="text-white">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Login / Register
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Cart
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Shop
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-2 col-md-2 mt-2">
            <h6>Quick Links</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="#" className="text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3 col-md-3 mt-2">
            <h6 className="text-i">Download App</h6>
            <p className="text-ii">save $3 with app new user only</p>
            <div className="row">
              <div className="col col-md-6">
                <div className="card">
                  <img src={qr} alt="qr" style={{ height: "50px" }} />
                </div>
              </div>
              <div
                className="col col-md-6 d-flex flex-column justify-content-between"
                style={{ padding: "0" }}
              >
                <div className="card">
                  <img
                    src={appleStore}
                    alt="appStore"
                    className="object-fit-fill"
                    style={{ height: "21px", objectFit: "fill" }}
                  />
                </div>
                <div className="row">
                  <div className="col">
                    <div className="card">
                      <img
                        src={googleStore}
                        alt="googlePlay"
                        style={{ height: "21px", objectFit: "fill" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-sm-3 col-md-3">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className="col-sm-3 col-md-3">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="col-sm-3 col-md-3">
                <i className="fa-brands fa-telegram"></i>
              </div>
              <div className="col-sm-3 col-md-3">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
