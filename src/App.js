import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { useState } from 'react';

import Inicial from "./components/Inicial";
import Cadastro from "./components/Cadastro";
import Menu from './components/Menu';
import Detalhes from './components/Detalhes';
import Navbar from './components/Navbar';
import Carrinho from './components/Carrinho';


function App() {
  const[car, setCar] = useState([]);

  return (
    <BrowserRouter className="App">
      <Routes>
     <Route path='/' element={<Inicial/>}/>
     <Route path='/cadastro' element={<Cadastro/>}/>
     <Route path='/Menu' element={<Menu/>}/>
     <Route path='/detalhes/:id' element={<Detalhes car={car} setCar={setCar}/>}/>
     <Route path='/navbar' element={<Navbar/>}/>
     <Route path='/carrinho' element={<Carrinho car={car} setCar={setCar}/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
