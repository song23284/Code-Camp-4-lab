import React from 'react';
class Slide extends React.Component{

 state = {  img:[{img: 'https://image.freepik.com/free-photo/white-horses-camargue-france_119101-9.jpg',fist:true},
 {img: 'https://image.freepik.com/free-photo/tiger-looking-straight-ahead_1286-73.jpg?1'},
 {img: 'https://image.freepik.com/free-photo/3d-landscape-with-herd-elephants_1048-7804.jpg'},
 {img: 'https://image.freepik.com/free-photo/cute-pug-with-santa-hat-gift-laying_23-2148348108.jpg'},
 {img: 'https://image.freepik.com/free-photo/white-horses-camargue-france_119101-9.jpg',last:true}

],
    show : 0
}

handleNext = ()=>{ this.setState( {show:this.state.show+1})  }
handlePrevious = ()=>{ this.setState( {show:this.state.show-1})     }

 render = ()=> {
  return (
    <div className="App">
      <button disabled={this.state.show == 4} onClick={this.handleNext}>increasse</button>
      <button disabled={this.state.show == 0} onClick={this.handlePrevious} >decrease</button>
             <div><img src={this.state.img[this.state.show].img}></img></div>
      
    </div>
  );
}
}
export default Slide;
