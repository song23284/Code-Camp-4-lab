import React from 'react'

import styles from './TodoList.module.css'

import NewTodo from './components/NewTodo'
import Todo from './components/Todo'

const api = 'http://localhost:3001'

class TodoList extends React.Component {
  state = {
    textValue: '',
    todos: []
  }
  componentDidMount = async () => {

       let response = await fetch(`${api}/todos`) 
       let todos = await response.json()

       this.setState({todos})

  }

  handleChange = e => {
    this.setState({
      textValue: e.target.value
    })
  }

  handleAdd = async () => {
    if (!this.state.textValue) return
  console.log(this.state.textValue);
  
    //ส่งข้อมูลไปยัง server
    const todo = {name:this.state.textValue,ticked:false}

    await fetch(`${api}/todos`,{
       method:'POST',
       headers:{'content-type' :'application/json'},
       body : JSON.stringify(todo)
    })

    let response = await fetch(`${api}/todos`) 
    let todos = await response.json()

    this.setState({ todos,textValue:''})

    // this.setState(
    //   state => ({
    //     todos: state.todos.concat({ ticked: false, name: state.textValue,id })
    //   }),
    //   () => {
    //     this.setState({ textValue: '' })
    //   }
    // )
  }

  handleTick = id => async () => {
    const tickedtodo = this.state.todos.find(x =>x.id ===id)
    tickedtodo.ticked = !tickedtodo.ticked

    await fetch( `${api}/todos/${id}`,{
      method:'PUT',
      headers:{'content-type' :'application/json'},
      body:JSON.stringify(tickedtodo)

    })

    this.syndata()

    // this.setState(state => ({
    //   todos: state.todos.map((todo, todoIdx) =>
    //     todoIdx === id ? { ...todo, ticked: !todo.ticked } : todo
    //   )
    // }))
  }

   handleDelete = id => async () => {
    console.log(id)

    await fetch( `${api}/todos/${id}`,{
      method:'delete',
      headers:{'content-type' :'application/json'}
    })

    this.syndata()




    // })

    // this.setState(state => ({
    //   todos: state.todos.filter((todo, todoIdx) => todoIdx !== id)
    // }))

  }
  
  syndata = async () => {
    let response = await fetch(`${api}/todos`) 
    let todos = await response.json()

    this.setState({ todos})
   }

  render = () => {
    return (
      <div className={styles.Root}>
        <NewTodo
          textValue={this.state.textValue} 
          onChange={this.handleChange} 
          onAdd={this.handleAdd}
        />
        {this.state.todos.map(({ ticked, name,id } ) => (
          <Todo
            key={id}
            ticked={ticked}
            name={name}
            onTick={this.handleTick(id)}
            onDelete={this.handleDelete(id)}
          />
        ))}
      </div>
    )
  }
}

export default TodoList
