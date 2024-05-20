import { useStore } from '../data/store.js';
import Day from "./day/Day";
import PrioList from "./prio-list/PrioList.jsx";
import { splitTodosIntoDays } from '../utils/list.js';

const Main = () => {
	const todos = useStore(state => state.todos);
	const splitDays = splitTodosIntoDays(todos);
	// hämta arrayen med dagar(keys) hämtar med namn 
	const days = Object.keys(splitDays).map(name => ({ name, todos: splitDays[name] }));

	return (
		<main>
		<div className="day-view">
		{days.map((day, index) => (
			<Day day={day} key={index} />  
		))}
		</div>
		
		<hr />
		
		<PrioList />
		</main>
	);
};

export default Main;

