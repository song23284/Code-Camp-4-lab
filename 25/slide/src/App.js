import React from 'react';
import './App.css';
  
class App extends React.Component{
 
   state ={
      searchWord :'',
      list :['hello','goodbye','myfrind','kidlde','kitkat','steacjon','muda','ajarn song','ajansam']

   }

 
 handlechange= ( e)=>{
   this.setState({searchWord:e.target.value})
   
 }
 renderlist(){

       let fillterd = this.state.list.filter((x)=>{
         if(this.state.searchWord === ''){
           return true
         }else{
           return x.toLowerCase().includes(this.state.searchWord.toLowerCase())
         }
       })


    return fillterd.map(list=>(
      <li>{list}</li>
    ))
   
 }

 render = ()=> {
  return (
    <div className="App">
      <input  onChange={this.handlechange}></input>
      <div>
           <ul>
              {this.renderlist()}
           </ul>

      </div>
      
    </div>
  );
}}

export default App;
