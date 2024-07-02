import React from "react";
import BG from './Images/M-BG.jpg';
import NavBar from "./component/NavBar";
import { Outlet } from 'react-router-dom';
import Footer from "./component/Footer";
import NeroZen from "./component/NeroZen";


function App() {
  return (
    <div 
      className="flex flex-col items-center w-full min-h-screen lg:bg-no-repeat md:bg-no-repeat lg:bg-center md:bg-center sm:bg-auto md:bg-cover lg:bg-cover" 
      style={{ backgroundImage: `url(${BG})` }}
    >
      <NavBar />
      <div className="flex-grow w-full">
        <Outlet />
      </div>
      <NeroZen/>
      <Footer/>
    </div>
  );
}

export default App;