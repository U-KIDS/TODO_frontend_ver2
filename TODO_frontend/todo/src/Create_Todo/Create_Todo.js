import styles from '../Login/Login.module.css';
import React,{useState} from 'react';



const HandleAddbutton=(event)=>{
    event.preventDefault();

    if(titleValue==="" && contentValue==""){
        alert("제목과 내용을 입력해주세요");
    }
    if(titleValue===""){
        alert("제목을 입력해주세요");
    }
    if(contentValue===""){
        alert("내용을 입력해주세요");
    }
}


function Create_Todo(){

    const [titleValue,setTitle]=useState("")
    const [contentValue,setContent]=useState("")

    return(


            <div className={styles.itemContainer}>
                <label>
                    제목
                    <input value={titleValue} 
                    onChange={HandleTitleChange}
                    ></input>
                </label>
                <label>
                    내용
                    <input
                    value={contentValue}
                    onChange={HandleContentsChange}></input>
                </label>

                <button>일정 추가하기</button>
            </div>

        
    )
}

export default Create_Todo;