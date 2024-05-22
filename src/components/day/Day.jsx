import React, { useState } from 'react';
import Item from './Item';
import { useStore } from '../../data/store';

const Day = ({ day }) => {
  if (!day) {
    return <div>Inga uppgifter</div>;
  }
  
  const { name, todos = [] } = day;
  const [newItemText, setNewItemText] = useState('');
  const [adding, setAdding] = useState(false);
  const setTodos = useStore(state => state.setTodos);
  const allTodos = useStore(state => state.todos);
  
  const handleAddNewItem = () => {
    if (newItemText.trim() === '') return;
    const newItem = {
      id: Math.max(...allTodos.map(item => item.id)) + 1,
      day: name,
      done: false,
      late: false,
      text: newItemText,
    };
    setTodos([...allTodos, newItem]);
    setNewItemText('');
    setAdding(false);
  };
  
  return (
    <div className="day">
    <h2>{name}</h2>
    {Array.isArray(todos) && todos.length > 0 ? (
      todos.map(item => (
        <Item key={item.id} item={item} />
      ))
    ) : (
      <p>Inga uppgifter</p>
    )}
    <div className="controls">
    {adding ? (
      <>
      <input
      type="text"
      value={newItemText}
      onChange={(e) => setNewItemText(e.target.value)}
      placeholder="Ny uppgift"
      />
      <button className="button-add" onClick={handleAddNewItem}> ✔️ </button>
      <button className="button-no" onClick={() => setAdding(false)}>❌</button>
      </>
    ) : (
      <button onClick={() => setAdding(true)}>Ny uppgift</button>
    )}
    </div>
    </div>
  );
};

export default Day;


