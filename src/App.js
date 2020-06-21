import React from 'react';
import './App.css';
import Header from './components/Header';
import Jumbotron from "./components/Jumbotron";
import Steps from "./components/Steps";

function App() {
  return (
    <div className="App">
        <Header />
        <Jumbotron />
        <Steps title='How it Works'/>
    </div>
  );
}

export default App;
