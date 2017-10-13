import React, { PropTypes, Component } from 'react'
import TodoTextInput from './TodoTextInput'

export default class Header extends Component {  //es6组建写法
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }

  handleSave = text => {
    if (text.length > 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <TodoTextInput newTodo
                       onSave={this.handleSave} //添加事项
                       placeholder="What needs to be done?" />
      </header>
    )
  }
}