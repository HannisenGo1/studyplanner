import { useState } from "react";
import { useStore } from '../../data/store';

const Item = ({ item }) => {
	let itemClass = 'todo-item';
	if( item.done ) itemClass += 'done'
	if( item.late ) itemClass += 'due'
	
	const [editing, setEditing] = useState(false);
	const [editedText, setEditedText] = useState(item.text);
	const [checked, setChecked] = useState(item.done);
	
	const daysOfWeek = ['måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag', 'söndag'];

	const [todos, setTodos] = useStore(state => [state.todos, state.setTodos]);
    const snoozeTodo = useStore(state => state.snoozeTodo);
	const toggleTodo = useStore(state => state.toggleTodo);
	
	
	console.log('items::', item)
	const handleChange = () => {
		toggleTodo(item.id);
	};
	
	const handleToggleEdit = () => {
		setEditing(!editing);
	};
	
	const handleTextChange = (e) => {
		setEditedText(e.target.value);
	};
	
	const handleSave = () => {
		item.text = editedText;
		setEditing(false);
		setTodos([...todos]);
	};
	
	const handleSnooze = () => {
		snoozeTodo(item.id)
	}
	
	const handleDelete = () => {
		const updatedTodos = todos.filter(todo => todo.id !== item.id);
		setTodos(updatedTodos);
	}
	return (
		<> 
		<div className={`item ${item.done ? 'done' : ''}`} data-cy="todo-item">
		<input
		type="checkbox"
		checked={item.done}
		onChange={handleChange}/>
		{editing ? (
			<div className="edit-container">
			<input
			type="text"
			value={editedText}
			onChange={handleTextChange}
			data-cy="input-field"/>
			<span
			className="icon save" title="Spara ändringar"
			onClick={handleSave} data-cy="save-icon"> ✔️ </span>
			</div>
		) : (
			<div className="edit-container">
			<label onClick={handleToggleEdit}>
			{item.text}
			</label>
			<span className="icon edit" title="Ändra" 
			onClick={handleToggleEdit} data-cy="edit-icon">  ✍️  </span>
			
			<span className="icon delete" title="Ta bort"  
			onClick={handleDelete}> 🗑️ </span>
			
			<span className="icon snooze" title="Snooze" 
			onClick={handleSnooze} 
			data-cy="snooze-icon"> 💤 </span>
			</div>
		)}
		</div>
		</>
	);
};

export default Item