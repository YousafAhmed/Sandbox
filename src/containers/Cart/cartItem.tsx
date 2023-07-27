import React, { useEffect } from "react";
import {
  incrementQuantity,
  decrementQuantity,
  
  clearCart,
  removeFromCart,
} from "./cartslice";
import { useDispatch, useSelector } from "react-redux";

import {
  Layout,
  Space,
  Button,
  Typography,
  Row,
  Col,
  Divider,
  message,
  List,
} from "antd";
import {
  DeleteFilled,
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
  StyledContinueShopping,
  StyledList,
  StyledCheckoutcontainer,
  StyledCheckoutButton,
} from "./styles";

const { Content } = Layout;
const { Text } = Typography;

const CartItem = ({ id }: any) => {
  const products = useSelector((state: any) => state.cart.cart);
  // const { totalPrice } = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();
 

  let grandTotal = 0;

  let shipping = 10;

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Successful",
    });
  };

  const onFinish = (values: any) => {
    return success();
    // console.log("Success:", values);
  };

  // useEffect(() => {
  //   dispatch(getCartTotal());
  // }, [products]);

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
        <StyledEmptycartbutton type="primary" size="large" href="/Shop">
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
      <Content style={{ display: "flex" }}>
        <Content style={{ width: "835px" }}>
          <StyledTextContainer>
            <StyledItemText>ITEM</StyledItemText>
            <StyledNameText>NAME</StyledNameText>
            <StyledPriceText>PRICE</StyledPriceText>
            <StyledQuantityText>QUANTITY</StyledQuantityText>
            <StyledTotalText>TOTAL</StyledTotalText>
          </StyledTextContainer>

          {products.map((p: any) => {
            grandTotal += p.quantity * p.price;
            return (
              <>
                <StyledCartContainer>
                  <StyledCardContainer
                    hoverable
                    cover={
                      <StyledCartimg
                        preview={false}
                        alt="image"
                        src={p.image}
                      />
                    }
                  >
                    <Space style={{ display: "flex", margin: "20px 0px" }}>
                      <StyledTitleText title={p.title} />
                      <StyledPricedisplay>
                        ${p.price.toFixed(2)}
                      </StyledPricedisplay>

                      <StyledArrowButton
                        onClick={() => dispatch(decrementQuantity(p))}
                      >
                        <LeftOutlined
                          style={{ marginTop: "4px", color: "#29465B" }}
                        />
                      </StyledArrowButton>
                      <StyledQuantitydisplay>
                        {p.quantity}
                      </StyledQuantitydisplay>

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
                          <DeleteFilled
                            style={{
                              marginTop: "4px",
                              fontSize: "15px",
                              color: "red",
                            }}
                          />
                        </StyledRemoveButton>
                      </Space>
                    </Space>
                  </StyledCardContainer>
                </StyledCartContainer>
              </>
            );
          })}

          <Content style={{ display: "flex" }}>
            <StyledClearCart
              type="link"
              // size="large"
              onClick={() => dispatch(clearCart(products))}
            >
              Clear Cart
            </StyledClearCart>
            <StyledContinueShopping type="primary" size="large" href="/Shop">
              Continue shopping
            </StyledContinueShopping>
          </Content>
        </Content>
        <StyledCheckoutcontainer>
          <Content
            style={{
              display: "flex",
              textAlign: "left",
              background: "whitesmoke",
              height: "150px",
            }}
          >
            {contextHolder}
            <Content
              style={{
                marginTop: "15px",
                marginBottom: "45px",
                background: "whitesmoke",
              }}
            >
              <StyledList><b>TOTAL</b>:</StyledList>
              <StyledList><b>SHIPPING</b>:</StyledList>
              <StyledList><b>SUB-TOTAL</b>:</StyledList>
            </Content>
            <Content style={{ textAlign: "right", marginTop: "15px" }}>
              <StyledList style={{ marginRight: "10px" }}>
                ${parseFloat(grandTotal.toFixed(2))}
              </StyledList>
              <StyledList style={{ marginRight: "10px" }}>
                ${shipping.toFixed(2)}
              </StyledList>
              <StyledList style={{ marginRight: "10px" }}>
                ${parseFloat((grandTotal + shipping).toFixed(2))}
              </StyledList>
            </Content>
          </Content>
          <StyledCheckoutButton
            type="primary"
            htmlType="submit"
            onClick={onFinish}
          >
            Checkout
          </StyledCheckoutButton>
        </StyledCheckoutcontainer>
      </Content>
    </StyledFullcartcontainer>
  );
};

export default CartItem;
