import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./gameStatus/game-slice";

const store = configureStore({
  reducer: {
    gameStatus: gameReducer,
  },
});

export default store;