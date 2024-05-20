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
  
  
  const handleAddNewItem = () => {
    if (newItemText.trim() === '') return;
    const newItem = {
      id: Math.max(...todos.map(item => item.id)) + 1,
      day: name.slice(0, 2).toLowerCase(),
      done: false,
      late: false,
      text: newItemText,
    };
    setTodos([...todos, newItem]);
    setNewItemText('');
    setAdding(false);
  };
  
  return (
    <div className="day">
    <h2>{name}</h2>
    
    {/* Rendera Item-komponenter för varje uppgift på den aktuella dagen */}
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
      <button onClick={handleAddNewItem}>Lägg till</button>
      <button onClick={() => setAdding(false)}>Avbryt</button>
      </>
    ) : (
      <button onClick={() => setAdding(true)}>Ny uppgift</button>
    )}
    </div>
    </div>
  );
};

export default Day;

