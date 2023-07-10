import React from "react";
import styled from 'styled-components';

// const Todo_template_basic=styled.div`
//     width: 512px;
//     height 768px;

//     position: relative;
//     background: white;
//     border-radius: 16px;
//     box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
//     margin: 0 auto;
//     margin-top: 96px;
//     margin-bottom: 32px;
//     display: flex;
//     flex-direction: column;
//     position: relative;
//   `;
const Todo_template_basic = styled.div`
  width: 512px;
  height: 768px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

function Todo_template({children}){
        return <Todo_template_basic>{children}</Todo_template_basic>;
}
export default Todo_template;