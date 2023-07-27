import { Main } from "./containers/Main/Index";
import React from "react";
import Page from "./containers/Homepage/Index";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import TableData from "./containers/UserTable/Index";
import FormPage from "./components/Form/Index";
import ProductData from "./containers/Shop/Index";
import CartItem from "./containers/Cart/cartItem";
import ContactUs from "./containers/Contact";
import Navigate from "./components/Navigation/Index";
import { Layout, Typography, Divider, Col, Row, Button,Image } from "antd";
import { Footer } from "antd/lib/layout/layout";
import {
  InstagramOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import Foot from "./Footer";

const { Text } = Typography;
const { Content } = Layout;
function App() {
  return (
    <Content style={{overflowX:"hidden", background:"whitesmoke"}}>
      <Main />
      <div className="App">
        <Routes>
          <Route index element = {<Page/>}/>
          {/* <Route path="/" element={<Main />}/> */}
          <Route path="Home" element={<Page />} />
          <Route path="Contact" element={<ContactUs />} />
          {/* <Route path="Table" element={<TableData />} /> */}
          <Route path="Form" element={<FormPage />} />
          <Route path="Shop" element={<ProductData />} />
          <Route path="CartItem" element={<CartItem />} />
          {/* </Route> */}
        </Routes>
      </div>
      <Foot/>
      <Footer style={{ bottom: "0", textAlign: "center" }}>
          ShoppingLand ©2023.All rights reserved.
        </Footer>
    </Content>
  );
}

export default App;
