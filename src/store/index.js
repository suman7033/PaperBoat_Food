import { configureStore } from '@reduxjs/toolkit'
import storeReducer from "./storeSlice";

const store=configureStore({
  reducer: {storeVal: storeReducer}
})

export default store;