import React, {Component} from "react";
import "./style.css";
import Hero from './Components/Hero.js';
import AppBar from './Components/AppBar.js';
import CurrentWatch from './Components/CurrentWatch.js';
import Cards from './Components/Cards.js';

class App extends Component {
render() {
  return (
    <div>
      <AppBar />
      <Hero />
      <h2>You are currently watching:</h2>
      <CurrentWatch />
      <h2>You May Also Enjoy...</h2>
      <Cards />
    </div>
  );
}
};

export default App;