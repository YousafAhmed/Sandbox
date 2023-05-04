import { Button, Form, message, Input, Checkbox } from "antd";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: black;
  color: white;
`;


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
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    return error();
    console.log("Failed:", errorInfo);
  };

  return (
    <>
    {contextHolder}
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
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
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
    </>
  );
};

export default FormPage;