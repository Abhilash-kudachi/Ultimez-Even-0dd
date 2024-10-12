import React, { useState } from 'react';
import './App.css'; // Make sure to import the CSS file

const EvenOddArray = () => {
  const [inputValue, setInputValue] = useState(''); // Store input value
  const [evenNumbers, setEvenNumbers] = useState([]); // Store even numbers
  const [oddNumbers, setOddNumbers] = useState([]);  // Store odd numbers

  // Handle input value change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle adding input to arrays
  const addNumber = () => {
    const number = parseInt(inputValue, 10); // Convert input to a number

    if (!isNaN(number)) {
      // Separate even and odd numbers
      if (number % 2 === 0) {
        setEvenNumbers([...evenNumbers, number]);
      } else {
        setOddNumbers([...oddNumbers, number]);
      }
    }

    // Clear input field
    setInputValue('');
  };

  return (
    <div className="container">
      <h2>Even and Odd Array</h2>

      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a number"
        />
        <button onClick={addNumber}>Submit</button>
      </div>
      <h3>Even Numbers:</h3>
      <div>
      <div className="number-display">
  {evenNumbers.length > 0 ? (
    <ul>
      {evenNumbers.map((num, index) => (
        <li key={index}>{num}</li>
      ))}
    </ul>
  ) : (
    <span>No even numbers</span>
  )}
</div>

<h3>Odd Numbers:</h3>
<div className="number-display">
  {oddNumbers.length > 0 ? (
    <ul>
      {oddNumbers.map((num, index) => (
        <li key={index}>{num}</li>
      ))}
    </ul>
  ) : (
    <span>No odd numbers</span>
  )}
</div>
      </div>
    </div>
  );
};

export default EvenOddArray;

