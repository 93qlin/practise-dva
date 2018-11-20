import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line
import {connect} from 'dva'
const User = (props) => {
    console.log(props.loading);
    
    const { error, user} = props.user
    const{dispatch} = props
    let isFetching = props.loading.effects['user/fetch']
    
    let data
    if (error) {
        data  = error
    } else if(isFetching){
        data= 'loading...'

    }else{
        data = user&&user.data[0].name
    }
    return (
        <div>
            <h1>{data}</h1>
            <button onClick = {() => {dispatch({type:'user/fetch'})}}>get user</button>
        </div>
    )
}

User.propTypes = {}
const mapStateToProps = (state) => {
    return {
        user: state.user,
        loading: state.loading,
    }
}
export default connect(mapStateToProps)(User)
