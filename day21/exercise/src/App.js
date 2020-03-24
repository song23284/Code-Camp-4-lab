import React from 'react';
import './App.css';
class App extends React.Component{

  state = { remderlist:['a','b','c','d','e','f','g'],
            data:[{fname:'gourge',lname:'longman',age:'13'},
            {fname:'zofia',lname:'olson',age:'23'},
            {fname:'elif',lname:'salt',age:'30'},
            {fname:'kyal',lname:'hogan',age:'12'},
                  ],
            post:[
              { firstName: "Gourge", lastName: "Longman", text: 'Some text 1', image: 'https://image.freepik.com/free-photo/white-horses-camargue-france_119101-9.jpg' },
              { firstName: "Zofia", lastName: "Olson", text: 'Some text 2', image: 'https://image.freepik.com/free-photo/tiger-looking-straight-ahead_1286-73.jpg?1' },
              { firstName: "Elif", lastName: "Salt", text: 'Some text 3', image: 'https://image.freepik.com/free-photo/3d-landscape-with-herd-elephants_1048-7804.jpg' },
              { firstName: "Kyal", lastName: "Hogan", text: 'Some text 4', image: 'https://image.freepik.com/free-photo/cute-pug-with-santa-hat-gift-laying_23-2148348108.jpg' },
            ]
       
       

}




 render =()=> {
   
  
  return (
    <div className="App">
      <div> Render list</div>
      <ul> {this.state.remderlist.map(x=>(
        <li>{x}</li>
      ))} </ul>
      <div>
       Ren list 
       
       {
         this.state.data.map(x=>(
          <tr>
          <td>{x.fname + '   '} </td>
          <td>{x.lname+ ' '  }</td>
          <td>{x.age} </td>
         </tr>
         ))
       }

      </div>
      <div>
        Render post
        <div style={{border:'solid'}}>
         {this.state.post.map(x=>(
          <div>
     <img src = {x.image}></img>
         <div>{x.firstName+'  '+x.lastName}</div>
         <div>{x.text}</div>

          </div>
         ))}
        </div>
      </div>
      
    </div>
  );
}}

export default App;
