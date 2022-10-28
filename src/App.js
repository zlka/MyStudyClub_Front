import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CardView, Dashboard, Home} from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="dashboard" element={<Dashboard />}></Route>
      <Route path="view" element={<CardView />}></Route>
      </Routes>
    </div>
  );
}

export default App;
