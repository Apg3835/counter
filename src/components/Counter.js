import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../reducer/counterSlice";

const Counter = () => {
    const values = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch();
  const minusHandler = () => {
    dispatch(counterAction.decrement());
  };
  const addHandler = () => {
    dispatch(counterAction.increment());
  };

  return (
    <div>
      <button onClick={minusHandler}>-</button>
      {values}
      <button onClick={addHandler}>+</button>
    </div>
  );
};

export default Counter;
