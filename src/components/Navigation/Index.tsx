import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Dropdown, Layout, Menu, Space, Image } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { StyledLink, StyledMenu } from "./styles";

const { Header } = Layout;

export const Navigate = (title: any, total: any) => {
  const [cartCounter, setCartCounter] = useState(0);
  const products = useSelector((state: any) => state.cart.cart);
  useEffect(() => {
    setCartCounter(products.length);
  }, [products]);
  return (
    <Header
      style={{
        width: "100%",
        position: "fixed",
        zIndex: "10",
        background: "linear-gradient(to right, #141e30, #243b55)",
      }}
    >
      <StyledMenu
        style={{
          display: "block",
          background: "linear-gradient(to right, #141e30, #243b55)",
          borderBottom: "0px",
        }}
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["item1"]}
      >
        <Menu.Item
          key="logoItem"
          title="Logo"
          style={{ float: "left", width: "240px" }}
        >
          <StyledLink to="/Home">
            <Image
              src="logo.PNG"
              style={{
                fontSize: "20px",
                width: "200px",
                height: "55px",
                marginLeft: "0",
              }}
              preview={false}
            />
          </StyledLink>
        </Menu.Item>

        <Menu.Item key="item2" style={{ float: "right" }} title="Cart">
          <StyledLink to="/CartItem">
            <ShoppingCartOutlined style={{ fontSize: "24px" }} /> {cartCounter}
            {/* {console.log(cartTotalQuantity)} */}
          </StyledLink>
        </Menu.Item>

        <Menu.Item
          key="item4"
          title="Sign-In"
          style={{ float: "right", fontSize: "17px" }}
        >
          <StyledLink to="/Form">Sign in</StyledLink>
        </Menu.Item>

        {/* <Menu.Item
          key="item3"
          title="table"
          style={{ fontSize: "18px", float: "right" }}
        >
          <StyledLink to="/Table">
            Table
          </StyledLink>
        </Menu.Item> */}

        <Menu.Item
          key="item3"
          title="table"
          style={{ fontSize: "17px", float: "right" }}
        >
          <StyledLink to="/Contact">Contact us</StyledLink>
        </Menu.Item>

        <Menu.Item
          key="item3.1"
          title="Shop"
          style={{ fontSize: "17px", float: "right" }}
        >
          <StyledLink to="/Shop">Shop</StyledLink>
        </Menu.Item>

        <Menu.Item
          key="item1"
          title="home"
          style={{ fontSize: "17px", float: "right", color: "red" }}
        >
          <StyledLink to="/Home">Home</StyledLink>
        </Menu.Item>
      </StyledMenu>
    </Header>
  );
};

export default Navigate;
