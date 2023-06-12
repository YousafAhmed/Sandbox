import { Main } from "./containers/Main/Index";
import React from "react";
import Page from "./containers/Homepage/Index";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import TableData from "./containers/UserTable/Index";
import FormPage from "./components/Form/Index";
import ProductData from "./containers/Shop/Index";
import CartItem from "./containers/Cart/cartItem";
import Navigate from "./components/Navigation/Index";
import { Layout } from "antd";
import { Footer } from "antd/lib/layout/layout";

const {Content}= Layout
function App() {
  return (
    <Content>
    <Main/>
    <div className="App">
      <Routes>
        
        {/* <Route path="/" element={<Main />}> */}
          <Route path="Home" element={<Page />} />
          <Route path="Table" element={<TableData />} />
          <Route path="Form" element={<FormPage />} />
          <Route path="Shop" element={<ProductData />} />
          <Route path="CartItem" element={<CartItem />} />
        {/* </Route> */}
      </Routes>

      
    </div>
    <Content>
    <Footer style={{bottom:"0",textAlign: "center"}}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
      </Content>
    </Content>
  );
}

export default App;
