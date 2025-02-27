import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body1";
import Hero from "./Components/Hero";
import Mobile from "./Components/Mobile";
import GlobalContext from "./Components/GlobalStore";
import { useState } from "react";

function Main(){

  console.log("created @Dhritish");
  

  return(
    <>

      <Header/>
      <Hero></Hero>
      <Body/>
      <Mobile></Mobile>

    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main/>);