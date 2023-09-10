import { createSlice } from "@reduxjs/toolkit";


const searcgSlice= createSlice({
  name: "search",
  initialState:{
    
  },
  reducers:{
    cacheResults:(state,action)=>{
      state=Object.assign(state,action.payload)
    }
  }
})
export const {cacheResults}= searcgSlice.actions;
export default searcgSlice.reducer;
