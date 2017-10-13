import {addTodo,toggleTodo,editTodo,delTodo} from '../contains/ActionTypes'
 
const initialState = [
  {
    id:"0",
    text:'start',
    completed:true,
    edit:false
  }
]

const todo = (state, action) => {
    switch (action.type) {
      case addTodo:
        return {
          id: action.id,
          text: action.text,
          completed: false,
          edit:false
        };
      case toggleTodo:
        if (state.id !== action.id) {
          return state;
        }
        return {
            ...state,
            completed: !state.completed
        };
      case editTodo:
        if(state.id == action.id){
          if(!state.edit){
            return {
              ...state,
              edit: !state.edit
            }
          }
          return {
            ...state,
            text: action.text,
            edit: !state.edit
          }
        }
      case delTodo:
        console.log(state);
      default:
        return state;
    }
  };
  
const todos = (state = initialState, action) => {
  switch (action.type) {
    case addTodo:
      return [
        ...state,
        todo(undefined, action),
      ];
    case toggleTodo:
      return state.map(t =>
        todo(t, action)
      );
    case editTodo:
      return state.map(t =>
        todo(t, action)
      );
    case delTodo:
      state.splice(action.id,1);
      return [
        ...state,
      ]
    default:
      return state;
  }
};
export default todos;
  