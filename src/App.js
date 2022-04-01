import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import { Component } from 'react';

import Personal from './components/personal';
import Education from './components/education';
import Practical from './components/practical';

class App extends Component {
  constructor() {
    super()

    this.state = {

    }

  }

  render() {
    return(
      <div>
        <Personal />
        <Education />
        <Practical />

      </div>
    )
  }
 
}

export default App;
