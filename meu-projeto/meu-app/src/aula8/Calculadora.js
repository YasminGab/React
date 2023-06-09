import React, { useState } from 'react';

export default function Calculadora() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      const result = eval(input); 
      setInput(result.toString());
    } catch (error) {
      setInput('Erro');
    }
  };

  return (
    <div className="calculadora">
      <div className="display">{input}</div>
      <div className="botoes">
        <div className="linha">
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('/')}>÷</button>
        </div>
        <div className="linha">
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('*')}>×</button>
        </div>
        <div className="linha">
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('-')}>-</button>
        </div>
        <div className="linha">
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={() => handleCalculate()}>=</button>
          <button onClick={() => handleClick('+')}>+</button>
        </div>
        <div className="linha">
          <button onClick={() => handleClear()}>C</button>
          <button onClick={() => handleClear()}>CE</button>
        </div>
      </div>
    </div>
  );
}

