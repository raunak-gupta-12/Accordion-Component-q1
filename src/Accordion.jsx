import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ sections }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {sections.map((section, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-header ${openIndex === index ? 'open' : ''}`}
            onClick={() => handleToggle(index)}
          >
            {section.header}
          </div>
          <div
            className={`accordion-content ${
              openIndex === index ? 'open' : ''
            }`}
          >
            {section.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
