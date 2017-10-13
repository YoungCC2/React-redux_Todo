import React,{PropTypes} from 'react';
import {connect} from 'react-redux'
import {editTodo,delTodo} from '../actions'

const Todo = ({onClick,completed,text,edit,id,dispatch}) => {
    let input;
    let m = <span onClick={onClick}
        style={{
            textDecoration: completed?"line-through":'none',
            display:'inlinie-block',
            width:'40px',
            height:'100px'
        }}>
        {text}</span>;
    let ed = <span onClick={()=>{ 
            dispatch(editTodo(id,text));
        }}>编辑</span>;
    let del = <span onClick={()=>{
            dispatch(delTodo(id));
    }}>
        删除
    </span>

    if(edit){
        m = <input ref={node => {input = node ;}} type="text" defaultValue={text} onBlur={()=>{
            dispatch(editTodo(id,input.value));
        }}/>
        ed = '';
        del = '';
    }
    return <li>
        {m}
        {ed}
        {del}
    </li>
}



Todo.PropTypes = {
    onClick:PropTypes.func.isRequired,
    completed:PropTypes.bool.isRequired,
    text:PropTypes.string.isRequired
};

// export default Todo;
export default connect()(Todo);