import {
  Carousel,
  Typography,
  Card,
  Space,
  Row,
  Modal,
  Image,
  Divider,
  Layout,
  Form,
  Input,
  message,
  Button,
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { useEffect, useState } from "react";
import { getApiFetch } from "./previewSlice";
import { addToCart } from "../Cart/cartslice";

import {
  StyledButtonstyle,
  StyledContainer,
  StyledHeading,
  StyledHeading2,
  StyledImage1,
  StyledImage2,
  StyledImage3,
  StyledImage4,
  StyledPara,
  StyledSubContainer,
  StyledCardcontainer,
  StyledCardimg,
  StyledPreviewContainer,
  StyledPreviewSubcontainer,
  StyledButton,
  StyledCartButton,
  StyledHeading3,
  StyledProductofDay,
  StyledAddToCart,
  StyledSignupButton,
  StyledColorButton,
} from "./styles";

const contentStyle: React.CSSProperties = {
  height: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "linear-gradient(to right, #bdc3c7, #2c3e50)",
};

const { Content } = Layout;
const { Text } = Typography;
const { Meta } = Card;

const Page = () => {
  const previews = useSelector((state: any) => state.preview.preview);
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApiFetch());
    console.log("sent");
  }, [dispatch]);

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Successfully Signed Up!",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Please enter your email",
    });
  };

  const errorinfo = () => {
    messageApi.open({
      type: "error",
      content: "Please enter your email",
    });
  };

  const onFinish = (values: any) => {
    return success();
    // console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    return errorinfo();
    // console.log("Failed:", errorInfo);
  };

  return (
    <StyledContainer>
      <Carousel
        pauseOnHover={false}
        autoplay
        draggable
        style={{ background: "linear-gradient(to right, #bdc3c7, #2c3e50)" }}
      >
        <StyledSubContainer>
          <StyledImage1 src="men-shirt.png" preview={false} />
          <StyledHeading>Lively wears for Men.</StyledHeading>
          <StyledPara>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            vitae quidem accusantium dolor eos, pariatur dolorem nihil nesciunt
            doloremque. Vero, ea est! Ullam cum amet rem consequatur voluptates
            doloremque quidem?consectetur adipisicing elit. Delectus vitae
            quidem accusantium dolor eos?
          </StyledPara>
          <StyledButtonstyle type="text" size="large" href="/Shop">
            Shop now!
          </StyledButtonstyle>
        </StyledSubContainer>
        <StyledSubContainer>
          <StyledImage2 src="women-dress.png" preview={false} />
          <StyledHeading>Elegant clothing for women .</StyledHeading>
          <StyledPara>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            vitae quidem accusantium dolor eos, pariatur dolorem nihil nesciunt
            doloremque. Vero, ea est! Ullam cum amet rem consequatur voluptates
            doloremque quidem?consectetur adipisicing elit. Delectus vitae
            quidem accusantium dolor eos?
          </StyledPara>
          <StyledButtonstyle type="text" size="large" href="/Shop">
            Shop now!
          </StyledButtonstyle>
        </StyledSubContainer>
        <StyledSubContainer>
          <StyledImage3 src="jewelery.png" preview={false} />
          <StyledHeading>Jewelery to surprise your loved one.</StyledHeading>
          <StyledPara>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            vitae quidem accusantium dolor eos, pariatur dolorem nihil nesciunt
            doloremque. Vero, ea est! Ullam cum amet rem consequatur voluptates
            doloremque quidem?consectetur adipisicing elit. Delectus vitae
            quidem accusantium dolor eos?
          </StyledPara>
          <StyledButtonstyle type="text" size="large" href="/Shop">
            Shop now!
          </StyledButtonstyle>
        </StyledSubContainer>
        <StyledSubContainer>
          <StyledImage4 src="electronic.png" preview={false} />
          <StyledHeading>All the new tech just a click away.</StyledHeading>
          <StyledPara>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            vitae quidem accusantium dolor eos, pariatur dolorem nihil nesciunt
            doloremque. Vero, ea est! Ullam cum amet rem consequatur voluptates
            doloremque quidem?consectetur adipisicing elit. Delectus vitae
            quidem accusantium dolor eos?
          </StyledPara>
          <StyledButtonstyle type="text" size="large" href="/Shop">
            Shop now!
          </StyledButtonstyle>
        </StyledSubContainer>
      </Carousel>

      <StyledHeading2>Latest in Men's Fashion</StyledHeading2>

      <StyledPreviewContainer>
        <Row gutter={80}>
          {previews.map((p: any) => {
            if (p.category === "men's clothing")
              return (
                <>
                  <StyledPreviewSubcontainer>
                    <StyledCardcontainer
                      hoverable
                      cover={
                        <StyledCardimg
                          alt="image"
                          src={p.image}
                          preview={false}
                        />
                      }
                    >
                      <Meta
                        style={{ color: "#29465B", marginTop: "0px" }}
                        title={p.title}
                      />

                      <Space style={{ marginTop: "8px" }}>
                        <Text style={{ color: "#29465B" }} italic>
                          ${p.price.toFixed(2)}
                        </Text>
                      </Space>
                      <StyledButton
                        size="large"
                        type="primary"
                        onClick={(e) => setModalOpen(true)}
                      >
                        Shop now!
                      </StyledButton>

                      <Modal
                        centered
                        open={modalOpen}
                        onOk={() => setModalOpen(false)}
                        onCancel={() => setModalOpen(false)}
                        footer={null}
                      >
                        <StyledCardimg
                          src={p.image}
                          preview={false}
                          alt="Image"
                        />
                        {/* <Text style={{marginTop:"5px"}}>{p.title}</Text> */}
                        <StyledCartButton
                          size="large"
                          type="primary"
                          onClick={() => dispatch(addToCart(p))}
                        >
                          Add to cart
                        </StyledCartButton>
                      </Modal>
                    </StyledCardcontainer>
                  </StyledPreviewSubcontainer>
                </>
              );
          })}
        </Row>
      </StyledPreviewContainer>
      <StyledHeading3>
        <u>Product of the Day!</u>
      </StyledHeading3>
      <StyledProductofDay>
        {previews.map((p: any) => {
          if (p.id === 14)
            return (
              <>
                <Image
                  style={{
                    marginTop: "20px",
                    marginBottom:"20px",
                    marginLeft: "40px",
                    height: "90%",
                    width: "92%",
                  }}
                  preview={false}
                  src={p.image}
                />
                <Content style={{ background: "#cdd1ce", marginLeft: "40px",height:"420px" }}>
                  <Text
                    style={{
                      display: "block",
                      // marginLeft: "10px",
                      marginBottom: "30px",
                      fontWeight: "bold",
                      fontSize: "20px",
                      width: "100px",
                      textAlign: "center",
                      color: "whitesmoke",
                      background: "#29465b",
                    }}
                  >
                    Save 25%
                  </Text>
                  <Text
                    style={{
                      display: "block",
                      marginLeft: "30px",
                      marginRight: "30px",
                      fontWeight: "bold",
                      fontSize: "26px",
                      width: "700px",
                      textAlign: "left",
                      color: "#29465b",
                    }}
                  >
                    {p.title}
                  </Text>
                  <Divider></Divider>

                  <Text
                    style={{
                      display: "block",
                      marginLeft: "30px",
                      fontWeight: "bold",
                      fontSize: "20px",
                      width: "400px",
                      textAlign: "left",
                      color: "#29465b",
                    }}
                  >
                    Price: $749.99 <s style={{ color: "grey" }}>${p.price}</s>
                  </Text>

                  <Text
                    style={{
                      display: "block",
                      marginLeft: "30px",
                      marginTop: "8px",
                      fontWeight: "bold",
                      fontSize: "16px",
                      width: "400px",
                      textAlign: "left",
                      color: "#29465b",
                    }}
                  >
                    Warranty: 1-Year Warranty
                  </Text>

                  <Content style={{ display: "flex" }}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: "16px",
                        marginLeft: "30px",
                        marginTop: "25px",
                        textAlign: "left",
                        color: "#29465b",
                      }}
                    >
                      Color-Family: &nbsp;
                    </Text>
                    <StyledColorButton
                      style={{
                        color: "white",
                        background: "black",
                      }}
                    >
                      black
                    </StyledColorButton>
                    <StyledColorButton
                      style={{
                        background: "silver",
                      }}
                    >
                      Silver
                    </StyledColorButton>
                    <StyledColorButton
                      style={{
                        background: "white",
                      }}
                    >
                      White
                    </StyledColorButton>
                  </Content>

                  <StyledAddToCart
                    onClick={() => dispatch(addToCart(p))}
                    type="primary"
                    size="large"
                  >
                    Add to Cart
                  </StyledAddToCart>
                </Content>
              </>
            );
        })}
      </StyledProductofDay>

      <Content
        style={{
          background: "#29465b",
          marginTop: "50px",
          marginLeft: "40px",
          marginRight: "40px",
          boxShadow: "2px 2px 10px #29465b",
        }}
      >
        <Text
          style={{ color: "whitesmoke", fontSize: "16px", marginTop: "20px" }}
        >
          Sign up to get the latest update on sales, new products and more...
        </Text>
        {contextHolder}
        <Form
          name="basic"
          labelCol={{ span: 9 }}
          wrapperCol={{ span: 18 }}
          initialValues={{ remember: true }}
          style={{ maxWidth: 860, marginTop: "15px", marginLeft: "45px" }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            style={{ color: "whitesmoke" }}
            label="Email"
            name="Email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <StyledSignupButton
              // style={{
              //   marginBottom: "15px",
              //   marginLeft: "50px",
              //   background: "#29465b",
              //   borderColor: "whitesmoke",
              // }}
              type="primary"
              htmlType="submit"
            >
              Sign Up!
            </StyledSignupButton>
            {/* <StyledButton>Button</StyledButton> */}
          </Form.Item>
        </Form>
      </Content>
    </StyledContainer>
  );
};
export default Page;
