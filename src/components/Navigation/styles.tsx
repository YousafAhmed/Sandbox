import { Menu } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: #bcc8e3 !important;
  &:hover {
    color: #bcc8e3 !important;
  }
`;

// export const Styled

export const StyledMenu = styled(Menu)`
  display: block;
  background: linear-gradient(to right, #141e30, #243b55);
  border-bottom: 0px;

  /* & .ant-menu-item-selected a:hover {
    background-color: gray;
  } */
  &.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected:after {
    border-bottom: 2px solid whitesmoke;
  }
  &.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover:after {
    border-bottom: 2px solid whitesmoke;
  }
`;
