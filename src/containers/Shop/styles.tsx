import { hover } from "@testing-library/user-event/dist/hover";
import { Layout, Card, Button, Image } from "antd";
import styled from "styled-components";

const { Content } = Layout;

export const StyledContainer = styled(Content)`
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const StyledSubcontainer = styled(Content)`
  width: 280px;
  margin-left: 5px;
  margin-top: 10px;
  /* margin-bottom: 20px; */
`;

export const StyledCardcontainer = styled(Card)`
  width: 320px;
  height: 400px;
  text-align: center;

  font-size: 15px;
  font-weight: 700;
  /* border-radius: 5%;
  border-width: 3px; */
  border-color: #29465b;
  &:hover {
    border-color: #84a7a1;
  }
`;

export const StyledCardimg = styled(Image)`
  width: 220px;
  height: 240px;
  /* margin-Left: 50px; */
  margin-top: 15px;
  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(70%, transparent), to(rgba(250, 250, 250, 0.1)));

`;

export const Styledbutton = styled(Button)`
  margin: 10px;
  font-size: 16px;
  display: flex;
  text-align: center;
  margin-left: 80px;
  border-radius: 5%;
  background: #29465b;
  color: white;
  &:hover {
    color: white;
    background: gray;
  }
`;
