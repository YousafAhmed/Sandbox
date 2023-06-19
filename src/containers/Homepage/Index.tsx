import { Carousel, Typography, Button, Card } from "antd";
import { useSelector } from "react-redux";
import React, { useRef } from "react";
import {
  Buttonstyle,
  Container,
  Heading,
  Heading2,
  Image1,
  Image2,
  Image3,
  Image4,
  Para,
  SubContainer,
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

const Page = ({ category }: any) => {
  const products = useSelector((state: any) => state.product.product);
  console.log(products);
  return (
    <Container>
      <Carousel
        pauseOnHover={false}
        autoplay
        draggable
        style={{ background: " linear-gradient(to right, #bdc3c7, #2c3e50)" }}
      >
        <SubContainer>
          <Image1 src="men-shirt.png" preview={false} />
          <Heading>Lively wears for Men.</Heading>
          <Para>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            vitae quidem accusantium dolor eos, pariatur dolorem nihil nesciunt
            doloremque. Vero, ea est! Ullam cum amet rem consequatur voluptates
            doloremque quidem?consectetur adipisicing elit. Delectus vitae
            quidem accusantium dolor eos?
          </Para>
          <Buttonstyle size="large" href="/Shop">Shop now!</Buttonstyle>
        </SubContainer>
        <SubContainer>
          <Image2 src="women-dress.png" preview={false} />
          <Heading>Elegant clothing for women .</Heading>
          <Para>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            vitae quidem accusantium dolor eos, pariatur dolorem nihil nesciunt
            doloremque. Vero, ea est! Ullam cum amet rem consequatur voluptates
            doloremque quidem?consectetur adipisicing elit. Delectus vitae
            quidem accusantium dolor eos?
          </Para>
          <Buttonstyle size="large" href="/Shop">Shop now!</Buttonstyle>
        </SubContainer>
        <SubContainer>
          <Image3 src="jewelery.png" preview={false} />
          <Heading>Jewelery to surprise your loved one.</Heading>
          <Para>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            vitae quidem accusantium dolor eos, pariatur dolorem nihil nesciunt
            doloremque. Vero, ea est! Ullam cum amet rem consequatur voluptates
            doloremque quidem?consectetur adipisicing elit. Delectus vitae
            quidem accusantium dolor eos?
          </Para>
          <Buttonstyle size="large" href="/Shop">Shop now!</Buttonstyle>
        </SubContainer>
        <SubContainer>
          <Image4 src="electronic.png" preview={false} />
          <Heading>All new tech just a click away.</Heading>
          <Para>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            vitae quidem accusantium dolor eos, pariatur dolorem nihil nesciunt
            doloremque. Vero, ea est! Ullam cum amet rem consequatur voluptates
            doloremque quidem?consectetur adipisicing elit. Delectus vitae
            quidem accusantium dolor eos?
          </Para>
          <Buttonstyle size="large" href="/Shop">Shop now!</Buttonstyle>
        </SubContainer>
      </Carousel>

      <Heading2 type="text">
        Latest in &nbsp;
        <b style={{ fontSize: "42px", fontFamily: "Luckiest Guy, cursive" }}>
          <u>Men's</u>
        </b>
        &nbsp; Fashion
      </Heading2>
    </Container>
  );
};

export default Page;
