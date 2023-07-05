import React, { useEffect } from "react";
import {
  incrementQuantity,
  decrementQuantity,
  getTotals,
  clearCart,
  removeFromCart,
} from "./cartslice";
import { useDispatch, useSelector } from "react-redux";

import { Layout, Space, Button } from "antd";
import {
  DeleteOutlined,
  LeftOutlined,
  RightOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import {
  StyledCardContainer,
  StyledEmptyCartContainer,
  StyledHeader,
  StyledHeadingContainer,
  StyledHeadingText,
  StyledItemText,
  StyledNameText,
  StyledPriceText,
  StyledQuantityText,
  StyledTextContainer,
  StyledTotalText,
  StyledCartContainer,
  StyledTitleText,
  StyledPricedisplay,
  StyledArrowButton,
  StyledQuantitydisplay,
  StyledTotalQuantity,
  StyledRemoveButton,
  StyledTotalAmount,
  StyledFullcartcontainer,
  StyledCartimg,
  StyledEmptycartimg,
  StyledEmptytext,
  StyledEmptycartbutton,
  StyledClearCart,
} from "./styles";

const { Content } = Layout;

const CartItem = ({ id }: any) => {
  const products = useSelector((state: any) => state.cart.cart);
  const { total } = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals(total));
  }, [total]);

  if (products < 1) {
    return (
      <StyledEmptyCartContainer>
        <StyledHeader
          className="site-page-header"
          onBack={() => history.back()}
          title="Go Back"
        />
        <StyledEmptycartimg
          preview={false}
          src="empty-cart.png"
        ></StyledEmptycartimg>
        <StyledEmptytext>Your Cart is empty!</StyledEmptytext>
        <StyledEmptycartbutton size="large" href="/Shop">
          Go to Shop
        </StyledEmptycartbutton>
      </StyledEmptyCartContainer>
    );
  }

  return (
    <StyledFullcartcontainer>
      <StyledHeader
        className="site-page-header"
        onBack={() => history.back()}
        title="Go Back"
      />
      <StyledHeadingContainer>
        <StyledHeadingText>
          YOUR CART
          <ShoppingCartOutlined style={{ color: "#29465B" }} />
        </StyledHeadingText>
      </StyledHeadingContainer>

      <StyledTextContainer>
        <StyledItemText>ITEM</StyledItemText>
        <StyledNameText>NAME</StyledNameText>
        <StyledPriceText>PRICE</StyledPriceText>
        <StyledQuantityText>QUANTITY</StyledQuantityText>
        <StyledTotalText>TOTAL</StyledTotalText>
      </StyledTextContainer>

      {products.map((p: any) => {
        return (
          <>
            <StyledCartContainer>
              <StyledCardContainer
                hoverable
                cover={
                  <StyledCartimg preview={false} alt="image" src={p.image} />
                }
              >
                <Space style={{ display: "flex", margin: "20px" }}>
                  <StyledTitleText title={p.title} />
                  <StyledPricedisplay>${p.price.toFixed(2)}</StyledPricedisplay>

                  <StyledArrowButton
                    onClick={() => dispatch(decrementQuantity(p))}
                  >
                    <LeftOutlined
                      style={{ marginTop: "4px", color: "#29465B" }}
                    />
                  </StyledArrowButton>
                  <StyledQuantitydisplay>{p.quantity}</StyledQuantitydisplay>

                  <StyledArrowButton
                    onClick={() => dispatch(incrementQuantity(p))}
                  >
                    <RightOutlined
                      style={{ marginTop: "4px", color: "#29465B" }}
                    />
                  </StyledArrowButton>

                  <>
                    <StyledTotalQuantity>
                      ${(p.price * p.quantity).toFixed(2)}
                    </StyledTotalQuantity>
                  </>
                  <Space style={{ display: "flex", marginLeft: "30px" }}>
                    <StyledRemoveButton
                      onClick={() => dispatch(removeFromCart(p))}
                    >
                      <DeleteOutlined
                        style={{ marginTop: "4px", fontSize: "15px" }}
                      />
                    </StyledRemoveButton>
                  </Space>
                </Space>
              </StyledCardContainer>
            </StyledCartContainer>
          </>
        );
      })}
      <Content>
        <StyledTotalAmount underline>SUB-TOTAL: {total}</StyledTotalAmount>
        <StyledClearCart size="large"  onClick={() => dispatch(clearCart(products))}>Clear Cart</StyledClearCart>
      </Content>
    </StyledFullcartcontainer>
  );
};

export default CartItem;
