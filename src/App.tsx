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
          <h1>Spell your name the Berlin way!</h1>
        </div>

        <div className="main">
          <h3 className="label">
            What's your name?
          </h3>
          <InputBar submitFn={navigate} initValue={name} />
          <Route path="/:name" component={Spelling} />
        </div>

        <div className="sticky-footer">
          <Footer>
            <div className="footer-flex">
              <div className="footer-left">
                <FooterLink>
                  Berlin Alphabet pics by &nbsp;<a href="https://www.instagram.com/natasketch/"><span style={{display: 'inline-block'}}><IGicon /> natasketch</span></a>
                </FooterLink>
              </div>
              <div className="footer-right">
                <FooterLink><GHicon /> <LIicon /></FooterLink>
              </div>
            </div>
          </Footer>
        </div>

      </div>
  )
}

export default App;
