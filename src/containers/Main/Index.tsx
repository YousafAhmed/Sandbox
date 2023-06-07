import { Divider, Layout } from "antd";
import React from "react";
import { Navigate } from "../../components/Navigation/Index";
import { Outlet } from "react-router-dom";

const { Footer } = Layout;
export const Main = () => {
  return (
    <Layout className="layout">
      <Navigate />

      <Outlet />

      <Divider/>

      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};
