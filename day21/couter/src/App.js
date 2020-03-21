import React from 'react';
import './App.css';


let initalstate = { count: 0, show: true }

function createStore(reducer,initalstate){
  let state =initalstate
  let subscribers =[]
     return {
         getState: () => state, 
         dispatch:(action) =>{
           state =   reducer(state,action)
           subscribers.forEach(callback => {
               if(callback){
                   callback()
               }
           })
         },
         subscribe:(callback) =>{
             subscribers.push(callback)
             return subscribers.length - 1 
 
         },
         unsubscribe:() =>{
            //  subscribers[]=null
         }
     }
 }

function couterreducer(state, action) {
  switch (action.type) {
    case 'increment': return { ...state, count: state.count + 1 }
    case 'decrement': return { ...state, count: state.count - 1 }
    case 'toggle': return { ...state, show: !state.show }

    default: return state;
  }
}

const increment = () => ({ type: 'increment' })
const decrement = () => ({ type: 'decrement' })
const toggle = () => ({ type: 'toggle' })

let store = createStore(couterreducer,initalstate)

class App extends React.Component {
  componentDidMount = () => {
    store.subscribe(()=>{
      this.forceUpdate()
    })
   }
  handleAdd = () => {
    store.dispatch(increment())
    console.log(store.getState());
  
  }
  handleMinus = () => {store.dispatch(decrement())}
  handletoggle = () => {store.dispatch(toggle())
    console.log(store.getState());
  }



  render = () => {
    const {count,show } = store.getState()
    return (
      <div className="App">
        { show && <div>Couter :{count}</div>}
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleMinus}>-</button>
        <button onClick={this.handletoggle}>show/hide</button>


      </div>
    );
  }
}
export default App
