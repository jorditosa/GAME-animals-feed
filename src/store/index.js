import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./gameStatus/game-slice";
import wolfReducer from "./wolf/wolf-slice";

const store = configureStore({
  reducer: {
    gameStatus: gameReducer,
    wolf: wolfReducer,
  },
});

export default store;