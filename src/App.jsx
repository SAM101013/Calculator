import React, { useState } from 'react';
import './App.css';

const CalculatorApp = () => {
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState('');

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C', 'sin', 'cos', 'tan',
    'sqrt', '(', ')', '^'
  ];

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(input);
        setInput(result.toString());
        setAnswer(result.toString());
      } catch (error) {
        setAnswer('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setAnswer('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="calculator">
      <div className="input-screen">
        <div className="input">{input}</div>
        <div className="answer">= {answer}</div>
      </div>
      <div className="buttons">
        {buttons.map((button, index) => (
          <button key={index} onClick={() => handleButtonClick(button)}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CalculatorApp;







