import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const Items = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();


  const searchQuery = useSelector((state) => state.search.query.toLowerCase());

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);


  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="mb-4 mt-4 container">
      <div className="row g-2">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="border col-sm-6 col-md-3 col-lg-3 d-flex g-1">
              <div
                className="card border-0 flex-fill d-flex flex-column"
                style={{ cursor: "pointer", height: "100%" }}
              >
                <span
                  className="badge position-absolute m-2"
                  style={{ backgroundColor: "red" }}
                >
                  -40%
                </span>

                <div className="position-absolute end-0 m-1 d-flex flex-column">
                  <a href="#" className="btn btn-light btn-sm rounded-circle">
                    <i className="fa fa-heart"></i>
                  </a>
                  <a href="#" className="btn btn-light btn-sm rounded-circle mt-1">
                    <i className="fa fa-eye"></i>
                  </a>
                </div>

                <img
                  src={item.image}
                  className="card-img-top p-5"
                  alt={item.title}
                  style={{
                    height: "200px",
                    objectFit: "contain",
                  }}
                />

                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <div>
                    <h6 className="card-title alignment">{item.title}</h6>
                    <p className="mb-1 alignment">
                      <span className="fw-bold text-danger">${item.price}</span>{" "}
                      <span className="fw-bold text-muted text-decoration-line-through">
                        ${item.price * 1.5}
                      </span>
                    </p>

                    <div className="alignment mb-2">
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <span className="text-muted fw-bold">(88)</span>
                    </div>
                  </div>

                  <button
                    className="btn btn-warning mt-auto"
                    style={{
                      height: "35px",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onClick={() => dispatch(addItem(item))}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center mt-5">
            No products found for "<strong>{searchQuery}</strong>"
          </p>
        )}
      </div>
    </div>
  );
};

export default Items;
