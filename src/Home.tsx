import {
  Breadcrumb,
  Layout,
  Menu,
  PageHeader,
  Button,
  Divider,
  Checkbox,
  Form,
  Input,
  message,
} from "antd";


import styled from "styled-components";

// Styled component named StyledButton
const StyledButton = styled(Button)`
  background-color: black;
  color: white;
`;



const { Header, Content, Footer } = Layout;

const items = [
  { label: "item 1", key: "item-1" }, // remember to pass the key prop which is required
  {
    label: (
      <a href="https://ant.design" target="blank" rel="noopener noreferrer">
        Ant Design
      </a>
    ),
    key: "item-2",
  },
  {
    label: "sub menu",
    key: "submenu",
    children: [
      {
        type: "group",
        label: "item 3",
        key: "submenu-item-1",
        children: [
          {
            label: "sub-item3" ,
          },
        ],
      },
    ],
  },
];





export const Home = () => {

const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
  messageApi.open({
    type: "success",
    content: "Successfully submitted",
  });
};
const error = () => {
  messageApi.open({
    type: "error",
    content: "Please fill the form",
  });
};

const onFinish = (values: any) => {
  return success();
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  return error();
  console.log("Failed:", errorInfo);
};




  return (
    <Layout className="layout">
      {contextHolder}
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
        />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <PageHeader
            className="site-page-header"
            onBack={() => null}
            title="Title"
            subTitle="This is a subtitle"
          />
          <Divider />
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <StyledButton>Button</StyledButton>
            </Form.Item>
          </Form>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};
