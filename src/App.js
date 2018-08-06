import React, { Component } from 'react';
import './App.css';
import NewTask from './components/newTask';
import TaskTable from './components/taskTable';


class App extends Component {

  constructor(props)
  {
      super(props);

      this.state={
          taskList :Array(0)
      };

      this.handleSubmit= this.handleSubmit.bind(this);
      this.onTaskDelete= this.onTaskDelete.bind(this);
  }

  handleSubmit(taskName)
  {
        const newTaskList = this.state.taskList.slice();
          newTaskList.push(taskName);
        console.log(newTaskList);
        this.setState({
            taskList : newTaskList
        });

  }

  onTaskDelete(index)
  {
      let newTaskList = this.state.taskList.slice();
      newTaskList.splice(index,1);
      this.setState({
         taskList : newTaskList
      });
  }

  render() {
    return (
      <div className="App">
            <div>To-Do Application</div>
            <div>Now you can relax!!!</div>

          <NewTask handleSubmit={this.handleSubmit}/>

          <TaskTable taskList ={this.state.taskList} onTaskDelete={this.onTaskDelete}/>
      </div>
    );
  }
}

export default App;
