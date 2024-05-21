import { useState } from "react";
import { useStore } from '../../data/store';

const Item = ({ item }) => {
	console.log('Rendering Item component for:', item);
	let itemClass = ''
	if( item.done ) itemClass += 'done'
	if( item.late ) itemClass += 'due'
	
	
	const [editing, setEditing] = useState(false);
	const [editedText, setEditedText] = useState(item.text);
	const [checked, setChecked] = useState(item.done);
	
	const setTodos = useStore(state => state.setTodos);
	const todos = useStore(state => state.todos);
	
	
	const handleToggleEdit = () => {
		setEditing(!editing);
	};
	
	const handleTextChange = (e) => {
		setEditedText(e.target.value);
	};
	
	const handleSave = () => {
		item.text = editedText;
		setEditing(false);
	};
	
	const handleChange = () => {
		setChecked(!checked);
	};
	
	const handleDelete = () => {
		const updatedTodos = todos.filter(todo => todo.id !== item.id);
		setTodos(updatedTodos);
	}
	return (
		<div className="item">
		<input
		type="checkbox"
		checked={checked}
		onChange={handleChange}
		/>
		{editing ? (
			 <div className="edit-container">
			 <input
			   type="text"
			   value={editedText}
			   onChange={handleTextChange}
			   autoFocus
			 />
			 <span
			   className="icon save"
			   title="Spara ändringar"
			   onClick={handleSave}
			 >
			   ✔️
			 </span>
		   </div>
		 ) : (
		   <div className="edit-container">
			 <label onClick={handleToggleEdit}>
			   {item.text}
			 </label>
			 <span className="icon edit" title="Ändra" onClick={handleToggleEdit}>
			   ✍️
			 </span>
			 <span className="icon delete" title="Ta bort" onClick={handleDelete}>
			   🗑️
			 </span>
		   </div>
		 )}
	   </div>
	);
};

export default Item
