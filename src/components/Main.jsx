import React from 'react';
import { splitTodosIntoDays } from '../utils/list'
import Day from '../components/day/Day';
import { useStore } from '../data/store'

const Main = () => {
  const todos = useStore(state => state.todos);
  const days = splitTodosIntoDays(todos);

  const dayNames = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];

  return (
	<main> 
    <div className="day-view">
      {days.map((dayTodos, index) => (
        <Day key={dayNames[index]} day={{ name: dayNames[index], todos: dayTodos }} />
      ))}
    </div>

	</main>
  );
};

export default Main;
