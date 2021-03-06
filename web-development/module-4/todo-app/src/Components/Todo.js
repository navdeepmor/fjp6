import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [ { task:'Learn DOM', id: 0 }, { task: 'Learn React', id: 1 }, { task: 'Create chat app', id: 2 } ],
            currTask: ''
        }
    }

    handleChange = (e) => {                                                                                         // Incase if we use normal function here then it wouldn't get the Todo class this  
      // console.log(e.target.value);
      this.setState({
        currTask: e.target.value
      })
    }

    handleAddTask = () => {
      this.setState({
        tasks: [ ...this.state.tasks, { task: this.state.currTask, id: this.state.tasks.length } ],                 // all changes in arr, obj in react would be immutable changes  
        currTask: ''
      })
    }

    handleDelete = (id) => {
      let narr = this.state.tasks.filter((taskObj) => {
                  return taskObj.id != id;
                })
      // console.log(arr);
      this.setState({
        tasks: [...narr]
      })
    }

    render() {
      // console.log('render');
      return (
        <div>
          <p>Enter task below:</p>
          <input type = "text" value = { this.state.currTask } onChange = { this.handleChange } />
          <button onClick = { this.handleAddTask }> Add </button>
          <ul>
            {
              this.state.tasks.map((taskObj) => (
                <li key = { taskObj.id }>                                                                                         
                  <p> { taskObj.task } </p>  
                  <button onClick = { () => this.handleDelete(taskObj.id) }> Delete </button>                                                                                                                                                                                
                </li>
              ))
            }
          </ul>
        </div>
      )
    }
}

// export const arr = [-11, 9, -4, 3];
export default Todo;


/*
  Note:
    1. line 27: whenever we print such list then we should provide a key to each value, with this when we had changes in list it would identifying the changes.
    2. line 28: use ( ) instide of { } | { } is used to return JSX  
    3. line 46: { this.handleDelete(id) } 
                above statement is understood by compiler as call this.handleDelete(id) & then fn would be invoked then and there. Here this call can be aviod with giving fn def as () => this.handleDelete(id)
    4. line 45: if we would have write like below the then at line 75 it wouldn't got this (Problem). 
                Problem:
                  this.state.tasks.map(function(taskObj) {
                    return (
                      <li key = { taskObj.id }>                                                                                         
                        <p> { taskObj.task } </p>  
                        <button onClick = { () => this.handleDelete(taskObj.id) }> Delete </button>                                                                                                                                                                                
                      </li>
                    )
                  }) 
                Soln:
                  1. ref line 45
                  2. this.state.tasks.map(function(taskObj) {
                      return (
                        <li key = { taskObj.id }>                                                                                         
                          <p> { taskObj.task } </p>  
                          <button onClick = { () => this.handleDelete(taskObj.id) }> Delete </button>                                                                                                                                                                                
                        </li>
                      )
                    }.bind(this)) 

  Issues:
    1. Add empty string
*/