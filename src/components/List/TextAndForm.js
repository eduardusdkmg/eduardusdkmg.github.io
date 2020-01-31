import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editTodo, deleteTodo }  from '../../store/actions/todoAction.js'

class TextAndForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            viewMode : 'show',
            text : props.todo
        }
    }

    editButtonHandler = () => {
        this.setState({viewMode: 'edit'})
    }
    
    saveButtonHandler = () => {
        this.props.editTodo(this.props.index, this.state.text)
        this.setState({
            viewMode: 'show'
        })
    }

    cancelButtonHandler = () => {
        this.setState({viewMode: 'show'})
    }

    deleteButtonHandler = () => {
        this.props.deleteTodo(this.props.index)
    }

    onChangeHandler = (e) => {
        this.setState({text:e.target.value})
    }


    render(){
        let todo = (
            <p>{this.props.todo}</p>
        )
        let buttonEdit = (
            <button className="btn btn-primary" onClick={this.editButtonHandler}> Edit </button>
        )
        if(this.state.viewMode === "edit"){
            todo = (
                <input 
                    className="form-control" 
                    type="text" 
                    value={this.state.text} 
                    onChange={this.onChangeHandler}
                />
            )
            buttonEdit = (
                <span>
                    <button className="btn btn-primary" onClick={this.saveButtonHandler}> Save </button>
                    <button className="btn btn-warning" onClick={this.cancelButtonHandler}> Cancel </button>
                </span>
            )
        }
        return(
            <div className="row">
                <div className="col-md-8">
                    {todo}
                </div>
                <div className="col-md-4">
                    {buttonEdit}<button className="btn btn-danger" onClick={this.deleteButtonHandler}> delete</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editTodo: (index, todo) => dispatch(
            editTodo({index, todo})
        ),
        deleteTodo: (index) => dispatch( 
            deleteTodo(index)
        )
    }
}

export default connect(null, mapDispatchToProps)(TextAndForm)