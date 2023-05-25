import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./cartslice";
import { Button } from "antd";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.cart);
  
  const handleRemove = (product: any) => {
    dispatch(removeFromCart(product));
  };

  return (
    
      <>
        {products.cart.map((p: any) => {
          return (
            <>
              title={p.title}
              price={p.price}
              quantity={p.quantity}

              <Button style={{margin: "5px",padding:"5px"}} onClick={ () => handleRemove(p)}>Clear</Button>
            </>
          );
        })}
      </>
    
  );
};
export default Cart;
