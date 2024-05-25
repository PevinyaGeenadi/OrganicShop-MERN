import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './view/common/Navbar/NavBar';
import {MainContent} from "./view/common/MainContent/MainContent";
import {Footer} from "./view/common/Footer/Footer";

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
