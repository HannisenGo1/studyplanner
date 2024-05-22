function splitTodosIntoDays(todos) {
    if (!Array.isArray(todos)) {
        console.error("Expected todos to be an array but got:", todos);
        return {
            måndag: [],
            tisdag: [],
            onsdag: [],
            torsdag: [],
            fredag: [],
            lördag: [],
            söndag: []
        };
    }
    
    const days = {
        måndag: todos.filter(t => t.day.toLowerCase() === 'måndag'),
        tisdag: todos.filter(t => t.day.toLowerCase() === 'tisdag'),
        onsdag: todos.filter(t => t.day.toLowerCase() === 'onsdag'),
        torsdag: todos.filter(t => t.day.toLowerCase() === 'torsdag'),
        fredag: todos.filter(t => t.day.toLowerCase() === 'fredag'),
        lördag: todos.filter(t => t.day.toLowerCase() === 'lördag'),
        söndag: todos.filter(t => t.day.toLowerCase() === 'söndag'),
    };
    
    return days;
}

export { splitTodosIntoDays };



// Tips! Du kan få användning för funktioner som:
// + kopierar en lista och byter plats på två element (snooze)
// + lägger till ett element på en viss plats i en lista
// https://www.w3schools.com/jsref/jsref_splice.asp
// https://www.freecodecamp.org/news/javascript-splice-how-to-use-the-splice-js-array-method/

