import React from 'react';
import styled from 'styled-components';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function Todo_list() {
  return (
    <TodoListBlock>
        <text style={{fontSize:30, alignItems:'center', paddingTop:12, paddingBottom:12}}>영단어 암기</text><br/>
        <text style={{fontSize:30, alignItems:'center', paddingTop:12, paddingBottom:12}}>멋쟁이 사자처럼 수업</text><br/>
        <text style={{fontSize:30, alignItems:'center', paddingTop:12, paddingBottom:12}}>알고리즘 공부하기</text><br/>
        <text style={{fontSize:30, alignItems:'center', paddingTop:12, paddingBottom:12}}>리액트 복습</text>
      {/* {todos.map(todo => (
        <TodoItem
          id={todo.id}
          text={todo.text}
          done={todo.done}
          key={todo.id}
        />
      ))} */}
    </TodoListBlock>
  );
}

export default Todo_list;
