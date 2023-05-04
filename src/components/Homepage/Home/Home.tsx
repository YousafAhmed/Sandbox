import { Layout, PageHeader, Divider } from "antd";

import { Navigate } from "../Navigate";
import BreadCrumbs from "../Breadcrumb";
import FormPage from "../FormInput";
import { Outlet } from "react-router-dom";

const { Content, Footer } = Layout;
export const Home = () => {
  return (
    <Layout className="layout">
      <Navigate />
      
      <Content style={{ padding: "0 50px" }}>
      
        <BreadCrumbs />
        <div className="site-layout-content">
          <PageHeader
            className="site-page-header"
            onBack={() => null}
            title="Details"
            subTitle="Please fill out your details"
          />
          <Divider />
          <FormPage />
        </div>
        
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};
