import { Layout, Row, Button, Typography, Col, Image } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import React from "react";

const { Content } = Layout;
const { Text } = Typography;

const Foot = () => {
  return (
    <Content>
      <Content style={{ background: "#cdd1ce" }}>
        {/* <Divider orientation="left">Vertical</Divider> */}
        <Row gutter={[24, 36]}>
          <Col span={5}>
            <Content style={{ marginLeft: "150px" }}>
              <Content style={{ marginTop: "30px", marginBottom: "10px" }}>
                <Text style={{ fontSize: "20px" }}>Contact Us!</Text>
              </Content>
              <Button
                style={{
                  padding: "0px 0px",
                  color: "#29465B",
                  marginLeft: "0px",
                }}
                type="link"
                href="/Contact"
              >
                Contact
              </Button>
              <Button
                style={{
                  padding: "0px 0px",
                  color: "#29465B",
                  marginLeft: "0px",
                }}
                type="link"
                href="/Contact"
              >
                Complaint
              </Button>
              <Button
                style={{
                  padding: "0px 0px",
                  color: "#29465B",
                  marginLeft: "0px",
                }}
                type="link"
                href="#"
              >
                We are hiring
              </Button>

              <Content style={{ display: "flex" }}>
                <Button
                  type="link"
                  style={{
                    fontSize: "20px",
                    padding: "0px 0px",
                    color: "#29465B",
                  }}
                  href="#"
                >
                  <InstagramOutlined />
                </Button>
                <Button
                  type="link"
                  style={{
                    fontSize: "20px",
                    padding: "0px 0px",
                    color: "#29465B",
                  }}
                  href="#"
                >
                  <TwitterOutlined />
                </Button>
                <Button
                  type="link"
                  style={{
                    fontSize: "20px",
                    padding: "0px 0px",
                    color: "#29465B",
                  }}
                  href="#"
                >
                  <FacebookOutlined />
                </Button>
              </Content>
            </Content>
          </Col>
          <Col span={5}>
            <Content style={{ marginLeft: "150px" }}>
              <Content style={{ marginTop: "30px", marginBottom: "10px" }}>
                <Text style={{ fontSize: "20px" }}>Help</Text>
              </Content>
              <Button
                style={{
                  padding: "0px 0px",
                  color: "#29465B",
                  marginLeft: "0px",
                }}
                type="link"
                href="#"
              >
                Shipping Details
              </Button>

              <Button
                style={{
                  padding: "0px 0px",
                  color: "#29465B",
                  marginLeft: "0px",
                }}
                type="link"
                href="#"
              >
                Privacy Policy
              </Button>

              <Button
                style={{
                  padding: "0px 0px",
                  color: "#29465B",
                  marginLeft: "0px",
                }}
                type="link"
                href="#"
              >
                FAQs
              </Button>
            </Content>
          </Col>
          <Col span={6}>
            <Content style={{ marginLeft: "150px", marginBottom: "40px" }}>
              <Content style={{ marginTop: "30px", marginBottom: "10px" }}>
                <Text style={{ fontSize: "20px" }}>Address</Text>
              </Content>
              <Text>Shop abc,def street,ghi center,jkl,mno, Pakistan</Text>
              <Text> +9234567890321 </Text>
              <Text>
                {" "}
                &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 09:30 AM to 05:30 PM
                (Monday - Saturday )
              </Text>
            </Content>
          </Col>
          <Col span={6}>
            <Content style={{ marginTop: "85px", marginLeft: "60px" }}>
              <Image
                src="logo.PNG"
                style={{
                  fontSize: "20px",
                  width: "200px",
                  height: "55px",
                  marginLeft: "0",
                }}
                preview={false}
              ></Image>
            </Content>
          </Col>
        </Row>
      </Content>
    </Content>
  );
};
export default Foot;
