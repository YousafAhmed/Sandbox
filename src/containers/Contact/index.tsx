import React from "react";
import {
  StyledContainer,
  StyledText,
  StyledHeadingContainer,
  StyledSubContainer,
  StyledHeadingText,
  StyledHeaderText,
  StyledContactText,
  StyledFormContainer,
  StyledMainContainer,
  StyledComplaintText,
} from "./styles";
import { Form, message, Input, Select, Button } from "antd";
import { ContactsOutlined } from "@ant-design/icons";
import { useForm } from "antd/lib/form/Form";

const { Option } = Select;
const { TextArea } = Input;

const ContactUs = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const form = useForm();
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
  };

  const onFinishFailed = (errorInfo: any) => {
    return error();
  };
  return (
    <>
      {contextHolder}
      <StyledMainContainer>
        <StyledHeadingContainer>
          <StyledHeaderText>
            <ContactsOutlined style={{ marginTop: "6px" }} /> &nbsp; Contact Us:
          </StyledHeaderText>
          <StyledHeadingText>
            Use the following contact details to contact us or fill up the below
            contact form. We'll respond to your query as soon as possible.
          </StyledHeadingText>
        </StyledHeadingContainer>
      </StyledMainContainer>

      <StyledContainer>
        <StyledSubContainer>
          <StyledContactText>
            <b>Contact Details:</b>
          </StyledContactText>
          <StyledText>
            <b>Address:</b>&nbsp;Shop abc,def street,ghi center,jkl,mno
          </StyledText>
          <StyledText>
            <b>Phone:</b>&nbsp; +9234567890 , +9230987654
          </StyledText>
          <StyledText>
            <b>Email:</b>&nbsp; abcd@gmail.com
          </StyledText>
          <StyledText>
            <b>Website:</b>&nbsp; <u>ShoppingLand.com.pk</u>
          </StyledText>
        </StyledSubContainer>

        <StyledFormContainer>
          <StyledComplaintText>
            <b>Complaint Form:</b>
          </StyledComplaintText>
          <Form
            name="basic"
            labelCol={{ span: 9 }}
            wrapperCol={{ span: 18 }}
            initialValues={{ remember: true }}
            style={{ maxWidth: 1000 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name={["user", "name"]}
              label="Full Name"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="Full Name" />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                  type: "email",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              name={["user", "phone"]}
              label="Phone"
              rules={[
                {
                  required: true,
                  message: "Please input your Number!",
                },
              ]}
            >
              <Input placeholder="Phone Number" />
            </Form.Item>
            <Form.Item
              name="Category"
              label="Category"
              rules={[{ required: true, message: "Please select Category!" }]}
            >
              <Select placeholder="select your category">
                <Option value="Order">Order</Option>
                <Option value="Product">Product</Option>
                <Option value="Return">Return</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Description">
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                style={{
                  marginRight: "0px",

                  background: "#29465b",
                  borderColor: "whitesmoke",
                }}
                type="primary"
                htmlType="submit"
              >
                Submit{" "}
              </Button>
            </Form.Item>
          </Form>
        </StyledFormContainer>
      </StyledContainer>
    </>
  );
};

export default ContactUs;
