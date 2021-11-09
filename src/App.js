import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartWidget from './components/CartWidget';
import Logo from './components/Logo';
import ItemDetailContainer from './components/ItemDetailContainer';
import Item from './components/Item';





function App(title) {
  return (
    <BrowserRouter>
      <NavBar />
      <Logo title={"Las Alba"} />
      <Routes>

          <Route exact path="/" element={<Logo />}/>
          <Route exact path="/categoria/:categoryID" element={<ItemListContainer />}/>
          <Route exact path="/productos/" element={<ItemListContainer />}/>
          <Route exact path="/detail/:id" element={<Item />}/>
          <Route exact path="/cart" element={<CartWidget />}/>

          

      </Routes>
    </BrowserRouter>
  );
}

export default App;
