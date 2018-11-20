import dva from 'dva';
import './index.css';
import {createBrowserHistory as createHistory}  from 'history';
import createLoading from 'dva-loading';
import { createLogger } from 'redux-logger'
const logger = store => next => action => {
  console.log('dispathing',action);
  let result = next(action)
  console.log('next state', store.getState());
  return result
}  // 自己写的中间件
const  error = store => next => action => {
  try {
    console.log('error');
    next(action)
  } catch (e) {
    console.log('error'+ e);
  }
} // 自己写的中间件
const extraReducer  = {
  form (state=false,action){  //form是命名空间namespace，类似user
    switch (action.type) {
      case 'SHOW':
        return true;
      case 'HIDE':
        return false;
      default:
        return state  
    }
  }
}
const onEffect = (effect,{put},model,key) => {
  return function*(...args){
    yield put({type: 'SHOW'})
    yield effect(...args)
    yield put({type: 'HIDE'})
  }
}
// // 1. Initialize
// const app = dva();

const app = dva({
  history: createHistory(),
  onAction: [createLogger(),error],
  extraReducers: extraReducer,
  onEffect: onEffect
});
// 2. Plugins
// app.use({});
app.use(createLoading());
// 3. Model
// app.model(require('./models/counter').default);
// app.model(require('./models/example').default);
require('./models').default.forEach(key => app.model(key.default))
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
