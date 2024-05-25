import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './view/common/Navbar/NavBar';
import {MainContent} from "./view/common/MainContent/MainContent";
import {Footer} from "./view/common/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

function App()  {
  return (
      <div>
         <BrowserRouter>
          <NavBar></NavBar>
          <MainContent></MainContent>
          <Footer></Footer>
         </BrowserRouter>
      </div>
  );
}

export default App;
