import { Carousel, Typography, Card, Space, Row } from "antd";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { useEffect } from "react";
import { getApiFetch } from "./previewSlice";

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
} from "./styles";

const contentStyle: React.CSSProperties = {
  height: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "linear-gradient(to right, #bdc3c7, #2c3e50)",
};

const { Text } = Typography;
const { Meta } = Card;

const Page = () => {
  const previews = useSelector((state: any) => state.preview.preview);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApiFetch());
    console.log("sent");
  }, [dispatch]);

  return (
    <StyledContainer>
      <Carousel
        pauseOnHover={false}
        autoplay
        draggable
        style={{ background: " linear-gradient(to right, #bdc3c7, #2c3e50)" }}
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
          <StyledButtonstyle size="large" href="/Shop">
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
          <StyledButtonstyle size="large" href="/Shop">
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
          <StyledButtonstyle size="large" href="/Shop">
            Shop now!
          </StyledButtonstyle>
        </StyledSubContainer>
        <StyledSubContainer>
          <StyledImage4 src="electronic.png" preview={false} />
          <StyledHeading>All new tech just a click away.</StyledHeading>
          <StyledPara>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            vitae quidem accusantium dolor eos, pariatur dolorem nihil nesciunt
            doloremque. Vero, ea est! Ullam cum amet rem consequatur voluptates
            doloremque quidem?consectetur adipisicing elit. Delectus vitae
            quidem accusantium dolor eos?
          </StyledPara>
          <StyledButtonstyle size="large" href="/Shop">
            Shop now!
          </StyledButtonstyle>
        </StyledSubContainer>
      </Carousel>

      <StyledHeading2 type="text">
        Latest in &nbsp;
        <b style={{ fontSize: "42px", fontFamily: "Luckiest Guy, cursive" }}>
          <u>Men's</u>
        </b>
        &nbsp; Fashion
      </StyledHeading2>

<StyledPreviewContainer>
      <Row gutter={80}>
      {previews.map((p: any) => {
        return (
          <>
          <StyledPreviewSubcontainer>
            <StyledCardcontainer
              hoverable
              cover={
                <StyledCardimg alt="image" src={p.image} preview={false} />
              }
            >
              <Meta style={{ color: "#29465B", marginTop:"20px" }} title={p.title} />

              <Space style={{ marginTop: "8px" }}>
                <Text style={{ color: "#29465B" }} italic>
                  ${p.price.toFixed(2)}
                </Text>
              </Space>
            </StyledCardcontainer>
            </StyledPreviewSubcontainer>
          </>
        );
      })}
      </Row>
      </StyledPreviewContainer>
      
    </StyledContainer>
    
  );
};
export default Page;
