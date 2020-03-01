import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      todos: [
        { id: 1, text: 'Todo1', isCompleted: true },
        { id: 2, text: 'Todo2', isCompleted: false },
        { id: 3, text: 'Todo3', isCompleted: true },
        { id: 4, text: 'Todo4', isCompleted: false },
        { id: 5, text: 'Todo5', isCompleted: false },
        { id: 6, text: 'Todo6', isCompleted: false },
      ],
      newTodoText: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    let newTodos = [
      ...this.state.todos, 
      { id: 10, text: this.state.newTodoText, isCompleted: false}
    ]

    this.setState({
      todos: newTodos
    })
  }

  render () {
    return (
      <div className="App">
        <ul>
          {this.state.todos.map(todo => (
            <li key={todo.id}>
              <input type="checkbox" checked={todo.isCompleted}/>
              {todo.text}
              <button>x</button>
            </li>
          ))}
        </ul>
  
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            value={this.state.newTodoText}
            onChange={
              (e) => this.setState({newTodoText: e.target.value})
            }
          />
          <input type="submit" value="ADD"/>
        </form>
      </div>
    );
  }
  
}

export default App;