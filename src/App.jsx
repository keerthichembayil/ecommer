import React from 'react'
import Header from './components/Header';
import Carttab from './components/Carttab'
import Home from './components/Home'
import { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const App = () => {
  const [searchterm, setSearchTerm] = useState("");
  return (
   <BrowserRouter>
   <div>
    <Header setSearchTerm={setSearchTerm}/>
    <Routes>
      <Route path='/' element={<Home searchterm={searchterm} />}/>
      <Route path='/cart' element={<Carttab/>}/>
    </Routes>
   </div>
   
   </BrowserRouter>
  )
}

export default App
