import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
   name:'counter',
   initialState:{
    value:0,
   },
   reducers:{
    decrement(state){
        state.value-=1;
    },
    increment(state){
        state.value+=1;
    },
    addValue(state,action){
       const number = +action.payload;
      state.value+=number;
    }
   }
})

export default counterSlice;
export const counterAction = counterSlice.actions;