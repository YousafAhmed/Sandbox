import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Layout, Menu, Space } from "antd";
import {
  HomeOutlined,
  TableOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import Cart from "../../containers/Cart";

const { Header } = Layout;

export const Navigate = (title: any, total: any) => {
  return (
    <Header style={{width: "100%",position:"fixed",zIndex:"10"}}>
      {/* <div className="logo"> */}
        <Menu
          style={{  display: "block", marginBottom:"50px" }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
        >
          <Menu.Item key="item1" title="home" style={{ fontSize: "18px" }}>
            <Link to="/Home">
              <HomeOutlined style={{ fontSize: "18px" }} /> Home
            </Link>
          </Menu.Item>

          <Menu.Item key="item2" style={{ float: "right" }} title="Cart">
            <Link to = '/CartItem'>
            <ShoppingCartOutlined style={{ fontSize: "20px" }} />
            </Link>
          </Menu.Item>

          <Menu.Item key="item4" title="Sign-In" style={{ float: "right" }}>
            <Link to="/Form">
              <UserOutlined  style={{ fontSize: "20px" }}/>
            </Link>
          </Menu.Item>
          <Menu.Item key="item3" title="table" style={{ fontSize: "18px" }}>
            <Link to="/Table">
              <TableOutlined style={{ fontSize: "18px" }} /> Table
            </Link>
          </Menu.Item>
          <Menu.Item key="item3.1" title="Shop" style={{ fontSize: "18px" }}>
          <Link to="/Shop">Shop</Link>
            {/* <Menu.Item key="item3.1a" title="Option-1">
              
            </Menu.Item> */}
            {/* <Menu.SubMenu key="item3.1b" title="Option-2">
              <Menu.Item key="item3.1b1" title="hey">
                Hey
              </Menu.Item>
            </Menu.SubMenu> */}
          </Menu.Item>
        </Menu>
      {/* </div> */}
    </Header>
  );
};

export default Navigate;
