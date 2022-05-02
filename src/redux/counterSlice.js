import { createSlice } from "@reduxjs/toolkit";


const initialState = { counterValue: 0 };

const counterSlice = createSlice({
  name:'counter',
  initialState,
  reducers:{
      increaseOne(state,action){
        state.counterValue=action.payload;
      },
      decreaseOne(state,action){
        state.counterValue=action.payload;
      },
  },
})
export const selectCounter =(state) => state.counter.counterValue;
export const { increaseOne,decreaseOne }=counterSlice.actions;
export default counterSlice.reducer;
