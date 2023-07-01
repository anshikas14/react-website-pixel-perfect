import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Link } from 'react-router-dom';

import Services from './components/pages/Services';
import Speakers from './components/pages/speakers';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';

const anshika = () => {
  return(
    <>
      <header>
        <a href="#">Logo</a>
        <nav>
          <ul>
            <li>
              <Link to ="/">Home</Link>
            </li>
            <li>
              <Link to="/speakers">Speakers</Link>
            </li>
            <li>
              <Link to="/committee">Committee</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/speakers' element={<Speakers />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
   
    </>
  )
}




export default App;
