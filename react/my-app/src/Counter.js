import React, { Component, PropTypes } from 'react';

const buttonStyle = {
    backgroundColor:'#00ff00',
}
class Counter extends Component {
    constructor(props) {
        super(props);
        //调用父类（React.Component）的构造函数

        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        //state必须是JavaScript对象
        this.state = {
            count:props.initValue
        }
      
       
    }
   
    updateCount(isIncrement) {
        const previousValue = this.state.count;
        const newValue = isIncrement ? previousValue + 1 : previousValue - 1;

        this.setState({count: newValue})
        this.props.onUpdate(newValue,previousValue)
    }
    onClickIncrementButton(){
       this.updateCount(true);
    }
    onClickDecrementButton() {
       this.updateCount(false);
    }
     //render 函数被调用完之后，
    componentWillMount() {
        console.log('enter componentWillMount' + this.props.caption)
    }

    componentWillReceiveProps(nextProps) {
        console.log('enter componentWIllReceiveProps' + this.props.caption)
    }

    //返回布尔值 确定什么时候组件不需要渲染
    shouldComponentUpdate(nextProps,nextState) {
        return (nextProps.caption !== this.props.caption) ||
                (nextState.count !== this.state.count)
    }

    render() {
        console.log('enter render' + this.props.caption);
        const {caption} = this.props;
        
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count:{this.state.count}</span>
            </div>
        )
    }
}
//默认初始值
Counter.defaultProps = {
    initValue: 0,
    onUpdate: f => f //默认是一个什么都不做的函数 
}


//新增的onUpdate 是一个函数类型的prop



export default Counter;