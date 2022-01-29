import React from 'react';
import './App.css';
import GoalList from './components/GoalList';


const App = () => {
  const courseGoals = [
    {id: 'g1', text: 'Finish The Damn Dishes'},
    {id: 'g2', text: 'Finish the damn course'},
  ]
  return (
    <div>
      <GoalList goals={courseGoals}/>
    </div>
  )
}

export default App;
