
import 'bulma/css/bulma.min.css';
import React from 'react';
import './index.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from './components/Nav';
import ForumBoard from './boards/ForumBoard';


function App() {

  return (
    <div>
      <Nav/>
      <Router> 
          <Routes>
          <Route exact key={1}    path="/"                 element={<Home />}/> 
          <Route exact key={2}    path="/board"            element={<ForumBoard />}/>

          </Routes> 
      </Router>
    </div>
  );
}

export default App;
