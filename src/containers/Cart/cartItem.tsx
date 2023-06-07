import React from "react";
import {
  incrementQuantity,
  decrementQuantity,
  getTotals,
  clearCart,
} from "./cartslice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Card, Layout, PageHeader, Space, Typography, Button } from "antd";
import { DeleteOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Meta } = Card;
const { Content } = Layout;
const { Text, Link } = Typography;

const CartItem = ({ id }: any) => {
  const products = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getTotals());
  //   }, [products]);

  if (products < 1) {
    return (
      <Content style={{ marginTop: "80px" }}>
        <PageHeader
          className="site-page-header"
          onBack={() => history.back()}
          title="Your Cart"
          style={{ marginBottom: "50px", fontSize: "26px" }}
        />
        <Text style={{ fontSize: "24px", textAlign: "center" }}>
          Your Cart is empty!
        </Text>
      </Content>
    );
  }

  return (
    <Content style={{ marginTop: "80px" }}>
      <PageHeader
        className="site-page-header"
        onBack={() => history.back()}
        title="Your Cart"
        style={{ marginBottom: "50px", fontSize: "26px" }}
      />

      {products.map((p: any) => {
        return (
          <>
            <Content
              style={{
                marginLeft: "250px",
                marginRight: "250px",
                marginBottom: "10px",
              }}
            >
              <Card
                hoverable
                style={{
                  display: "flex",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
                cover={
                  <img
                    alt="image"
                    src={p.image}
                    style={{ display: "block", justifyItems: "center" }}
                  />
                }
              >
                <Space style={{ display: "flex", margin: "20px" }}>
                  <Meta
                    title={p.title}
                    style={{
                      marginRight: "50px",
                      width: "240px",
                      textAlign: "left",
                    }}
                  />
                  <Text
                    style={{
                      width: "80px",
                      textAlign: "center",
                      display: "flex",
                    }}
                  >
                    ${p.price}
                  </Text>

                  <Button
                    style={{ border: "none", display: "flex" }}
                    onClick={() => dispatch(decrementQuantity(p))}
                  >
                    <LeftOutlined style={{ marginTop: "4px" }} />
                  </Button>
                  <Text style={{ display: "block", width: "20px" }}>
                    {p.quantity}
                  </Text>

                  <Button
                    style={{ border: "none", display: "flex" }}
                    onClick={() => dispatch(incrementQuantity(p))}
                  >
                    <RightOutlined style={{ marginTop: "4px" }} />
                  </Button>

                  <>
                    <Text
                      style={{
                        display: "block",
                        width: "100px",
                      }}
                    >
                      ${p.price * p.quantity}
                    </Text>
                  </>
                  <Space style={{ display: "flex", marginLeft: "30px" }}>
                    <Button
                      style={{ display: "flex", border: "none" }}
                      onClick={() => dispatch(clearCart(p))}
                    >
                      <DeleteOutlined
                        style={{ marginTop: "4px", fontSize: "15px" }}
                      />
                    </Button>
                  </Space>
                </Space>
              </Card>
            </Content>
          </>
        );
      })}
      <Text
        underline
        style={{
          display: "block",
          float: "right",
          marginRight: "380px",
          fontSize: "24px",
          fontWeight: 500,
        }}
      >
        Sub-Total:
      </Text>
    </Content>
  );
};

export default CartItem;
