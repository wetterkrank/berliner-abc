import React from 'react';
import { Route, useRouteMatch } from "react-router-dom";

import './App.css';
import InputBar from './components/input_bar';
import Footer, { FooterLink } from './components/footer';
import Spelling from './components/spelling';

import { ReactComponent as GHicon } from './icons/github.svg';
import { ReactComponent as IGicon } from './icons/instagram.svg';
import { ReactComponent as LIicon } from './icons/linkedin.svg';

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
            <FooterLink><GHicon /> <LIicon /></FooterLink><br />
            <FooterLink>Berlin Alphabet pics by <a href="https://www.instagram.com/natasketch/"><IGicon /> natasketch</a></FooterLink><br />
          </Footer>
        </div>

      </div>
  )
}

export default App;
