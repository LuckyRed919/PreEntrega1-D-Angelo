import './App.css';
import Navbar from './components/Nav/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <header className="Header">
        <Navbar/>
      </header>
      <body>
        <ItemListContainer/>
      </body>

    </div>
  );
}

export default App;
