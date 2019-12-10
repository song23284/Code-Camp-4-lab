import React from "react";
import styles from './Todo.module.css'

function Todo(props) {
    const { ticked, name, onTick, onDelete } = props
    return <div className={styles.Root}>

        <span className={styles.Tick} style={{ backgroundColor: ticked ? '#B6D7A8' : undefined }} onClick={onTick} />

        <div className={styles.Text} style={{textDecoration:ticked ? 'line-throug' : undefined}}> {name} </div>

        <span className={styles.Delete} onClick={onDelete} >x</span>
    </div>

}

// Todo.defaultProps = {
//     ticked:false,
//     name:'you don \' underfind name'
// }

export default Todo