import React from "react";
import styles from './Login.module.css';

const Input = ({ type, value, onChange, placeholder }) => {
  return (
    <div>
        <input className={styles.input}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    </div>
  );
};

export default Input;
