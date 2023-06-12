import styled from "styled-components";
import { Layout, Image, Typography } from "antd";

const { Content } = Layout;
const { Text } = Typography;

export const Container = styled(Content)`
  background: linear-gradient(to right, #bdc3c7, #2c3e50);
  margin-top: 15px;
`;

export const SubContainer = styled(Content)`
  display: flex;
  margin-top: 20px;
`;

// export const Img = styled(Image)`
//   border-color: black;
//   display: flex;
//   width: 5%;
//   margin: auto;
//   float: left;
//   margin-left: 140px;
//   margin-top: 35px;
//   border-radius: 50;

// `;

export const Heading = styled(Text)`
  width: 400px;
  font-size: 48px;
  font-weight: 1400;
  color: #bfc8d6;
`;
