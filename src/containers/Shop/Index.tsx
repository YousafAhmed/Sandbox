import React from "react";
import { Card, Grid, Layout, Row, Typography, Button,Space } from "antd";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getApiFetch } from "./shopSlice";
import { addToCart } from "../Cart/cartslice";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Cart from "../Cart";

const { Content } = Layout;
const { Meta } = Card;
const { Text, Link } = Typography;

const ProductData = () => {
  const products = useSelector((state: any) => state.product.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApiFetch());
  }, [dispatch]);

  return (
    <Content
      style={{
        // padding: "10px",
        // margin: "30px",
        marginLeft: "40px",
        marginRight: "40px",
        marginTop:"80px"
      }}
    >
      <Row gutter={50}>
        {products.map((p: any) => {
          return (
            <>
              <Content
                style={{
                  width: "280px",
                  marginLeft:"5px"
                }}
              >
                <Card
                  hoverable
                  style={{
                    width: "320px",
                    height: "400px",
                    textAlign: "center",
                    marginTop: "10px",
                    fontSize: "15px",
                    fontWeight: "700",
                    
                  }}
                  cover={
                    <img
                      alt="image"
                      src={p.image}
                      style={{
                        width: "220px",
                        height: "240px",
                        marginLeft: "50px",
                        marginTop: "15px",
                        
                      }}
                    />
                  }
                >
                  
                  <Meta title={p.title} />
                  
                  <Space style={{marginTop:"8px"}}>
                  <Text italic >${p.price}</Text>
                  </Space>
                  
                  <Button type="primary" ghost
                    style={{ margin: "10px",display:"flex", marginLeft:"85px" }}
                    onClick={() => dispatch(addToCart(p))}
                  >
                    Add to cart
                  </Button>
                  
                </Card>
              </Content>
            </>
          );
        })}
      </Row>
    </Content>
  );
};

export default ProductData;
