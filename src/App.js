import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';





function App(title) {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>

          <Route exact path="/" element={<ItemListContainer title="Las Alba" />} />
          <Route exact path="/itemDetailContainer" element={<ItemDetailContainer />}/>

          

      </Routes>
    </BrowserRouter>
  );
}

export default App;
