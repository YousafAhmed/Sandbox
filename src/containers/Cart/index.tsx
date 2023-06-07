import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./cartslice";
import { Button } from "antd";
import CartItem from "./cartItem";
import Page from "../Homepage/Index";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.cart);

  const getTotalQuantity = () => {
    let total = 0
    products.forEach((item:any) => {
      total += item.quantity
    })
    return total
  }

  // const handleRemove = (product: any) => {
  //   dispatch(removeFromCart(product));
  // };

  return (
    <>
      {products.cart.map((p: any) => (
        
          <CartItem
            title={p.title}
            price={p.price}
            quantity={p.quantity}
            image = {p.image}
            
          />
        )
      )}
    </>
  );
};
export default Cart;
