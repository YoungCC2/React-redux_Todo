let nextTodoId = 1;
import * as ActionTypes  from '../contains/ActionTypes'

export const addTodo = (text)=> {
    return {
        type:ActionTypes.addTodo,
        id:(nextTodoId++).toString(),
        text,
    }
}

export const editTodo = (id,text)=>{
    return {
        type:ActionTypes.editTodo,
        id,
        text,
    }
}

export const setVisibilityFilter = (filter)=> {
    return {
        type:ActionTypes.setVisibilityFilter,
        filter,
    }
}

export const toggleTodo = (id)=> {
    return {
        type:ActionTypes.toggleTodo,
        id,
    }
}

export const delTodo = (id)=>{
    return {
        type:ActionTypes.delTodo,
        id,
    }
}