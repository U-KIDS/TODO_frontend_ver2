import React from 'react';
import styles from './Todo.module.css';
import { MdDone } from 'react-icons/md';

function TodoItem({ done, text, onClick }) {
    const handleClick = () => {
        onClick();
    };

  return (
    <div className={styles.TodoItemBlock} onClick={handleClick}>
      <div className={`${styles.CheckCircle} ${done ? styles.done : ''}`}>
        {done && <MdDone />}
      </div>
      <div className={`${styles.Text} ${done ? styles.doneText : ''}`}>
        {text}
      </div>
    </div>
  );
}

export default TodoItem;
