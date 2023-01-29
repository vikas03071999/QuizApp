import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Intro from './components/Intro';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter basename="/QuizApp">
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route path="/playGame" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


