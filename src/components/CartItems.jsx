import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearItem } from "../features/cart/cartSlice";

const CartItems = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  if (items.length === 0) {
    return <p>Your cart is emptyyyy</p>;
  }

  return (
    <div style={{ padding: "10px", marginTop: "10px" }}>
      <h3> Cart Items</h3>
      {items.map((item, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <div>
            <img src={item.image} alt={item.title} style={{ height: "50px" }} />
          </div>
          <strong>{item.title}</strong> - ${item.price} -{" "}
          <p>quantity-{item.quantity}</p>
          <div>
            <button
              className="btn btn-warning mt-2"
              onClick={() => dispatch(removeItem(item.id))}
            >
              remove item
            </button>
          </div>
          <div>
            <button
              className="btn btn-warning mt-2"
              onClick={() => dispatch(addItem(item))}
            >
              add quantity
            </button>
          </div>
        </div>
      ))}
      <div>
        <button
          className="btn btn-warning mt-2"
          onClick={() => dispatch(clearItem())}
        >
          clear cart
        </button>
      </div>
    </div>
  );
};

export default CartItems;
