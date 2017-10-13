import {AddTodo} from '../contants/ActionTypes'

const initialState = [
    {
        text:'start',
        completed:false,
        id:0
    }
]

export default function todos(state = initialState,action){
    switch(action.type){
        case AddTodo:
            return [
                {
                    text:action.text,
                    completed:false,
                    id:state.reduce((maxId,todo)=> Math.max(todo.id,maxId),-1)+1 
                },
                ...state
            ]
        default:
            return state;
    }
}