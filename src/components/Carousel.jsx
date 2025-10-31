import React from "react";
import { useSelector } from "react-redux";
import apple from "../assets/apple.webp";
import samsung from "../assets/smartphone.jpeg";
import featured from "../assets/featured-1.jpeg";

const Carousel = () => {
  const searchQuery = useSelector((state) => state.search.query);

  if (searchQuery && searchQuery.trim() !== "") {
    return null;
  }

  return (
    <div className="container mt-4 border-bottom">
      <div className="row">
        <div className="col-sm-3 col-md-3 border-end">
          <ul className="list-unstyled small">
            <li className="d-flex justify-content-between align-items-center">
              <a
                href="#"
                className="text-black text-decoration-none side-listSpacing"
              >
                Womens Fashion
              </a>
              <i className="fas fa-angle-right rightAngle"></i>
            </li>
            <li className="d-flex justify-content-between align-items-center">
              <a
                href="#"
                className="text-black text-decoration-none side-listSpacing"
              >
                Men's Fashion
              </a>
              <i className="fas fa-angle-right rightAngle"></i>
            </li>
            <li className="d-flex justify-content-between align-items-center">
              <a
                href="#"
                className="text-black text-decoration-none side-listSpacing"
              >
                Electronics
              </a>
            </li>
            <li className="d-flex justify-content-between align-items-center">
              <a
                href="#"
                className="text-black text-decoration-none side-listSpacing"
              >
                Home & Lifestyle
              </a>
            </li>
            <li className="d-flex justify-content-between align-items-center">
              <a
                href="#"
                className="text-black text-decoration-none side-listSpacing"
              >
                Medicine
              </a>
            </li>
            <li className="d-flex justify-content-between align-items-center">
              <a
                href="#"
                className="text-black text-decoration-none side-listSpacing"
              >
                Sports & Outdoor
              </a>
            </li>
            <li className="d-flex justify-content-between align-items-center">
              <a
                href="#"
                className="text-black text-decoration-none side-listSpacing"
              >
                Baby's & Toys
              </a>
            </li>
            <li className="d-flex justify-content-between align-items-center">
              <a
                href="#"
                className="text-black text-decoration-none side-listSpacing"
              >
                Groceries & Pets
              </a>
            </li>
            <li className="d-flex justify-content-between align-items-center">
              <a
                href="#"
                className="text-black text-decoration-none side-listSpacing"
              >
                Health & Beauty
              </a>
            </li>
          </ul>
        </div>

        <div className="col-sm-9 col-md-9">
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={apple} className="d-block w-100" alt="apple" />
                <div className="carousel-caption d-md-block">
                  <h5 className="text-start">
                    <i className="fab fa-apple fa-2x"></i> iPhone 14 Series
                  </h5>
                  <h2 className="text-start">up to 10% off voucher</h2>
                  <a href="#" className="text-white shopNow d-block text-start">
                    Shop Now
                    <i
                      className="fas fa-arrow-right py-2"
                      style={{ color: "rgb(221, 221, 221)" }}
                    ></i>
                  </a>
                </div>
              </div>

              <div className="carousel-item">
                <img src={samsung} className="d-block w-100" alt="samsung" />
                <div className="carousel-caption d-md-block">
                  <h5 className="text-start text-white">Samsung M4</h5>
                  <h2 className="text-start">up to 15% off voucher</h2>
                  <a href="#" className="text-white shopNow d-block text-start">
                    Shop Now
                    <i
                      className="fas fa-arrow-right py-2"
                      style={{ color: "rgb(221, 221, 221)" }}
                    ></i>
                  </a>
                </div>
              </div>

              <div className="carousel-item">
                <img src={featured} className="d-block w-100" alt="featured" />
                <div className="carousel-caption d-md-block">
                  <h5 className="text-start">
                    <i className="fab fa-apple fa-2x"></i> Apple i-Music
                  </h5>
                  <h2 className="text-start">up to 20% off voucher</h2>
                  <a href="#" className="text-white shopNow d-block text-start">
                    Shop Now
                    <i
                      className="fas fa-arrow-right py-2"
                      style={{ color: "rgb(221, 221, 221)" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
