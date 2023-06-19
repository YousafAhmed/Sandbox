import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./cartslice";
import { Button } from "antd";
import CartItem from "./cartItem";
import Page from "../Homepage/Index";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.cart);

  return (
    <>
      {products.cart.map((p: any) => (
        
          <CartItem
            title={p.title}
            price={p.price}
            quantity={p.quantity}
            image = {p.image}
            category = {p.category}
            
          />
        )
      )}
    </>
  );
};
export default Cart;
