import React, { Component } from 'react'
import {Provider} from 'react-redux'
import './App.css'
import Form from './components/Form/Form'
import List from './components/List/List'
import NotesList from './components/NotesList/NotesList'
import store from './store'

class App extends Component {
  constructor () {
    super()
    this.state = {
      todos: []
    }
  }
  
  handleSubmit = (todo) => {
    this.setState(prevState => (
      {todos: prevState.todos.concat(todo) }
    ))
  }

  render() {
    return (
        <Provider store={store}>
            <div className="App container">
                <Form/>
                <List/>  
                <NotesList/>      
            </div>
        </Provider>
    );
  }
}

export default App;
