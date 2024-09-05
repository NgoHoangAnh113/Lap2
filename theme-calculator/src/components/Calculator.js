import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import './Calculator.css'; // Đảm bảo đúng đường dẫn file CSS

const Calculator = () => {
  const [input, setInput] = useState('');
  const [theme, setTheme] = useState('light');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === 'DEL') {
      setInput(input.slice(0, -1));
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`calculator ${theme}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      <Display input={input} />
      <div className="button-grid">
        {['7', '8', '9', 'C', '4', '5', '6', 'DEL', '1', '2', '3', '/', '0', '*', '-', '+', '='].map((btn) => (
          <Button key={btn} value={btn} onClick={() => handleButtonClick(btn)} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
