import React from 'react';
import './App.css';
import Slide from './slishow';

class App extends React.Component{

 state = {count:1}

 handleadd = ()=>{ this.setState( {count:this.state.count+1})  }
 handledeadd = ()=>{ this.setState( {count:this.state.count-1})     }

 render = ()=> {
  return (
    <div className="App">
      <button onClick={this.handleadd}>increasse</button>
      <button onClick={this.handledeadd} >decrease</button>
             <div>{this.state.count}</div>
       <Slide />
    </div>
  );
}
}
export default App;
