import { hover } from "@testing-library/user-event/dist/hover";
import { Layout, Card, Button, Image, Menu } from "antd";
import styled from "styled-components";

const { Content } = Layout;

export const StyledContainer = styled(Content)`
  margin-left: 10px;
  margin-right: 20px;
  margin-top: 20px;
  display: flex;
  margin-bottom: 20px;
  /* background: linear-gradient(to right, #bdc3c7, #2c3e50); */
`;

export const StyledSubcontainer = styled(Content)`
  /* width: 280px; */
  /* margin-left: 25px; */
  margin-top: 10px;
  /* margin-bottom: 20px; */
`;

export const StyledCardcontainer = styled(Card)`
  width: 250px;
  /* margin-right: 20px; */
  height: 350px;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  box-shadow: 1px 1px 10px grey;
  /* border-radius: 5%;
  border-width: 3px; */
  border-color: grey;
  &:hover {
    border-color: #84a7a1;
    box-shadow: 2px 2px 10px #29465b;
  }
`;

export const StyledCardimg = styled(Image)`
  width: 180px;
  height: 200px;
  clip-path: circle(80%);
  /* margin-Left: 50px; */
  margin-top: 15px;
  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(70%, transparent), to(rgba(250, 250, 250, 0.1)));
`;

export const StyledCardElectronic = styled(Image)`
  width: 220px;
  height: 150px;
  /* clip-path: circle(50%); */
  /* margin-Left: 50px; */
  margin-top: 50px;
  margin-bottom: 15px;
  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(70%, transparent), to(rgba(250, 250, 250, 0.1)));
`;

export const Styledbutton = styled(Button)`
  margin: 10px;
  font-size: 16px;
  display: flex;
  text-align: center;
  margin-left: 43px;
  border-radius: 5%;
  background: #29465b;
  box-shadow: 1px 1px 5px grey;
  color: white;
  &.ant-btn-primary {
    background: #29465b;
    border-color: #29465b;
  }
  &:hover {
    color: white;
    box-shadow: 1px 1px 5px #29465b;
    background: gray;
  }
`;

export const StyledMenu = styled(Menu)`
  width: 200px;
  margin-right: 30px;

  &.ant-menu-inline .ant-menu-item:after {
    border-right: 3px solid #29465b;
  }
  &.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color:#243b55;
  }
  & .ant-menu-item-selected a .ant-menu-item-selected a:hover {
    color: whitesmoke;
    background: black;
  }
  & .ant-menu-item-selected{
    color: whitesmoke;
  }
  
`;
