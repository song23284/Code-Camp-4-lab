import React from 'react';
import './App.css';
let id = 1
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: [{ id: 1, text: 'jakdaw ', tick: true }]
      , newTodoText: ' '
    }

  }

  handletick = (e) => {
    //     let tick= e.target.checked

    // this.setState({nam:'sadas' })

  }
  handleadd = (e) => {
    e.preventDefault()

    let newtodo = [...this.state.todo, {

      id: id++,
      text: this.state.newTodoText,
      tick: false

    }]
    this.setState({
      todo: newtodo,
      newTodoText: ''
    })
  }
  handlechang = (e) => {
    this.setState({
      newTodoText: e.target.value
    })
  }

  render() {
    return (
      <div className="Root">
        <form onSubmit={this.handleadd}>
          <input id='i1' placeholder='Enter add ' value={this.state.newTodoText}
            onChange={this.handlechang}>
          </input>
          <button >add </button>
        </form>
        <div>
          {this.state.todo.map((item) => (
            <li >
              <input type='checkbox' onClick={this.handletick} name='asd' checked={item.tick}></input>
              <span className='i1'>{item.text}</span>
              <button>x</button>
            </li>
          ))}
        </div>

        
      </div>
    );
  }
}

export default App;
