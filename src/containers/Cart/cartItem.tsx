import React from "react";
import {
  incrementQuantity,
  decrementQuantity,
  getTotals,
  clearCart,
  removeFromCart,
} from "./cartslice";
import { useDispatch, useSelector } from "react-redux";

import {
  Card,
  Layout,
  PageHeader,
  Space,
  Typography,
  Button,
  Image,
} from "antd";
import {
  DeleteOutlined,
  LeftOutlined,
  RightOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import {
  CardContainer,
  EmptyCartContainer,
  Header,
  HeadingContainer,
  HeadingText,
  ItemText,
  NameText,
  PriceText,
  QuantityText,
  TextContainer,
  TotalText,
  CartContainer,
  TitleText,
  Pricedisplay,
  ArrowButton,
  Quantitydisplay,
  TotalQuantity,
  RemoveButton,
  TotalAmount,
  Fullcartcontainer,
  Cartimg,
  Emptycartimg,
  Emptytext,
  Emptycartbutton,
} from "./styles";

const { Content } = Layout;
const { Text } = Typography;

const CartItem = ({ id }: any) => {
  const products = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getTotals(total));
  // }, [total]);

  if (products < 1) {
    return (
      <EmptyCartContainer>
        <Header
          className="site-page-header"
          onBack={() => history.back()}
          title="Go Back"
        />
        <Emptycartimg preview={false} src="empty-cart.png"></Emptycartimg>
        <Emptytext>Your Cart is empty!</Emptytext>
        <Emptycartbutton size="large" href="/Shop">Go to Shop</Emptycartbutton>
      </EmptyCartContainer>
    );
  }

  return (
    <Fullcartcontainer>
      <Header
        className="site-page-header"
        onBack={() => history.back()}
        title="Go Back"
      />
      <HeadingContainer>
        <HeadingText>
          YOUR CART
          <ShoppingCartOutlined style={{ color: "#29465B" }} />
        </HeadingText>
      </HeadingContainer>

      <TextContainer>
        <ItemText>ITEM</ItemText>
        <NameText>NAME</NameText>
        <PriceText>PRICE</PriceText>
        <QuantityText>QUANTITY</QuantityText>
        <TotalText>TOTAL</TotalText>
      </TextContainer>

      {products.map((p: any) => {
        return (
          <>
            <CartContainer>
              <CardContainer
                hoverable
                cover={<Cartimg preview={false} alt="image" src={p.image} />}
              >
                <Space style={{ display: "flex", margin: "20px" }}>
                  <TitleText title={p.title} />
                  <Pricedisplay>${p.price.toFixed(2)}</Pricedisplay>

                  <ArrowButton onClick={() => dispatch(decrementQuantity(p))}>
                    <LeftOutlined
                      style={{ marginTop: "4px", color: "#29465B" }}
                    />
                  </ArrowButton>
                  <Quantitydisplay>{p.quantity}</Quantitydisplay>

                  <ArrowButton onClick={() => dispatch(incrementQuantity(p))}>
                    <RightOutlined
                      style={{ marginTop: "4px", color: "#29465B" }}
                    />
                  </ArrowButton>

                  <>
                    <TotalQuantity>
                      ${(p.price * p.quantity).toFixed(2)}
                    </TotalQuantity>
                  </>
                  <Space style={{ display: "flex", marginLeft: "30px" }}>
                    <RemoveButton
                      style={{}}
                      onClick={() => dispatch(removeFromCart(p))}
                    >
                      <DeleteOutlined
                        style={{ marginTop: "4px", fontSize: "15px" }}
                      />
                    </RemoveButton>
                  </Space>
                </Space>
              </CardContainer>
            </CartContainer>
          </>
        );
      })}
      <Content>
        <TotalAmount underline>SUB-TOTAL:</TotalAmount>
      </Content>
    </Fullcartcontainer>
  );
};

export default CartItem;
