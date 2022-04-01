import './styles/App.css';
import './styles/Form.css';
import { render } from 'react-dom';
import { Component } from 'react';
import Personal from './components/personal';
import Education from './components/education';
import Practical from './components/practical';


class App extends Component {

  render() {
    return(
      <div class='container'>
        <h2 class='title'>CV</h2>
        <form>
          <h5 class='sub'>Personal Information</h5>
          <Personal />
          <h5 class='sub'>Education</h5>
          <Education />
          <h5 class='sub'>Professional Experience</h5>
          <Practical />
        </form>
      </div>
    )
  }
 
}

export default App;
