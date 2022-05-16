import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import './App.css';
import Title from './shared/components/Title';
import SinglePage from './pages/single/SinglePage';
import styled from 'styled-components';

const MainContent = styled.div`
display:flex;
justify-content:center;
`

function App() {
  return (
    <div className="App">
      <Title>A'LA SIMPLE</Title>
      <MainContent>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryUrl" element={<Home />} />
            <Route path="/:id" element={<SinglePage />} />
          </Routes>
        </BrowserRouter>
      </MainContent>
    </div>
  );
}

export default App;
