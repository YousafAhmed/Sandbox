import React from "react";
import { Table, Layout, Modal, Input } from "antd";
import { useState, useEffect } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";


const { Content } = Layout;

const TableData = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editRec, setEditRec] = useState<any>({});

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
      render: (item: any) => item.street,
    },
    {
      key: "4",
      title: "Actions",
      render: (stid: any) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEdit(stid);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDelete(stid);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onDelete = (stid: any) => {
    Modal.confirm({
      title: "Are you sure?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        const newData = dataSource.filter((item: any) => item.id !== stid.id);
        setDataSource(newData);
      },
    });
  };

  const onEdit = (stid: any) => {
    setIsEditing(true);
    setEditRec({ ...stid });
  };

  const saveEdit = () => {
    setIsEditing(false);
    setEditRec({});
  };

  return (
    <Content>
      <Table
        bordered={true}
        size="small"
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        rowKey="userId"
      ></Table>
      <Modal
        title="Make changes"
        open={isEditing}
        okText="Save"
        onOk={() => {
          saveEdit();
          setDataSource((pre) => {
            return pre.map((data) => {
              if (data.id === editRec.id) {
                return editRec;
              } else return data;
            });
          });
        }}
        onCancel={() => {
          saveEdit();
        }}
      >
        <Input
          value={editRec.name}
          onChange={(e) => {
            setEditRec((pre: any) => {
              return { ...pre, name: e.target.value };
            });
          }}
        />
        <Input
          value={editRec.email}
          onChange={(e) => {
            setEditRec((pre: any) => {
              return { ...pre, email: e.target.value };
            });
          }}
        />
        <Input value={editRec.address} />
      </Modal>
    </Content>
  );
};

export default TableData;
