import styled from "styled-components";
import { Layout, PageHeader, Typography, Card, Button, Image } from "antd";

const { Content } = Layout;
const { Text } = Typography;
const { Meta } = Card;

export const StyledEmptyCartContainer = styled(Content)`
  color: #29465b;
  margin-bottom: 350px;
`;
export const StyledEmptycartimg = styled(Image)`
  display: flex;
  width:40%;
  text-align: center;
  margin-bottom: 20px;
  margin-left: 130px;
  
`
export const StyledEmptytext = styled(Text)`
  display: flex;
  font-size: 30px;
  color: #29465B;
  text-align:center;
  align-items: center;
  justify-content: center;

`
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
  &:hover {
    color: white;
    background: gray;
  }
`;

export const StyledHeader = styled(PageHeader)`
  margin-bottom: 30px;
  margin-top:20px;
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
  display: flex;
  text-align: left;
  margin-left: 250px;
  margin-right: 250px;
  margin-top: 30px;
  height: 50px;
  border: none;
`;

export const StyledItemText = styled(Text)`
  margin-left: 0px;
  margin-right: 10px;
  width: 50px;
  text-align: left;
  font-weight: 500;
  font-size: 18px;
  color: #29465b;
`;

export const StyledNameText = styled(Text)`
  margin-left: 30px;

  width: 80px;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  color: #29465b;
`;

export const StyledPriceText = styled(Text)`
  margin-left: 245px;
  width: 78px;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  color: #29465b;
`;

export const StyledQuantityText = styled(Text)`
  margin-left: 55px;
  width: 90px;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  color: #29465b;
`;

export const StyledTotalText = styled(Text)`
  margin-left: 55px;
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
  margin-left: 250px;
  margin-right: 250px;
  margin-bottom: 10px;
`;

export const StyledCardContainer = styled(Card)`
  display: flex;
  font-size: 15px;
  font-weight: 700;
  border-radius: 0%;
  border-width: 1px;
  border-color: #29465b;
  height: 100px;
  align-items: center;
  &:hover {
    border-color: #9ac5f4;
  }
`;


export const StyledCartimg = styled(Image)`
  display: flex;
  margin-top: 0px;
  margin-left: 20px;
  width: 80%;
  text-align: center;
`;

export const StyledTitleText = styled(Meta)`
  margin-right: 50px;
  width: 240px;
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
  display: block;
  float: left;
  margin-left: 280px;
  font-size: 20px;
  font-weight: 500;
  color: #29465b;
  margin-bottom: 250px;
`;

export const StyledClearCart = styled(Button)`
   margin: 14px;
  font-size: 20px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-left: 981px;
  margin-right: 550px;
  background: #29465b;
  color: white;
  &:hover {
    color: white;
    background: gray;
  }
`
