import React, { useState } from "react";
import { Card, Layout, Row, Typography, Breadcrumb, Space, Menu, Spin } from "antd";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApiFetch } from "./shopSlice";
import { addToCart } from "../Cart/cartslice";
import {
  StyledContainer,
  StyledCardcontainer,
  StyledSubcontainer,
  StyledCardimg,
  Styledbutton,
  StyledCardElectronic,
  StyledMenu,
} from "./styles";
import type { MenuProps } from 'antd';


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('Select here!', 'grp', null, [getItem('All', '1'),getItem('Men', '2'), getItem('Women', '3') , getItem('Electronics','4'),getItem('Jewelery','5')], 'group'),
]

const { Content } = Layout;
const { Meta } = Card;
const { Text } = Typography;

const ProductData = () => {
  const products = useSelector((state: any) => state.product.product);
  const dispatch = useDispatch();

 const [filteredProducts, setFilteredData]:any = useState([]);


 const filteredData = (type:any)=>{
  const newFilteredData = products.filter((products: { category: any; }) => products.category === type)
  setFilteredData(newFilteredData)
}

  useEffect(() => {
    dispatch(getApiFetch());
  }, [dispatch]);

  useEffect(()=>{
    setFilteredData(products)
  }, [products])

    const onClick = (e:any) => {
      
      if(e.key === '1'){
        setFilteredData(products)
      }
      else if (e.key === '2'){


        
        filteredData(`men's clothing`)
      }
      else if(e.key === '3'){
        filteredData(`women's clothing`)
      }
      else if(e.key === '4'){
        filteredData(`electronics`)
      }
      else if(e.key === '5'){
        filteredData(`jewelery`)
      }
        

    }

  return (
    <StyledContainer>

      <StyledMenu
        onClick={onClick}
        // style={{ 
        // width:"200px",
        // marginRight:"30px" }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['All']}
        mode="inline"
        items={items} />
      <Row style={{width:"1100px"}} gutter={5}>
        {filteredProducts &&
          filteredProducts.map((p: any) => {
            return (
              <>
                <StyledSubcontainer>
                  {p.category === "electronics" ? (
                    <StyledCardcontainer
                      hoverable
                      cover={<StyledCardElectronic
                        alt="image"
                        src={p.image}
                        preview={false} />}
                    >
                      <Meta style={{ color: "#29465B" }} title={p.title} />

                      <Space style={{ marginTop: "8px" }}>
                        <Text style={{ color: "#29465B" }} italic>
                          ${p.price.toFixed(2)}
                        </Text>
                      </Space>

                      <Styledbutton
                        size="large"
                        // type="text"
                        type="primary"
                        onClick={() => dispatch(addToCart(p))}
                      >
                        Add to cart
                      </Styledbutton>
                    </StyledCardcontainer>
                  ) : (
                    <StyledCardcontainer
                      hoverable
                      cover={<StyledCardimg
                        alt="image"
                        src={p.image}
                        preview={false} />}
                    >
                      <Meta style={{ color: "#29465B" }} title={p.title} />

                      <Space style={{ marginTop: "8px" }}>
                        <Text style={{ color: "#29465B" }} italic>
                          ${p.price.toFixed(2)}
                        </Text>
                      </Space>

                      <Styledbutton
                        size="large"
                        // type="text"
                        type="primary"
                        onClick={() => dispatch(addToCart(p))}
                      >
                        Add to cart
                      </Styledbutton>
                    </StyledCardcontainer>
                  )}
                </StyledSubcontainer>
              </>
            );
          })}
      </Row>
    </StyledContainer>
  );
};

export default ProductData;
