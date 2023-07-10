import React from 'react';
import styled from 'styled-components';
import { IoAddOutline } from "react-icons/io5";
import {link} from "react-router-dom";
import Create_Todo from '../Create_Todo/Create_Todo';

// const navigateToCreateTodo = () =>{
//     navigateToCreateTodo("/Create_Todo");
// }

function Todo_create_icon() {
    
    return (
        <link to="/Create_Todo">
            <div>
                <button style={{border:'none', backgroundColor: 'white', fontSize:40, float:'right'}}>
                    <IoAddOutline/>
                </button>
            </div>
        </link>
    );
  }
  
  export default Todo_create_icon;