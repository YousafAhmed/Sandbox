import { message } from "antd";


export const feedMsg = ()=>{
const [messageApi, contextHolder] = message.useMessage();

 const success = () => {
  messageApi.open({
    type: "success",
    content: "Successfully submitted",
  });
};
 const error = () => {
  messageApi.open({
    type: "error",
    content: "Please fill the form",
  });
};
}