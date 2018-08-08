import React, { Component } from 'react';
import './App.css';
import NewTask from './components/newTask';
import TaskTable from './components/taskTable';
import SearchBar from './components/searchBar';

class App extends Component {

  constructor(props)
  {
      super(props);

      this.state={
          taskList :Array(0),
          filteredList : Array(0),
          filterFlag : false
      };

      this.handleSubmit= this.handleSubmit.bind(this);
      this.onTaskDelete= this.onTaskDelete.bind(this);
      this.onSearch = this.onSearch.bind(this);
      this.onClickClear = this.onClickClear.bind(this);
  }

  handleSubmit(taskName)
  {
        const newTaskList = this.state.taskList.slice();
        newTaskList.push(taskName);
        this.setState({
            taskList : newTaskList,
            filterFlag : false
        });

  }

  onTaskDelete(index)
  {
      let newTaskList = this.state.taskList.slice();
      let filteredList = this.state.filteredList.slice();
      let filteredTemp =Array(0);
      newTaskList.splice(index,1);
      filteredList.map((nameObj) =>{
         if(nameObj.id !== index)
         {
             filteredTemp.push(nameObj);
         }
      });
      this.setState({
         taskList : newTaskList,
         filteredList : filteredTemp
      });
  }

  onSearch(searchTaskName)
  {
      let newTaskList = this.state.taskList.slice();
      let filteredList  = Array(0);
      newTaskList.map((name,index)=>{
          let bool = name.includes(searchTaskName);
          //console.log(bool);
          if(bool) {
              filteredList = [...filteredList,{id : index, task : name}]
          }
      });
      this.setState({
         filteredList : filteredList,
         filterFlag : true
      });
  }

  onClickClear()
  {
      let newTaskList = this.state.taskList.slice();
      let filteredList = this.state.filteredList.slice();
      newTaskList.splice(0);
      filteredList.splice(0);
      this.setState({
          taskList : newTaskList,
          filteredList : filteredList
      });
  }

  render() {

    let taskDisplayTable;
    if (!(this.state.filterFlag)){
        taskDisplayTable= <TaskTable taskList ={this.state.taskList} onTaskDelete={this.onTaskDelete} flag ={this.state.filterFlag}  />;
    }
    else{
        taskDisplayTable= <TaskTable taskList ={this.state.filteredList} onTaskDelete={this.onTaskDelete} flag ={this.state.filterFlag}/>
    }
    return (
      <div className="App">
            <div>To-Do Application</div>
            <div>Now you can relax!!!</div>

          <NewTask handleSubmit={this.handleSubmit}/>
          <SearchBar onSearch={this.onSearch}/>
          {taskDisplayTable}

          <input type="button" value= "Clear all list"  onClick={this.onClickClear}/>
      </div>
    );
  }
}

export default App;
