import React from 'react';
import styles from './Todo.module.css';

function TodoHead({ ItemCount }) {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][today.getDay()];

  return (
    <div className={styles.HeadContainer}>
      <div className={styles.day}>{`${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`}</div>
      <div className={styles.taskleft}>남은 할 일 {ItemCount}개</div>
    </div>
  );
}

export default TodoHead;
