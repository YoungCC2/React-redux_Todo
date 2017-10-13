import React,{PropTypes} from 'react'
import {bindActionCreators} from 'redux'

import {connect} from 'react-redux'
import Header from '../compontents/Header'
import MainSection from '../compontents/MainSection'

import * as TodoActions from '../actions'

const App = ({todos,actions}) => (
    <div>
        <Header addTodo={actions.addTodo}></Header>
        <MainSection todos={todos} actions={actions}/>
    </div>
)

App.propTypes = {
    todos:PropTypes.array.isRequired,
    actions:PropTypes.object.isRequired
}

const mapStateTypes=state => ({
    todos:state.todos
})

const mapDispatchToProps = dispatch =>({
    actions:bindActionCreators(TodoActions,dispatch)
})

export default connect(mapStateTypes,mapDispatchToProps)(App)