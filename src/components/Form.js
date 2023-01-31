import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../reducer/counterSlice";

const Form = () => {
  const [value, setValue] = useState(0);
   const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
     dispatch(counterAction.addValue(value));
     setValue(0);
  };
  const inputHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Add number</label>
        <input type="number" onChange={inputHandler} value={value}/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
