import React from 'react';
import './App.css';
import Firstpage from "./Components/Firstpage";
import Header from "./Components/Header";
//import Signup from "./Components/Signup";
//import Car from "./Components/Car";
import Bike from "./Components/Bike";
import Health from "./Components/Health";
import Life from "./Components/Life";
import Commercial from "./Components/Commercial";
import Third from "./Components/Third";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Manfcard from "./Components/Manfcard";


function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Dashboard></Dashboard>
      {/* <div>
        
        <Switch>
          <Route path="/" exact component={Firstpage}></Route>
          <Route path="/Bike" component={Bike}></Route>
          <Route path="/Health" component={Health}></Route>
          <Route path="/Life" component={Life}></Route>
          <Route path="/Commercial" component={Commercial}></Route>
          <Route path="/Third" component={Third}></Route>
          <Route path="/Login" component={Login}></Route>
        </Switch>
        
     </div> */}
     {/* <Manfcard></Manfcard> */}
    </BrowserRouter>

  );
}

export default App;
