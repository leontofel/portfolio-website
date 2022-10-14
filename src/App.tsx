import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>

    </>
  );
}

export default App;
