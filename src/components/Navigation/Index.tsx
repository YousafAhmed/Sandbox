import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  TableOutlined,
  AntDesignOutlined,
  LoginOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

export const Navigate = () => {
  return (
    <Header>
      <div className="logo">
        <Menu
          style={{ width: "100%", display: "block" }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
        >
          <Menu.Item key="item1" title="home">
            <Link to="/Home">
              <HomeOutlined /> Home
            </Link>
          </Menu.Item>

          <Menu.Item key="item2" style={{ float: "right" }} title="link">
            <a href="https://ant.design">
              <AntDesignOutlined /> Learn More
            </a>
          </Menu.Item>
          <Menu.Item key="item4" title="Sign-In" style={{ float: "right" }}>
            <Link to="/Form">
              Sign In <LoginOutlined />
            </Link>
          </Menu.Item>
          <Menu.Item key="item3" title="table">
            <Link to="/Table">
              <TableOutlined /> Table
            </Link>
          </Menu.Item>
          <Menu.SubMenu key="item3.1" title="Shop" >
            <Menu.Item key="item3.1a" title="Option-1">
              <Link to ='/Shop'>
             Product
             </Link>
            </Menu.Item>
            <Menu.SubMenu key="item3.1b" title="Option-2">
            <Menu.Item key="item3.1b1" title="hey">
                Hey
              </Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>
        </Menu>
      </div>
    </Header>
  );
};

export default Navigate;
