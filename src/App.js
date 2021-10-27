import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';

function App(title) {
  return (
    <div>
      <NavBar />
      <ItemListContainer title="Las Alba" />
    </div>
  );
}

export default App;
