import react from "react";
import TodoList from './TodoList';
import styles from './Todo.module.css';

function Content(){
    return(
        <div className={styles.Container}>
            <input autocomplete="off" id="inputText" type="text" placeholder="입력"></input>
			<input type="button" value="+"></input>
        </div>
    )
}

export default Content;