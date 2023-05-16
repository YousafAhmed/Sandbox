import {
  Button,
  Form,
  message,
  Input,
  Checkbox,
  PageHeader,
  Divider,
  Layout,
  
} from "antd";
import styled from "styled-components";
import React from "react";


const StyledButton = styled(Button)`
  background-color: black;
  color: white;
`;

const { Content } = Layout;

const FormPage = () => {
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
    // console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    return error();
    // console.log("Failed:", errorInfo);
  };

  return (
    <>
      {contextHolder}

      
        <PageHeader
          className="site-page-header"
          onBack={() => null}
          title="Details"
          subTitle="Please fill out your details"
        />
        <Divider />
        <Content>
          <Form
            name="basic"
            labelCol={{ span: 9}}
            wrapperCol={{ span: 18 }}
            initialValues={{ remember: true }}
            style = {{maxWidth: 1000}}
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
        </Content>
        
      
    </>
  );
};

export default FormPage;
