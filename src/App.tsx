import { Main } from "./containers/Main/Index";
import React from "react";
import Page from "./containers/Homepage/Index";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import TableData from "./containers/UserTable/Index";
import FormPage from "./components/Form/Index";
import ProductData from "./containers/Shop/Index";
import Cart from "./containers/Cart";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="Home" element={<Page />} />
          <Route path="Table" element={<TableData />} />
          <Route path="Form" element={<FormPage />} />
          <Route path="Shop" element={<ProductData />} />
          {/* <Route path="Cart" element={<Cart />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
