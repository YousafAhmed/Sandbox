import { Layout, Typography } from "antd";
import styled from "styled-components";
import { Button } from "antd/lib/radio";

const { Content } = Layout;
const { Text } = Typography;

export const StyledMainContainer = styled(Content)`
  /* margin-top: 15px; */
  height: 55%;
  margin-bottom: 30px;
`;

export const StyledContainer = styled(Content)`
  /* margin-top: 15px; */
  height: 55%;
  display: flex;
  margin-bottom: 30px;
`;

export const StyledHeaderText = styled(Text)`
  margin-top: 30px;
  display: flex;
  font-size: 20px;
  /* &.anticon {
    display: flex;
    margin-top: 6px;
  } */
`;

export const StyledHeadingText = styled(Text)`
  margin-top: 10px;
  display: flex;
`;

export const StyledContactText = styled(Text)`
  margin-top: 10px;
  display: flex;
`;

export const StyledComplaintText = styled(Text)`
  margin-top: 10px;
  margin-left: 145px;
  margin-bottom: 10px;
  display: flex;
`;

export const StyledText = styled(Text)`
  margin-top: 10px;
  display: flex;
`;

export const StyledHeadingContainer = styled(Content)`
  margin-left: 50px;
  margin-top: 10px;
`;

export const StyledSubContainer = styled(Content)`
  margin-left: 50px;
  margin-right: 250px;
  margin-top: 10px;
  width: 450px;
`;

export const StyledFormContainer = styled(Content)`
  /* margin-left: 50px; */
  margin-right: 150px;
  margin-top: 10px;
  width: 875px;
`;

// export const StyledButton = styled(Button)`
//   /* margin: 10px; */
//   font-size: 16px;
//   display: flex;
//   text-align: center;
//   margin-left: 150px;
//   margin-right: 150px;
//   border-radius: 5%;
//   background: #29465b;
//   color: white;
//   &.ant-btn-primary {
//     background: #29465b;
//     border-color: #29465b;
//   }
//   &:hover {
//     color: white;
//     background: gray;
//   }
// `;
