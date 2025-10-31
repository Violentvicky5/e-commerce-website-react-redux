import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Badge from "./components/Badge";
import Items from "./components/Items";
import CartItems from "./components/CartItems";
import { useSelector, useDispatch } from "react-redux";
import { toggleCartVisibility } from "./features/cart/cartSlice";

const App = () => {
  const dispatch = useDispatch();
  const isCartVisible = useSelector((state) => state.cart.isCartVisible);

  return (
    <div>
      <Header />
      <Carousel />
      <Badge />
      <Items />
      <Footer />

    
      {isCartVisible && (
        <div
          className="overlay position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 1050,
          }}
          onClick={() => dispatch(toggleCartVisibility())} 
        >
          <div
            className="bg-white p-4 rounded shadow"
            style={{ width: "400px", maxHeight: "80vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="mb-0">Your Cart</h4>
              <button
                className="btn-close"
                onClick={() => dispatch(toggleCartVisibility())}
              ></button>
            </div>

            <CartItems />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
