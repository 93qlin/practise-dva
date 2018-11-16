import React from 'react'
import Counter from '../components/Counter'
import {connect} from 'dva'
import PropTypes from 'prop-types'
import {counterAdd, counterAsyncAdd} from '../actions' // eslint-disable-line
const CounterPage = ({counter, dispatch, history}) => {
    return (
        <div>
            <div>Counter</div>
            <Counter
               
                counter={counter}
                dispatch={dispatch}
                />
        </div>

    )
}
Counter.prototypes = {
    counter: PropTypes.object
}
// const mapStateToProps = (state) => {   return {       counter: state.counter
//  } }

const mapStateToProps = ({counter}) => ({counter})

export default connect(mapStateToProps)(CounterPage)
