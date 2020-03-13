import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class Helloc extends React.Component {
    render() {

        const mystyle = {
            borderColor: `${this.props.borderColor}`,
            fontSize:` ${this.props.size}`,
            border: "solid"

        };
        let dot = {
            color: ` ${this.props.dotColor}`
        }
        return (
            <div style={mystyle}>
                <spanf >L</spanf><span style={dot}>.</span>
                <span>O</span><span style={dot}>.</span>
                <spanf>V</spanf><span style={dot}>.</span>
                <span>E</span>
            </div>
        )
    }
}

function Hello(prop) {
    return (
        <div> hello {prop.name}</div>
    )

}

const app = (
    <div style={{ margin: "20px" }}>

        <h1  >
            <spanf classname="fff">L</spanf>.
           <span>O</span>.
           <spanf>V</spanf>.
           <span>E</span>


        </h1>

    </div>
)
let br = prompt('red หรือ  blue')
const rb = (

    <div>
        {br == 'red' ? "Realiy" :
            br == 'blue' ? 'matrix' :
                ' notmatch'}

    </div>

)


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(rb, document.getElementById('rb'));
ReactDOM.render(app, document.getElementById('love'));



ReactDOM.render(<Helloc borderColor="Jakdaw wanathong" size='12px' dotColor="red"
    b />, document.getElementById('gogo'));
