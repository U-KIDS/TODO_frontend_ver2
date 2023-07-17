import React from "react";
import styles from './Join.module.css';
import Input from "./input";
import useInput from "./useInput";
import Logo from './logo.png';

function Login(){
    const [name, setName, resetName] = useInput("");
    const [id, setID, resetID] = useInput("");
    const [password, setPassword, resetPassword] = useInput("");

    const handleSubmit = (event) => {
        event.preventDefault();
        resetName();
        resetID();
        resetPassword();
    };

    return(
        <div className={styles.itemContainer}>
            <img src={Logo} alt="logo" className={styles.img}/>
            <form onSubmit={handleSubmit}>
                <Input type="text" value={name} onChange={setName} placeholder="Name"/>
                <Input type="text" value={id} onChange={setID} placeholder="ID"/>
                <Input type="password" value={password} onChange={setPassword} placeholder="Password"/>
                <button className={styles.button} type="submit">J O I N</button>
            </form>
        </div>
    )
}

export default Login;