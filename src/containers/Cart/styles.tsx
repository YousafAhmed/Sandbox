import styled from "styled-components";
import {
  Layout,
  PageHeader,
  Typography,
  Card,
  Button,
  Image,
  List,
} from "antd";

const { Content } = Layout;
const { Text } = Typography;
const { Meta } = Card;

export const StyledEmptyCartContainer = styled(Content)`
  color: #29465b;
  margin-bottom: 350px;
`;
export const StyledEmptycartimg = styled(Image)`
  display: flex;
  width: 40%;
  text-align: center;
  margin-bottom: 20px;
  margin-left: 130px;
`;
export const StyledEmptytext = styled(Text)`
  display: flex;
  font-size: 30px;
  color: #29465b;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
export const StyledEmptycartbutton = styled(Button)`
  margin: 14px;
  font-size: 20px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-left: 550px;
  margin-right: 550px;
  background: #29465b;
  color: white;
  &.ant-btn-primary {
    background: #29465b;
    border-color: #29465b;
  }
  &:hover {
    color: white;
    background: gray;
  }
`;

export const StyledHeader = styled(PageHeader)`
  margin-bottom: 30px;
  margin-top: 20px;
  font-size: 26px;
  color: #29465b;
`;

export const StyledHeadingContainer = styled(Content)`
  display: flex;
  margin-left: 580px;
  text-align: center;
  // margin-Top:100px
`;

export const StyledHeadingText = styled(Text)`
  // marginLeft: "30px",
  width: 200px;
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  color: #29465b;
  /* margin-top: 5px; */
`;

export const StyledTextContainer = styled(Card)`
  /* display: flex; */
  text-align: left;
  margin-left: 72px;
  margin-right: 94px;
  margin-top: 10px;
  height: 50px;
  border: none;
  background: whitesmoke;
`;

export const StyledItemText = styled(Text)`
  margin-left: 11px;

  width: 50px;
  text-align: left;
  font-weight: 500;
  font-size: 18px;
  color: #29465b;
`;

export const StyledNameText = styled(Text)`
  margin-left: 93px;

  width: 80px;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  color: #29465b;
`;

export const StyledPriceText = styled(Text)`
  margin-left: 79px;
  width: 78px;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  color: #29465b;
`;

export const StyledQuantityText = styled(Text)`
  margin-left: 56px;
  width: 90px;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  color: #29465b;
`;

export const StyledTotalText = styled(Text)`
  margin-left: 53px;
  width: 80px;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  color: #29465b;
`;

export const StyledFullcartcontainer = styled(Content)`
  margin-bottom: 200px;
`;

export const StyledCartContainer = styled(Content)`
  margin-left: 70px;
  /* margin-right: 500px; */
  margin-bottom: 10px;
`;

export const StyledCardContainer = styled(Card)`
  display: flex;
  font-size: 15px;
  font-weight: 700;
  border-radius: 0%;
  margin-right: 108px;
  border-width: 1px;
  border-color: #29465b;
  height: 120px;
  align-items: center;
  box-shadow: 1px 1px 5px grey;
  &:hover {
    border-color: #9ac5f4;
    box-shadow: 1px 1px 8px #29465b;
  }
`;

export const StyledCartimg = styled(Image)`
  display: flex;
  border-radius: 80%;
  margin-top: 7px;
  margin-left: 20px;
  width: 70px;
  text-align: center;
`;

export const StyledTitleText = styled(Meta)`
  margin-right: 20px;
  margin-left: 10px;
  width: 150px;
  text-align: left;
  color: #29465b;
`;

export const StyledPricedisplay = styled(Text)`
  width: 80px;
  text-align: center;
  display: flex;
  color: #29465b;
`;

export const StyledArrowButton = styled(Button)`
  border: none;
  display: flex;
  color: #29465b;
`;

export const StyledQuantitydisplay = styled(Text)`
  display: block;
  width: 20px;
  color: #29465b;
`;

export const StyledTotalQuantity = styled(Text)`
  display: block;
  width: 100px;
  color: #29465b;
`;

export const StyledRemoveButton = styled(Button)`
  display: flex;
  border: none;
  color: #29465b;
`;

export const StyledTotalAmount = styled(Text)`
  /* display: flex; */
  float: left;
  margin-left: 650px;
  margin-top: 100px;
  font-size: 20px;
  font-weight: 500;
  color: #29465b;
  margin-bottom: 250px;
`;

export const StyledClearCart = styled(Button)`
  /* margin: 14px; */
  /* border-radius: 5%; */
  font-size: 18px;
  display: flex;
  text-align: center;
  color: red;
  align-items: center;
  justify-content: center;
  margin-left: 51px;
  margin-right: 165px;
  /* margin-top: 5px; */
  /* background: #29465b; */
  /* color: whitesmoke; */
  /* width: 180px; */
  height: max-content;
  &.ant-btn-primary {
    background: #29465b;
    border-color: #29465b;
  }
  &:hover {
    color: #250909;

    background: white;
  }
`;
export const StyledContinueShopping = styled(Button)`
  /* margin: 14px; */
  /* border-radius: 5%; */
  font-size: 16px;
  display: flex;
  padding: 0px 0px;
  text-align: center;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 10px grey;
  margin-left: 293px;
  /* margin-right: 25px; */
  /* margin-top: 5px; */
  background: #29465b;
  color: whitesmoke;
  width: 180px;
  &.ant-btn-primary {
    background: #29465b;
    border-color: #29465b;
  }

  height: 40px;
  &:hover {
    color: white;
    background: gray;
    box-shadow: 1px 1px 10px #29465b;
  }
`;

export const StyledCheckoutcontainer = styled(Content)`
  margin-right: 72px;
  margin-top: 59px;
  background: whitesmoke;
  width: 300px;
  height: 200px;
  border: 1px solid #29465b;
  box-shadow: 2px 2px 10px grey;

  /* &:hover {
    box-shadow: 2px 2px 10px #29465b;
  } */
`;

export const StyledList = styled(List)`
  margin-left: 10px;
  font-size: 20px;
  font-weight: 800px;
  margin-top: 5px;
  color: #29465b;
`;

export const StyledCheckoutButton = styled(Button)`
  height: 40px;
  width: 180px;
  margin-bottom: 0px;
  margin-top: 0px;
  background: #29465b;
  border-color: whitesmoke;
  box-shadow: 1px 1px 10px grey;

  &:hover{
    box-shadow: 1px 1px 10px #29465b;
  }
  &.ant-btn-primary {
    background: #29465b;
    border-color: #29465b;
  }

`;
