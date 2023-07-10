import React from "react";
import styles from './Login.module.css';
import Input from "./input";
import useInput from "./useInput";
import Logo from './logo.png';

function Login(){
    const [id, setID, resetID] = useInput("");
    const [password, setPassword, resetPassword] = useInput("");

    const handleSubmit = (event) => {
        event.preventDefault();
        resetID();
        resetPassword();
    };

    return(
        <div className={styles.itemContainer}>
            <img src={Logo} alt="logo" className={styles.img}/>
            <form onSubmit={handleSubmit}>
                <Input type="text" value={id} onChange={setID} placeholder="ID"/>
                <Input type="password" value={password} onChange={setPassword} placeholder="Password"/>
                <button className={styles.button} type="submit">L O G I N</button>
                <button className={styles.button} >J O I N</button>
            </form>
        </div>
    )
}

export default Login;