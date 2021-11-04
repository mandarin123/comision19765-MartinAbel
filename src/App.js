import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App(title) {
  return (
    <div>
      <NavBar />
      <ItemListContainer title="Las Alba" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
