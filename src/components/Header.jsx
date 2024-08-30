import { useStore } from '../data/store';

const Header = () => {
    const resetTodos = useStore(state => state.resetTodos);
   
    
    const handleRestartWeek = () => {
        resetTodos();
    };

    return (
        <header>
            <h1>Min Vecka  </h1>
            <button className="restart-week" onClick={handleRestartWeek}>
                Starta om vecka
            </button>
        </header>
    );
};

export default Header;