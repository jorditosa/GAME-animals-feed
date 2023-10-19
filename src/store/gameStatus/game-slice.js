import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameStat: "idle",
  loading: false,
  error: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame(state, action) {
      state.gameStat = action.payload;
    }
  },
});

export const { startGame } = gameSlice.actions;
export default gameSlice.reducer;