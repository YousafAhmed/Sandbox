import React from "react";
import { Card, Grid, Layout,Row } from "antd";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApiFetch } from "./shopRedux/productSlice";

const { Content } = Layout;

const { Meta } = Card;

const ProductData = () => {
  const products = useSelector((state: any) => state.product.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApiFetch());
  }, [dispatch]);

  // useEffect(() => {
  //   console.log(products);
  // }, [products]);

  console.log(products[10]);

  return (
    <Content>
      <Row gutter = {50}>
      {products.map((p: any) => {
        return (
          <>
          <Content style={{ padding: "50px"}}>
            
            <Card
              hoverable
              style={{ width: 240}}
              cover={<img alt="bleh" src={p.image} />}
            >
              <Meta title={p.title}/>
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
