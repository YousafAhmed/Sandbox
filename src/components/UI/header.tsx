import React from "react";
import styled from "styled-components";
import { Layout, Button, Menu, Col, Divider, Row } from "antd";
import {
  HomeOutlined,
  TableOutlined,
  AntDesignOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

// const items = [

//   {
//     label: "Home",
//     key: "mail",
//     icon: <HomeOutlined />,
//   },
//   {
//     label: (
//       <a href="https://ant.design" target="blank" rel="noopener noreferrer">
//         Ant Design
//       </a>
//     ),
//     key: "item-1",
//     icon: <AntDesignOutlined />
//   },

//   { label: "Table", key: "item-2", icon: <TableOutlined/> },

//   {
//     label: "sub menu",
//     key: "submenu",
//     float:"right",

//     children: [
//       {
//         type: "group",
//         label: "item 3",
//         key: "submenu-item-1",
//         children: [
//           {
//             label: "sub-item3",
//           },
//         ],
//       },
//     ],
//   },
// ];

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
            <HomeOutlined /> Home
          </Menu.Item>
          <Menu.Item key="item2" style={{ float: "right" }} title="link">
            <a href="https://ant.design">
              <AntDesignOutlined /> Learn More
            </a>
          </Menu.Item>
          <Menu.Item key="item3" title="table">
            <TableOutlined /> Table
          </Menu.Item>
          <Menu.SubMenu title="Menu">
            <Menu.SubMenu title="option-1"><Menu.Item>Hey</Menu.Item></Menu.SubMenu>
            <Menu.Item>option-2</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>
    </Header>
  );
};

export default Navigate;
