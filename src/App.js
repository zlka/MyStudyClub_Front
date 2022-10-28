import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CardView} from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="view" element={<CardView />} />
      </Routes>
    </div>
  );
}

export default App;
