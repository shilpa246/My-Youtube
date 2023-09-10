import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState:{
    isMenuOpen : true,
  },
  reducers:{
    toggleMenu(state){
      console.log("toggle menu");
      state.isMenuOpen=!state.isMenuOpen;
      },
      closeMenu:(state)=>{
        state.isMenuOpen=false;
      }
  }
})
export const{toggleMenu,closeMenu}=appSlice.actions;

export default appSlice.reducer;