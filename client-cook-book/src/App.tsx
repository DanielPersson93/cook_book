import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import './App.css';
import Title from './shared/components/Title';
import SinglePage from './pages/single/SinglePage';

function App() {
  return (
    <div className="App">
      <Title>A'LA SIMPLE</Title>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<SinglePage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
