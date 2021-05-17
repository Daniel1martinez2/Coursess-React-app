import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid]=useState(true); 
  const [label, setLabel] = useState('Course Goal'); 
  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if(event.target.value.trim() !== ''){
      setLabel('Course Goal')
      setIsValid(true); 
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim() === ''){
      setIsValid(false); 
      setLabel('Empty Field')
      return; 
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isValid? '':'invalid'}`}>
        <label>{label}</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
