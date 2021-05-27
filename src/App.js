import React from 'react';
import logo from './JJ(21).svg';

import { BrowserRouter, Route, Link }  from 'react-router-dom';
import Projects from './'
import './App.css';

function App() {
  return (
      <BrowserRouter>

         <div className="App">
             <Route exact path="/" components={ Projects } />
             <Route path="/articles" components={ Articles } />
             <Route path="/about" component={ About } />

             <div className="navigation-container">
             <img src={logo} className="App-logo" alt="Logo" />
      <div className="nav-sub">

          <Link to="/" className="item">Projects</Link>
          <Link to="/articles" className="item">Articles</Link>
          <Link to="/about" className="item">About</Link>

      </div>
     </div>
   </div>
      </BrowserRouter>
  );
}

export default App;
