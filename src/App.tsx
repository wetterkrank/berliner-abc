import React from 'react';
import { Route, useRouteMatch } from "react-router-dom";

import './App.css';
import InputBar from './components/input_bar';
import Footer from './components/footer';
import Spelling from './components/spelling';

function App() {
  const navigate = (query: string) => { window.location.pathname = '/' + query; }
  
  const match = useRouteMatch("/:name");
  const name = match ? match.url.slice(1) : '';

  return (
      <div className="App">
        <div className="header">
          {/* Berliner ABC */}
        </div>

        <div className="main">
          <div className="container">
            <h1>Spell your name the Berlin way!</h1>
            <InputBar submitFn={navigate} initValue={name} />
            <Route path="/:name" component={Spelling} />
          </div>
        </div>

        <div className="sticky-footer">
          <Footer>
            Berlin Alphabet pics by Natalia Smolentceva
          </Footer>
        </div>

      </div>
  )
}

export default App;
