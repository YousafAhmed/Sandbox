import { Space, Carousel } from "antd";
import React from "react";
import Cart from "../Cart";
import { title } from "process";


const contentStyle: React.CSSProperties = {
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: "lightblue",
  
};


const Page = () => {
  return (
    <div>
     <Carousel autoplay style={{marginTop:"60px"}}>
    <div>
      <h3 style={contentStyle}>{title}</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
    </div>
  );
};

export default Page;
