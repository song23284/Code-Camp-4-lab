import React from 'react'


function Todo(props) {
  
    const {name='ไม่มีชื่อ',key,onclick,ontick}  = props
    return (

        <div key={key} style={{display:'flex'}}>
        <input  onClick={ontick} type='checkbox'></input>
         <div>{name}</div>
         <button  onClick={onclick}>X</button>
        </div>
    )
}

export default Todo
