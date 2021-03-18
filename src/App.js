import React from 'react';
import'./reset.css';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';
import Team from './Components/Team';

function App() {


  return (
    <div className="App">
      <Header/>
      <Services/>
      <Portfolio/>
      <About/>
      <Team/>
      <Contact/>
    </div>
  );
}

export default App;
