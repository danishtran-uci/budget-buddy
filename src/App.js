import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/budget-buddy"
          element={<HomePage />}
        />
        <Route
          path="/"
          element={<HomePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;