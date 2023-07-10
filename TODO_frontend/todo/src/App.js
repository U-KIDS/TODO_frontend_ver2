import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Todo_template from './Todo/Todo_template';
import Todo_head from './Todo/Todoo_head';


const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef
  }
`;

function App() {
  return (
    <GlobalStyle>
      <Todo_template>
        <Todo_head/>
      </Todo_template>
    </GlobalStyle>
  );
}

export default App;
