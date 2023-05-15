import React from "react";
import { Layout, Space } from "antd";
import { useState, useEffect } from "react";
import Tablefunc from "../../components/Table/Index";

const { Content } = Layout;

const TableData = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setDataSource(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Content>
      <Space style={{ padding: "50px" }}>
        <Tablefunc
          dataSource={dataSource}
          setDataSource={setDataSource}
          loading={loading}
        />
      </Space>
    </Content>
  );
};

export default TableData;
