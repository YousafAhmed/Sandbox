import React from "react";
import { Layout, Space } from "antd";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersFetch } from "../../redux/userslice";
import Tablefunc from "../../components/Table/Index";
import { User } from "../../redux/types";

const { Content } = Layout;

const TableData = () => {
  // const [loading, setLoading] = useState(false);
  // const [dataSource, setDataSource] = useState<any[]>([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setDataSource(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  const users = useSelector((state: any) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersFetch());
    console.log("saga triggered")
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
