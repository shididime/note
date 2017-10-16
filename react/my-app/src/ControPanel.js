import React, { Component } from 'react';
import Counter from './Counter.js'; 

class ControPanel extends Component {
    constructor(props) {
        super(props);

        this.onCounterUpdate = this.onCounterUpdate.bind(this);

        this.initValue = [0,10,20];
        const initSum = this.initValue.reduce((a,b) => a+b,0);
        //React prop都不敢图组件的对外 state代表内部的状态
        this.state = {
            sum:initSum
        }
    }

    onCounterUpdate(newValue,previousValue) {
        const valueChange = newValue - previousValue;
        this.setState({
            sum:this.state.sum + valueChange
        });
    }
    render() {
        console.log('enter ControlPanel render')
        return (
            <div>
                <Counter caption="First" onUpdate={this.onCounterUpdate}/>
                <Counter caption="Second" initValue={this.initValue[1]} onUpdate={this.onCounterUpdate}/>
                <Counter caption="Third" onUpdate={this.onCounterUpdate} initValue={this.initValue[2]}></Counter>
                <div>Total Count: {this.state.sum}</div>
                <button onClick={ () => this.forceUpdate() }>
                    Click me to rePaint!
                </button>
                
            </div>
        )
    }
}

export default ControPanel;