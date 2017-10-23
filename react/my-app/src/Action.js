import * as ActionTypes from './ActionTYpes.js';
import AppDispatcher from './AppDispatcher.js';
//定义action构造函数 
export const increment = (counterCaption) => {
    AppDispatcher.dispatch({
        type:ActionTypes.INCREMENT,
        counterCaption: counterCaption
    });
};

export const decrement = (counterCaption) => {
    AppDispatcher.dispatch({
        type:ActionTypes.DECREMENT,
        counterCaption:counterCaption
    })
}
//导出两个action构造函数increment和decrement 当这两个函数被调用的时候回创造对应的action对象 并被派发出去