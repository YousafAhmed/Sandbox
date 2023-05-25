import React from "react";
import { Card, Grid, Layout, Row } from "antd";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApiFetch } from "./shopSlice";
import { addToCart } from "../Cart/cartslice";

const { Content } = Layout;
const { Meta } = Card;

const ProductData = () => {
  const products = useSelector((state: any) => state.product.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApiFetch());
  }, [dispatch]);

  const handleAddProduct = (product: any) => {
    dispatch(addToCart(product));
  };

  return (
    <Content>
      <Row gutter={50}>
        {products.map((p: any) => {
          return (
            <>
              <Content style={{ padding: "50px" }}>
                <Card
                  hoverable
                  style={{
                    width: 240,
                    textAlign: "center",
                    marginTop: "12px",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                  cover={<img alt="bleh" src={p.image} />}
                >
                  <Meta title={p.title} />
                  <button
                    style={{ margin: "10px" }}
                    onClick={() => handleAddProduct(p)}
                  >
                    Add to cart
                  </button>
                </Card>
              </Content>
              ;
            </>
          );
        })}
      </Row>
    </Content>
  );
};

export default ProductData;
