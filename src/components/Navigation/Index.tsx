import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Layout, Menu, Space, Image } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { StyledLink } from "./styles";

const { Header } = Layout;
const {Item} = Menu;

export const Navigate = (title: any, total: any) => {
  return (
    <Header
      style={{
        width: "100%",
        position: "fixed",
        zIndex: "10",
        background: "linear-gradient(to right, #141e30, #243b55)",
      }}
    >
      
      <Menu
        style={{
          display: "block",
          background: "linear-gradient(to right, #141e30, #243b55)",
          borderBottom:"0px"
        }}
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
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
            <ShoppingCartOutlined style={{ fontSize: "20px" }} />
          </StyledLink>
        </Menu.Item>

        <Menu.Item key="item4" title="Sign-In" style={{ float: "right" }}>
          <StyledLink to="/Form">
            <UserOutlined style={{ fontSize: "20px" }} />
          </StyledLink>
        </Menu.Item>

        <Menu.Item
          key="item3"
          title="table"
          style={{ fontSize: "18px", float: "right" }}
        >
          <StyledLink to="/Table">
            Table
          </StyledLink>
        </Menu.Item>

        <Menu.Item
          key="item3.1"
          title="Shop"
          style={{ fontSize: "18px", float: "right" }}
        >
          <StyledLink to="/Shop">
            Shop
          </StyledLink>
        </Menu.Item>

        <Menu.Item
          key="item1"
          title="home"
          style={{ fontSize: "18px", float: "right", color: "red" }}
        >
          <StyledLink to="/Home">Home</StyledLink>
        </Menu.Item>
      </Menu>
      
    </Header>
  );
};

export default Navigate;
