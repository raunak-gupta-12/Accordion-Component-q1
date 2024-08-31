import React from 'react';
import Accordion from './Accordion';
import './App.css';


const sections = [
  {
    header: 'Section 1',
    content: 'Content for section 1...',
  },
  {
    header: 'Section 2',
    content: 'Content for section 2...',
  },
  {
    header: 'Section 3',
    content: 'Content for section 3...',
  },
];

const App = () => {
  return (
    <div className="App">
      <h1>Accordion Component</h1>
      <Accordion sections={sections} />
    </div>
  );
};

export default App;
