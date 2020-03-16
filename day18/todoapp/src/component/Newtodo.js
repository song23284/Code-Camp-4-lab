import React from 'react'


function Newtodo(props){
    const {onadd } = props
    return(

        <div>
       <input id='in1' placeholder='enter todo'  ></input>
       <button  onClick={onadd}>Add</button>

        </div>
    )
}

export default Newtodo
