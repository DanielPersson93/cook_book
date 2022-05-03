import React from 'react';
import logo from './logo.svg';
import star from './assets/star.svg'
import starYellow from './assets/starYellow.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import './App.css';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <Title>A'LA SIMPLE</Title>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>

          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
