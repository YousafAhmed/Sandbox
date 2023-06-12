import { Carousel, Typography } from "antd";
import React from "react";
import { Container, Heading, SubContainer } from "./styles";

const contentStyle: React.CSSProperties = {
  height: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "linear-gradient(to right, #bdc3c7, #2c3e50)",
};

const Page = () => {
  return (
    <Container>
      <Carousel>
        <SubContainer>
          <img
            src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
            style={{
              borderColor: "black",
              display: "flex",
              width: "20%",
              margin: "auto",
              float: "left",
              marginLeft: "80px",
              marginTop: "10px",
              borderRadius: "35%",
            }}
          />
          <Heading>Get your wares at cheap price with quality</Heading>
        </SubContainer>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </Container>
  );
};

export default Page;
