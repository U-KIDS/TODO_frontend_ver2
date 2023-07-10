import styles from '../Login/Login.module.css';
import Todo_head from './Todo_head';
import Todo_create_icon from './Todo_create_icon';
import Todo_list from './Todo_list';

function Todo(){
    return(


            <div className={styles.itemContainer}>
                <Todo_head/>
                <Todo_create_icon/>
                <Todo_list/>
            </div>

        
    )
}

export default Todo;