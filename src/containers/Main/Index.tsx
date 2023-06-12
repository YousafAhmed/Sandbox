import { Divider, Layout } from "antd";
import React from "react";
import { Navigate } from "../../components/Navigation/Index";
import { Outlet } from "react-router-dom";
import Page from "../Homepage/Index";

const { Footer } = Layout;
export const Main = () => {
  return (
    <Layout className="layout">
      <Navigate/>
      
      <Outlet />

      <Divider />

      
    </Layout>
  );
};
