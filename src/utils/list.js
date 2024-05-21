function splitTodosIntoDays(todos) {
    if (!Array.isArray(todos)) {
        console.error("Expected todos to be an array but got:", todos);
        return [[], [], [], [], [], [], []];
    }

    const Måndag = todos.filter(t => t.day === 'Måndag');
    const Tisdag = todos.filter(t => t.day === 'Tisdag');
    const Onsdag = todos.filter(t => t.day === 'Onsdag');
    const Torsdag = todos.filter(t => t.day === 'Torsdag');
    const Fredag = todos.filter(t => t.day === 'Fredag');
    const Lördag = todos.filter(t => t.day === 'Lördag');
    const Söndag = todos.filter(t => t.day === 'Söndag');

    return [Måndag, Tisdag, Onsdag, Torsdag, Fredag, Lördag, Söndag];
}

export { splitTodosIntoDays };


// Tips! Du kan få användning för funktioner som:
// + kopierar en lista och byter plats på två element (snooze)
// + lägger till ett element på en viss plats i en lista
// https://www.w3schools.com/jsref/jsref_splice.asp
// https://www.freecodecamp.org/news/javascript-splice-how-to-use-the-splice-js-array-method/

