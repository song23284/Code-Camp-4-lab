import React from "react";
import styles from './NewTodo.module.css'

function Newtodo(props) {
    const { onAdd,onValue,value } = props
    return <div className={styles.Root}>
        <input
            className={styles.Input}
            placeholder='enter todo'
            value={value}
            onChange={onValue}
        />
        <div className={styles.Button} onClick={onAdd}>ADD</div>
    </div>

}
export default Newtodo