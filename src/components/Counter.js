import React from 'react'
import {connect} from 'dva' // eslint-disable-line
import PropTypes from 'prop-types' // eslint-disable-line
import {withRouter,Link,routerRedux} from 'dva/router'
const Counter = ({counter,dispatch,history},context) => {
    // console.log(props.counter)
    // console.log(counterAsyncAdd);
    
    return (
        <div>
            <h1>{counter.count}</h1>
            <button onClick={() => dispatch(routerRedux.push('./'))}>routerRedux back</button>
            <Link to='/'>home page</Link>
            <button onClick={() => context.router.history.push('./')}>context go back</button>
            <button onClick={() => history.push('./')}>GO HOME</button>
            <button onClick={() => {dispatch({type: 'counter/add'})}}>add</button>
            <button onClick={() => {dispatch({type: 'counter/asyncAdd'})}}>+ async</button>
            <p></p>
        </div>
    )
}

Counter.contextType = {
    router: PropTypes.object
}
export default withRouter(Counter)