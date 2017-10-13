import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import TodoList from './TodoList'

const getVisibleTodos = (todos, filter) =>{
    switch(filter){
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        default:
            throw new Error('Unknown filter: ${filter}.');
    }
};

/**
 * 
 * @param {*} state 
 * 将store中的数据作为props 绑定在组件上
 * 具体就是将state值通过props绑定到组件
 */
const mapStateToProps = (state) => {
    return {
        todos:getVisibleTodos(state.todos,state.visibilityFilter),
    };
};

/**
 * 
 * @param {*} dispatch
 * 将action 作为props 绑定到组件 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) =>{
            dispatch(toggleTodo(id));
        }
    }
}

/**
 * 将属性和方法(action) 传给TodoList
 */
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;