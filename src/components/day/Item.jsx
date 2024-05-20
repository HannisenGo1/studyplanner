import { useState } from "react";

const Item = ({ item, todos}) => {
	let itemClass = ''
	if( item.done ) itemClass += 'done'
	if( item.late ) itemClass += 'due'
	
	const [editing, setEditing] = useState(false);
	const [editedText, setEditedText] = useState(item.text);
	const [checked, setChecked] = useState(item.done);
	
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
			<div>
			<input
			type="text"
			value={editedText}
			onChange={handleTextChange}
			autoFocus
			/>
			<span
			title="Spara ändringar"
			onClick={handleSave}
			style={{ color: "green", cursor: "pointer" }}
			>
			✔️
			</span>
			</div>
		) : (
			<div>
			<label onClick={handleToggleEdit}>
			{item.text}
			</label>
			<span title="Ändra" onClick={handleToggleEdit}>
			✍️
			</span>
			</div>
		)}
		<span title="Ta bort" onClick={handleDelete}>
		🗑️
		</span>
		</div>
	);
};

export default Item
