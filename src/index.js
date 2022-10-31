import React from 'react';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); // 
// const root = createRoot(document.getElementById('root'));
root.render(

    <Router>
      <App />
    </Router>

);

