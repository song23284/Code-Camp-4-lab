import React from 'react'

import styles from './TodoList.module.css'
import NewTodo from './components/Newtodo'
import Todo from './components/Todo'

class TodoList extends React.Component {

  state = {
    todos:[{ticked:true,name:'Wash dishes'},{ticked:false,name:'bay ciga'}],
    textValue:''

  }
  handleTick = () => {

  }
  handleDelete = () => {

  }
  handleValue = (e) => {
       
       this.setState({
         textValue:e.target.value
       })
  }
  handleAdd = () => {

  }


 
  render = () => {
    return <div className={styles.Root}>
      <NewTodo value={this.state.textValue} onValue={this.handleValue} />
      
      {this.state.todos.map((todo,idx)=>(

        <Todo key={idx} ticked={todo.ticked} name={todo.name} />
      ))}
 
    </div>
  }
}

export default TodoList
