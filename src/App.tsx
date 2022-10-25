import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import TechPage from './pages/Technologies/TechPage';
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <AnimatePresence exitBeforeEnter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/techstack' element={<TechPage />} />
        </Routes>
      </AnimatePresence>

    </>
  );
}

export default App;
