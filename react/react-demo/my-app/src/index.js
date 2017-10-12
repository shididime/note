import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ClickCounter from './ClickCounter';
import registerServiceWorker from './registerServiceWorker';

function tick() {
    var names = ['didi','lili','lala'];
    var arr = [
        <h3>起开</h3>,
        <h3>DIDI</h3>
    ];
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
   
   
    ReactDOM.render(
        <div>
            <ClickCounter></ClickCounter>
            {element}
            <p>这是一个小demo</p>
            <div>
                {arr}
                {
                    names.map(function(name) {
                        return <div>hello,{name}</div>
                    })
                }
            </div>
            
        </div>,
        document.getElementById('example')
    );
    

};
setInterval(tick, 1000)

registerServiceWorker();
