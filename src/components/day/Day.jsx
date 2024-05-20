import React from 'react';
import Item from './Item';

const Day = ({ day }) => {
  const daysOfWeek = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'lördag', 'söndag'];
  
  return (
    <div className="day">
    {daysOfWeek.map((dayName, index) => (
      <div key={index}>
      <h2>{dayName}</h2>
      
      {/*  rendera Item-komponenter för varje dag  */}
      {day.map(item => (
        <Item key={item.id} item={item} />
      ))}
      
      <div className="controls">
      <button>Ny uppgift</button>
      </div>
      </div>
    ))}
    </div>
  );
};

export default Day;
{/*  Acceptans kriterier:
1.När jag navigerar till sidan där mina uppgifter visas, 
bör jag kunna se alla dagar i veckan.
2.Dagarna ska komma i ordning från måndag till söndag
*/}
