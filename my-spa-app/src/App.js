import React from "react";
import Home from "./home";
import Contact from "./contact"; 
import Charts from "./charts";
import About from "./about";
import AppRouter from "./AppRouter";
import Navigation from "./Navigation";


class App extends React.Component{
  render(){
    return (
      <div>
        <div>
          <Home/>
          <Contact/>
        
          <About/>
        </div>
      </div>
   
    );
  }
}

export default App;
