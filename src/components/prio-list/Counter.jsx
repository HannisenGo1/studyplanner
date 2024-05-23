import React from 'react';

const Count = ({ todos }) => {
  // Räkna antalet todos som är klara
  const completedCount = todos.filter(todo => todo.done).length;

  const totalCount = todos.length;

  return (
    <div className="count-div">
      <p>{`Att göra: ${completedCount}/${totalCount} klara`}</p>
    </div>
  );
};

export default Count;
