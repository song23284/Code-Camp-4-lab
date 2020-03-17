import React from 'react'
import Todo from './component/Todo'
import Newtodo from './component/Newtodo'

class Todoapp extends React.Component{

 state= {
     todos:[{name:'jak'}],
     inputvalue :''
}

handleadd= (e)=>{
   let text = document.getElementById('in1').value
   if (text == ''){return}
   console.log(text)
   
   this.setState({
    todos : this.state.todos.concat({name:text})
   })
   document.getElementById('in1').value=''

}

handledelet =(e)=>{
alert('dedelete')

}

handletick = (e)=>{
    alert('tick')

}
    render(){
        return(
            <div className='Root'>
           <Newtodo onadd={this.handleadd}  /> 
           {this.state.todos.map((todos,idx)=>(
             <Todo name={todos.name} key={idx}

            onclick={this.handledelet} ontick={this.handletick}
             />
               
           ))
                   }

            </div>
        )
    }
}


export default Todoapp;