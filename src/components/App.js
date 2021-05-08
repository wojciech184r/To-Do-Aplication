import React, { Component } from 'react';


import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';


class App extends Component {

  counter = 6

  state ={
    tasks: [
      {
        id:0,
        text: 'play in Whitcher',
        date: '2021-05-05',
        important: true,
        active: true,
        finishDate: null
      },
      {id:1,
        text: 'play in Whitcher 3',
        date: '2021-05-10',
        important: false,
        active: true,
        finishDate: null
      },
        {id:2,
          text: 'play in Whitcher 4',
          date: '2021-05-15',
          important: true,
          active: true,
          finishDate: null},
        {id:3,
          text: 'play in Whitcher 5',
          date: '2021-05-20',
          important: false,
          active: true,
          finishDate: null},
        {id:4,
          text: 'play in Whitcher 6',
          date: '2021-05-25',
          important: false,
          active: true,
          finishDate: null},
        {id:5,
          text: 'play in Whitcher 7',
          date: '2021-05-30',
          important: false,
          active: true,
          finishDate: null},
        
    ]
  }
  
  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index,1);
    this.setState({
      tasks
    })
   }

  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if(task.id === id){
        task.active = false;
        task.finishDate = new Date().getTime()
      }

    })
    this.setState({
      tasks
    })
  }

  addTask = (text, date, important ) => {
    const task = {
        id:this.counter,
        text: text,
        date: date,
        important: important,
        active: true,
        finishDate: null
    }
    this.counter++

    this.setState(prevState =>({
      tasks: [...prevState.tasks, task]
    }))

    return true
  }
  render(){ 
    return (
      <div className="App">
         <h1>To Do App</h1>
        <AddTask add={this.addTask}/>
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
      </div>
      );
  }
}
 
export default App;