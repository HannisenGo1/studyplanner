import React from 'react';
import { splitTodosIntoDays } from '../utils/list';
import Day from '../components/day/Day';
import { useStore } from '../data/store';
import PrioList from './prio-list/PrioList';



const Main = () => {
  const todos = useStore(state => state.todos);
  const days = splitTodosIntoDays(todos);
  
  const dayNames = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];
  
  return (
    <main> 
 
    <div className="day-view">
    {dayNames.map(dayName => (
      <Day key={dayName} day={{ name: dayName, todos: days[dayName.toLowerCase()] }} />
    ))}
    </div>
    <div>
    <PrioList/>
    </div>
    </main>
  );
};

export default Main;

