import { Menu } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";


export const StyledLink = styled(Link)`
color: #bcc8e3 !important;
&:hover{
    color: #bcc8e3 !important;
}
`

// export const Styled

export const StyledMenu = styled(Menu)`
    && .ant-menu-item-selected a:hover {
    background-color: gray;
}
`
