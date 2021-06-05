import React, {useState} from 'react';
import '../CSS/AddEquation.css';

const AddEquation = ({ setEquation }) => {
  const [number, setNumber] = useState(null);

  const inputHandler = (e) => {
    setNumber(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setEquation(number);
  }

  return (
    <div className="AddEquation">
      <p>Number of equations</p>
      <form onSubmit={submitHandler}>
        <input type="number" onWheel={(e) => e.target.blur()} onChange={inputHandler}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddEquation;