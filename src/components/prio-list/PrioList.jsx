import React, { useState } from 'react';
import PrioItem from './PrioItem';
import { useStore } from '../../data/store.js';

// TO-DO: göra så att filtreringen blir kopplat till todo/items i ordning beroende på dag.
// INTE KLAR !!!!

const PrioList = () => {
  const todos = useStore(state => state.todos);
  const [searchText, setSearchText] = useState('');
  
  // Filtrera todo-items baserat på söktexten
  const filteredItems = todos.filter(item =>
    item.text.toLowerCase().includes(searchText.toLowerCase())
  );
  
  return (
    <div className="prio-list">
    <h2>Vad ska jag göra nu?</h2>
    <div className="list-container">
    
    <input
    type="search"
    placeholder="Filtrera uppgifter"
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
    />
    
    <div className="prio-items">
    {/* Rendera filtrerade todo-items */}
    {filteredItems.map((item, index) => (
      <PrioItem key={`${item.id}-${index}`} item={item} num={index + 1} />
    ))}
    </div>
    </div>
    </div>
  );
};

export default PrioList;

