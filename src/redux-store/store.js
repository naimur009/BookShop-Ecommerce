import { configureStore } from "@reduxjs/toolkit"
import { combinedReducers } from "../CombinedStore/CombinedStore"


export const store = configureStore({
    reducer: combinedReducers,
})