import React from "react";
import { Table } from "antd";
import { useState, useEffect } from "react";

const TableData = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

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

  const columns = [
    {
      key: "1",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "2",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "3",
      title: "Address",
      dataIndex: "address",
      render: (item:any) => item.street,
    },
  ];
  return (
    <Table loading={loading} columns={columns} dataSource={dataSource}></Table>
  );
};

export default TableData;
