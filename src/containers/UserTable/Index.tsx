import React from "react";
import { Layout, Space } from "antd";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersFetch } from "./userslice";
import Tablefunc from "../../components/Table/Index";

const { Content } = Layout;

const TableData = () => {
  const users = useSelector((state: any) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersFetch());
  }, [dispatch]);

  return (
    <Content>
      <Space style={{ padding: "50px" }}>
        <Tablefunc dataSource={users} setDataSource={users} loading={false} />
      </Space>
    </Content>
  );
};

export default TableData;
