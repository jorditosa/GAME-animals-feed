import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wolfStatus: "Idle_2",
  piecesEated: 0
}

const wolfSlice = createSlice({
  name: "wolf",
  initialState,
  reducers: {
    setAction: (state, action) => {
      state.wolfStatus = action.payload;
    },
    addPieceEated: (state, action) => {
      state.piecesEated++
    }
  }
});

export const { setAction, addPieceEated } = wolfSlice.actions;
export default wolfSlice.reducer;