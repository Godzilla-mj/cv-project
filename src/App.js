import './styles/App.css';
import './styles/Form.css';
import React, { useEffect, useState } from 'react'
import uniqid from 'uniqid';
import Personal from './components/personal';
import Education from './components/education';
import Practical from './components/practical';

const App = () => {
  const [eduIds, setEduIds] = useState([])

  const handleAdd = (type) => {
    if (type === 'eduIds') {
      console.log('called')
      setEduIds( prevEduIds => [...prevEduIds, uniqid()]);
      }
  }

  const eduList = eduIds.map((id) => {
    <Education key={id} id={id} />
  })
  
  return(
    
    <div className='container'>
      <h2 className='title'>CV</h2>
      <div>
        <h5 className='sub'>Personal Information</h5>
        <Personal />

        <h5 className='sub'>Education</h5>
        {/* {eduList} */}
        <Education />
        <button onClick={ () => handleAdd('eduIds')}>Add</button>

        <h5 className='sub'>Professional Experience</h5>
        <Practical />

      </div>
    </div>
    )

 
}

export default App;
