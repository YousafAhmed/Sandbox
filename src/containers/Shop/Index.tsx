import React from "react";
import { Card, Layout, Row, Typography, Button, Space } from "antd";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApiFetch } from "./shopSlice";
import { addToCart } from "../Cart/cartslice";
import { Container, Cardcontainer, Buttonstyle, Subcontainer } from "./styles";

const { Content } = Layout;
const { Meta } = Card;
const { Text } = Typography;

const ProductData = () => {
  const products = useSelector((state: any) => state.product.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApiFetch());
  }, [dispatch]);

  return (
    <Container>
      <Row gutter={50}>
        {products.map((p: any) => {
          return (
            <>
              <Subcontainer>
                <Cardcontainer
                  hoverable
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
                  <Meta style={{ color: "#29465B" }} title={p.title} />

                  <Space style={{ marginTop: "8px" }}>
                    <Text style={{ color: "#29465B" }} italic>
                      ${p.price}
                    </Text>
                  </Space>

                  <Buttonstyle
                    // type="primary"
                    onClick={() => dispatch(addToCart(p))}
                  >
                    Add to cart
                  </Buttonstyle>
                </Cardcontainer>
              </Subcontainer>
            </>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductData;
