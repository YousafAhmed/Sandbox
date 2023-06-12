import { hover } from "@testing-library/user-event/dist/hover";
import { Layout, Card, Button } from "antd";
import styled from "styled-components";

const { Content } = Layout;

export const Container = styled(Content)`
  margin-left: 40px;
  margin-right: 40px;
`;

export const Subcontainer = styled(Content)`
  width: 280px;
  margin-left: 5px;
  margin-top: 20px;
`;

export const Cardcontainer = styled(Card)`
  width: 320px;
  height: 400px;
  text-align: center;
  margin-top: 10px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 5%;
  border-width: 3px;
  border-color: #29465b;
  // border:"500px"
`;

export const Buttonstyle = styled(Button)`
  margin: 10px;
  display: flex;
  margin-left: 85px;
  border-radius: 5%;
  background: #29465b;
  color: white;
`;
