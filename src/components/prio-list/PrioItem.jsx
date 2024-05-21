const PrioItem = ({ item, num }) => {
	// för att rendera något när item är undefined
	if (!item) {
		return null; // Returnerar null om item är undefined
	}

	let itemClass = 'item';
	if (item.late) itemClass += ' due';

	return (
		<div key={`${item.id}-${num}`} className={itemClass}>
			{num}. {item.text}
		</div>
	);
};

export default PrioItem;
