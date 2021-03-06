import React,{Component,PropTypes} from 'react'
import classnames from 'classnames'
export default class Header extends Component{
    static propTypes = {
        text:PropTypes.string,
        placeholder:PropTypes.string
    }

    state = {
        text:this.props.text || ''
    }

    handleSubmit = e =>{
        const text = e.target.value.trim();
        if(e.which === 13){
            this.props.onSave(text)
            if(this.props.newTodo){
                this.setState({text:''})
            }
        }
    }

    handleChange = e=>{
        this.setState({text:e.target.value})
    }

    handleBlur = e=>{
        if(!this.props.newTodo){
            this.props.onSave(e.target.value)
        }
    }


    render(){
        return (<input
            type="text"
            className={classnames({edit: this.props.editing,
                 'new-todo': this.props.newTodo})}
            placeholder={this.props.placeholder}
            value={this.state.text}
            onKeyDown={this.handleSubmit}
            onChange={this.handleChange}
            onBlur={this.handleBlur}/>)
    }
}