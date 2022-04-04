import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['wakeUp', 'brushTeeth', 'takeShower', 'work', 'sleep'];

class App extends React.Component {
  render() {
    return (
      <ol> {tasks.map(element => Task(element))}</ol>
    );
  }
}

export default App;
