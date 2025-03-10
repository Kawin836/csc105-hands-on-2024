import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Add Function
  function add() {
    let input = document.getElementById("input").value;
    let result = document.getElementById("result").innerHTML;
    let value = parseInt(result) + parseInt(input);
    document.getElementById("result").innerHTML = value;
  }

  // Subtract Function
  function subtract() {
    let input = document.getElementById("input").value;
    let result = document.getElementById("result").innerHTML;
    let value = parseInt(result) - parseInt(input);
    document.getElementById("result").innerHTML = value;
  }
  
  // Multiply Function
  function multiply() {
    let input = document.getElementById("input").value;
    let result = document.getElementById("result").innerHTML;
    let value = parseInt(result) * parseInt(input);
    document.getElementById("result").innerHTML = value;
  }

  // Divide Function
  function divide() {
    let input = document.getElementById("input").value;
    let result = document.getElementById("result").innerHTML;
    let value = parseInt(result) / parseInt(input);
    document.getElementById("result").innerHTML = value;
  }

  // Reset input Function
  function resetInput() {
    document.getElementById("input").value = "";
  }

  // Reset result Function --> reset result to 0
  function resetResult() {
    document.getElementById("result").innerHTML = 0;
  }

  return (
    <>
      <div className='container'>
        <section>
          <header>
            <h1>Simple Calculator</h1>
          </header>
          <div className="container-result">
            <p>Result:</p>
            <p id='result'>0</p>
          </div>
          <div className='container-input'>
            <input type="number" name="" id="input" placeholder='Enter a number'/>
          </div>
          <div className="container-button">
            <div className='container-operator'>
              <div className='operator'>
                <button onClick={add}>Add</button>
                <button onClick={subtract}>Subtract</button>
                <button onClick={multiply}>Multiply</button>
                <button onClick={divide}>Divide</button>
              </div>
            </div>
            <div className='container-reset'>
              <div className='reset'>
                <button onClick={resetInput}>Reset Input</button>
                <button onClick={resetResult} id='redButton'>Reset Result</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
