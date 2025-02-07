import authreducers from "../redux-features/auth"
import bookreducers from "../redux-features/book"
import { combineReducers } from "@reduxjs/toolkit"

export const combinedReducers = combineReducers({
    auth: authreducers,
    book: bookreducers,
})