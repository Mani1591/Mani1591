import React from 'react';
import ReactDOM from 'react-dom';
const getButtonName = () => {
    return 'Click on Me!';
}

const App = () => {
    var t = "Click Me!";
    var ta = ['text', 'text2'];
    var to = {key: 'value'};
    return (
    <div> 
        <label htmlFor="name" className="label">Enter name</label>
        <input type= "text" id="name"></input>
        <button style={{backgroundColor: 'blue', color: 'white'}}>{to.key}</button>
    </div>);
}

ReactDOM.render(<App/>, document.querySelector('#root'));
