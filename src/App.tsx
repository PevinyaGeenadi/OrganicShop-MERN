import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './view/Navbar/NavBar';
import {MainContent} from "./view/MainContent/MainContent";
import {Footer} from "./view/Footer/Footer";

function App()  {
  return (
      <div>
        <NavBar></NavBar>
          <MainContent></MainContent>
          <Footer></Footer>

      </div>
  );
}

export default App;
