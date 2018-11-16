import {delay} from 'dva/saga'
import {routerRedux} from 'dva/router'
import querySting from 'query-string'
import pathToRegexp from 'path-to-regexp' // eslint-disable-line
export default {

  namespace: 'counter', //命名空间相当于scoped

  state: {  //可以定义很多类型 state: 1
    count: 2
  },
  //通俗理解就是监听函数,里面的函数可以随便定义名称然后依次执行
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      window.onresize=() => {
        dispatch({
          type:'add'
        })
      }
    },
    // onclick({ dispatch, history }) {  // eslint-disable-line
    //  document.addEventListener('click',()=>{
    //    dispatch({type: 'add'});
    //  })
    // },
    // setupHistory({ dispatch, history }) {  // eslint-disable-line
    //   history.listen((location)=>{
    //     // if(location.pathname === '/counter'){
    //     //   dispatch({type: 'add'});
    //     // }
    //     const match = pathToRegexp('/counter').exec(location.pathname)
    //     if(match){
    //       dispatch({type: 'add'});
    //     }
    //   })
    //  },
  },

  effects: {
    *asyncAdd({ payload }, { call, put, select }) {  // eslint-disable-line
      //const counter = yield select(state => state.counter)
      //const counter = yield select(_ => _.counter)
      //const {counter} = yield select(_ => _)
      const counter = yield select(({counter}) => counter) // eslint-disable-line
      yield call(delay,1000)
      yield put({ type: 'add' });
      yield put(routerRedux.push({
        pathname: '/',
        search: querySting.stringify({
          from: '深圳'
        })
      }));
    },
  },

  reducers: {
    add(state, action) {
      return {  
        count: state.count + 1
      }
    },
    // 'login/start'(state, action) {
    //   return {  
    //     count: state.count + 1
    //   }
    // }
  },

};
