import styled from "styled-components";
import { Layout, Image, Typography, Carousel, Button } from "antd";

const { Content } = Layout;
const { Text } = Typography;

export const Container = styled(Content)`
  margin-top: 15px;
  height: 50%;
  margin-bottom: 100px;
`;

export const SubContainer = styled(Content)`
  background: linear-gradient(to right, #bdc3c7, #2c3e50);
  display: flex;
  margin-top: 20px;
  height: 360px;
  .ant-image {
    position: relative;
    display: block;
  }
`;

export const Image1 = styled(Image)`
  border-color: black;
  display: flex;
  width: 23%;
  margin: auto;
  float: left;
  margin-left: 30px;
  margin-right: 50px;
  margin-top: 0px;
  border-radius: 35%;
  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(70%, transparent), to(rgba(250, 250, 250, 0.1)));
`;

export const Image2 = styled(Image)`
  border-color: black;
  display: flex;
  width: 15%;
  margin: auto;
  float: left;
  margin-left: 80px;
  margin-right: 50px;
  margin-top: 2px;
  border-radius: 25%;
  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(70%, transparent), to(rgba(250, 250, 250, 0.1)));
`;

export const Image3 = styled(Image)`
  border-color: black;
  display: flex;
  width: 25%;
  margin: auto;
  float: left;
  margin-left: 50px;
  margin-top: 30px;
  border-radius: 25%;
`;

export const Image4 = styled(Image)`
  border-color: black;
  display: flex;
  width: 18%;
  margin: auto;
  float: left;
  margin-left: 80px;
  margin-right: 50px;
  margin-top: 30px;
  border-radius: 25%;
  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(70%, transparent), to(rgba(250, 250, 250, 0.4)));
`;

export const Heading = styled(Text)`
  display: flex;
  margin: 10px;
  width: 800px;
  font-size: 40px;
  font-weight: bold;
  /* -webkit-text-stroke: 1.5px #29465b; */ // text border color
  text-align: left;
  color: #bfc8d6;
  font-family: 'Aclonica', sans-serif;

`;
export const Para = styled(Text)`
  display: flex;
  margin-top: 40px;
  width: 800px;
  font-size: 18px;
  /* font-weight: bold; */
  text-align: left;
  color: #bfc8d6;
  font-family: "Russo One", sans-serif;
`;

export const Buttonstyle = styled(Button)`
  margin: 10px;
  font-size: 16px;
  display: flex;
  float: right;
  margin-right: 150px;
  margin-top: 50px;
  text-align: center;
  /* margin-left: 80px; */
  border-radius: 5%;
  background: #29465b;
  color: white;
  &:hover {
    color: white;
    background: gray;
  }
`;

// export const Headingcontainer = styled(Content)`
//   margin-top: 50px;
// `

export const Heading2 = styled(Button)`
  height: 80px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  font-family: 'Aclonica', sans-serif;
  color: #29465b;
  margin-top: 30px;
  :hover {
    background: #eeeeee;
    color: #212a3e;
  }
`;
