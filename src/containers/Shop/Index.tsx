import React from "react";
import { Card, Layout, Row, Typography, Breadcrumb, Space, Image } from "antd";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApiFetch } from "./shopSlice";
import { addToCart } from "../Cart/cartslice";
import {
  StyledContainer,
  StyledCardcontainer,
  StyledSubcontainer,
  StyledCardimg,
  Styledbutton,
  StyledCardElectronic,
} from "./styles";

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
    <StyledContainer>
      <Row gutter={50}>
        {products &&
          products.map((p: any) => {
            return (
              <>
                <StyledSubcontainer>
                  {p.category === "electronics" ? (
                    <StyledCardcontainer
                      hoverable
                      cover={
                        <StyledCardElectronic
                          alt="image"
                          src={p.image}
                          preview={false}
                        />
                      }
                    >
                      <Meta style={{ color: "#29465B" }} title={p.title} />

                      <Space style={{ marginTop: "8px" }}>
                        <Text style={{ color: "#29465B" }} italic>
                          ${p.price.toFixed(2)}
                        </Text>
                      </Space>

                      <Styledbutton
                        size="large"
                        // type="text"
                        type="primary"
                        onClick={() => dispatch(addToCart(p))}
                      >
                        Add to cart
                      </Styledbutton>
                    </StyledCardcontainer>
                  ) : (
                    <StyledCardcontainer
                      hoverable
                      cover={
                        <StyledCardimg
                          alt="image"
                          src={p.image}
                          preview={false}
                        />
                      }
                    >
                      <Meta style={{ color: "#29465B" }} title={p.title} />

                      <Space style={{ marginTop: "8px" }}>
                        <Text style={{ color: "#29465B" }} italic>
                          ${p.price.toFixed(2)}
                        </Text>
                      </Space>

                      <Styledbutton
                        size="large"
                        // type="text"
                        type="primary"
                        onClick={() => dispatch(addToCart(p))}
                      >
                        Add to cart
                      </Styledbutton>
                    </StyledCardcontainer>
                  )}
                </StyledSubcontainer>
              </>
            );
          })}
      </Row>
    </StyledContainer>
  );
};

export default ProductData;
