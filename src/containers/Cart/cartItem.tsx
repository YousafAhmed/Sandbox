import React from "react";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  getTotals,
  clearCart,
} from "./cartslice";
import { useDispatch, useSelector } from "react-redux";
import { Card, Layout, Row } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Meta } = Card;
const { Content } = Layout;

const CartItem = ({ id }: any) => {
  const products = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();

  const handleTotal = (product: any) => {
    return dispatch(getTotals(product));
  };

  return (
    <Content>
      <div>Shopping Cart</div>
      {products.map((p: any) => {
        return (
          <>
            <Content style={{ padding: "50px" }}>
              <Row gutter={20}>
                <Card
                  hoverable
                  style={{
                    width: 240,
                    textAlign: "center",
                    marginTop: "12px",
                    fontSize: "15px",
                    fontWeight: "700",
                    padding: "50px",
                    
                  }}
                  cover={<img alt="image" src={p.image} />}
                >
                  <Meta title={p.title} />
                  <p>{p.price}</p>
                  <button onClick={() => dispatch(incrementQuantity(p))}>
                    +
                  </button>

                  <button onClick={() => dispatch(decrementQuantity(p))}>
                    -
                  </button>
                  <p>{p.quantity}</p>
                  <>
                    <p>{p.price * p.quantity}</p>
                  </>

                  <button
                    style={{ margin: "10px" }}
                    onClick={() => dispatch(clearCart(p))}
                  >
                    <DeleteOutlined />
                  </button>
                </Card>
              </Row>
            </Content>
            ;
          </>
        );
      })}
    </Content>
  );
};

export default CartItem;
