import * as types from '../contants/ActionTypes'

export const addTodo = text =>({
    type:types.AddTodo,
    text
})