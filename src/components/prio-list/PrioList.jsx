import React, { useState } from 'react';
import PrioItem from './PrioItem';
import { useStore } from '../../data/store.js';
import { getToday } from '../../utils/date.js';

const PrioList = () => {
  const todos = useStore(state => state.todos);
  const [searchText, setSearchText] = useState('');
  const today = getToday();

  const filteredAndSortedItems = todos
    .filter(item => item.text.toLowerCase().includes(searchText.toLowerCase()))
    .sort((a, b) => {
      // todo-items med dagens datum och sortera i stigande ordning
      const dayOrder = ['måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag', 'söndag'];
      return dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day);
    });

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
        
          {filteredAndSortedItems.map((item, index) => (
            <PrioItem key={`${item.id}-${index}`} item={item} num={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrioList;

