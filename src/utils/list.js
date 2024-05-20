function splitTodosIntoDays(todos) {
    const days = {
        måndag: [],
        tisdag: [],
        onsdag: [],
        torsdag: [],
        fredag: [],
        lördag: [],
        söndag: []
    };
    
    todos.forEach(todo => {
        if (days[todo.day]) {
            days[todo.day].push(todo);
        }
    });
    
    return days;
}

export { splitTodosIntoDays };






// Tips! Du kan få användning för funktioner som:
// + kopierar en lista och byter plats på två element (snooze)
// + lägger till ett element på en viss plats i en lista
// https://www.w3schools.com/jsref/jsref_splice.asp
// https://www.freecodecamp.org/news/javascript-splice-how-to-use-the-splice-js-array-method/


