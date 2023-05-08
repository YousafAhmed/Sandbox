import { Layout, PageHeader, Divider } from "antd";

import { Navigate } from "../../components/Navigation/Index";
import BreadCrumbs from "./Breadcrumb";
import FormPage from "./FormInput";
import { Outlet } from "react-router-dom";


const { Content, Footer } = Layout;
export const Main = () => {
  return (
    <Layout className="layout">
      <Navigate />

      <Outlet />
      {/* <Content style={{ padding: "25px 50px" }}>
      
      </Content> */}
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};
