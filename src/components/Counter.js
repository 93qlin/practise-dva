import React from 'react'
import {connect} from 'dva'
const Counter = ({counter}) => {
    // console.log(props.counter)
    return (
        <div>
            <h1>{counter.count}</h1>
            <button>+</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}
Counter.propTypes = {}
export default connect(mapStateToProps)(Counter)