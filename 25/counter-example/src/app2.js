import React from 'react'



class App2 extends React.Component {
   state={count:0  ,
    img:[{src: 'https://image.freepik.com/free-photo/white-horses-camargue-france_119101-9.jpg'},
    {src: 'https://image.freepik.com/free-photo/tiger-looking-straight-ahead_1286-73.jpg?1'},
    {src: 'https://image.freepik.com/free-photo/3d-landscape-with-herd-elephants_1048-7804.jpg'},
    {src: 'https://image.freepik.com/free-photo/cute-pug-with-santa-hat-gift-laying_23-2148348108.jpg'},
    {src: 'https://image.freepik.com/free-photo/white-horses-camargue-france_119101-9.jpg'}
   
   ],tab:0,
   datatext:[{text:''},{text:'tab1'},{text:'tab2'},{text:'tab3'}]



}

   handleadd = ()=> {

    this.setState({
        count:this.state.count+1
    })
   }

   handledeadd = ()=> {

    this.setState({
        count:this.state.count-1
    })
    
   }
   handletab = (e) =>{

console.log(e.target.value)

this.setState({tab:e.target.value})
   }

    render = ()=>{
    return(
        <div className='Root'> 
        <button disabled={this.state.count ==4}  onClick={this.handleadd}  >add</button>
        <button disabled={this.state.count ==0} onClick={this.handledeadd}>deadd</button>
    <div> {this.state.count}</div>
    <div> 
     <img src={this.state.img[this.state.count].src}></img>
   </div>
   <div>
       <button value={1} onClick={this.handletab}>tab1</button>
       <button value={2} onClick={this.handletab}>tab2</button>
       <button value={3} onClick={this.handletab}>tab3</button>
       <div style={{border:this.state.tab ? 'solid':undefined ,height:'500px',textAlign:"center",marginTop:'10px'}}>
       {this.state.datatext[this.state.tab].text}
       </div>
   </div>
         

        </div>
    )


    }

}


export default App2
