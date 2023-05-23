import React from "react";
import { useState, SetStateAction, Dispatch } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Modal, Input, Table, Space } from "antd";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../containers/UserTable/userRedux/userslice";

type userTableProps = {
  dataSource: Object[];
  setDataSource: Dispatch<SetStateAction<any[]>>;
  loading: boolean;
};

const Tablefunc = ({ dataSource, setDataSource, loading }: userTableProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editRec, setEditRec] = useState<any>({});
  const dispatch = useDispatch();

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
      render: (record: any) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEdit(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDelete(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onDelete = (record: any) => {
    Modal.confirm({
      title: "Are you sure?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        dispatch(deleteUser(record));
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
    <>
      <Modal
        title="Make changes"
        open={isEditing}
        okText="Save"
        onOk={() => {
          saveEdit();
          setDataSource((pre: any) => {
            return pre.map((data: any) => {
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
        <Space
          direction="horizontal"
          size="large"
          style={{ display: "flex", padding: "30px" }}
        >
          <Input
            title="Name"
            value={editRec.name}
            onChange={(e) => {
              setEditRec((pre: any) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />

          <Input
            title="Email"
            value={editRec.email}
            onChange={(e) => {
              setEditRec((pre: any) => {
                return { ...pre, email: e.target.value };
              });
            }}
          />
        </Space>

        <Space
          direction="vertical"
          size="large"
          style={{ display: "flex", padding: "30px" }}
        >
          <Input
            value={editRec.item}
            onChange={(e) => {
              setEditRec((pre: any) => {
                return { ...pre, item: e.target.value };
              });
            }}
          />
        </Space>
      </Modal>
      <Table
        bordered={true}
        size="small"
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        rowKey="userId"
      ></Table>
    </>
  );
};

export default Tablefunc;
