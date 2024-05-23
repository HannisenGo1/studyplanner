//const weekdays = ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag']

//function getToday() {
//	return weekdays[new Date().getDay()]
//}
//export { getToday }
function getToday() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' };
    const dateString = today.toLocaleDateString('sv-SE', options);
    
    return dateString;
}

export { getToday };
