import { useState } from "react";
import { useStore } from '../../data/store';


const Item = ({ item }) => {
	let itemClass = 'todo-item';
	if (item.done) itemClass += ' done';
	if (item.late) itemClass += ' due';
	
	const [editing, setEditing] = useState(false);
	const [editedText, setEditedText] = useState(item.text || '');
	const todos = useStore(state => state.todos);
    const setTodos = useStore(state => state.setTodos);
	const snoozeTodo = useStore(state => state.snoozeTodo);
	const toggleTodo = useStore(state => state.toggleTodo);
	const deleteTodo = useStore(state => state.deleteTodo);
	
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
		const updatedTodos = todos.map(todo =>
			todo.id === item.id ? { ...todo, text: editedText } : todo
		);
		console.log('Save button clicked');
		console.log('Edited text:', editedText);
		console.log('Updated todos:', updatedTodos);
		setTodos(updatedTodos);
		setEditing(false);
	};
	
	const handleSnooze = () => {
		snoozeTodo(item.id);
	};
	
	const handleDelete = () => {
		console.log('handleDelete called with item id:', item.id);
		deleteTodo(item.id);
	};


	return (
		<div className={itemClass} data-cy="todo-item">
		<input
		type="checkbox"
		checked={item.done}
		onChange={handleChange}
		/>
		{editing ? (
			<div className="edit-container">
			<input type="text" value={editedText} onChange={handleTextChange} data-cy="input-field"/>
			
			<span className="icon save" title="Spara ändringar" onClick={handleSave} data-cy="save-icon"
			>✔️</span>
			</div>

		) : (
			<div className="edit-container">
			<label data-cy="text-label" onClick={handleToggleEdit} > {item.text} </label>
			<span className="icon edit" title="Ändra" onClick={handleToggleEdit}
			data-cy="edit-icon"> ✍️ </span>

			<span className="icon delete" title="Ta bort" onClick={handleDelete}
			data-cy="delete-icon"> 🗑️ </span>

			<span
			className="icon snooze" title="Snooze" onClick={handleSnooze} data-cy="snooze-icon">
			💤</span>
			</div>
		)}
		</div>
	);
};

export default Item;
