import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wolfStatus: "Idle",
}

const wolfSlice = createSlice({
  name: "wolf",
  initialState,
  reducers: {
    setAction: (state, action) => {
      state.wolfStatus = action.payload;
    }
  }
});

export const { setAction } = wolfSlice.actions;
export default wolfSlice.reducer;