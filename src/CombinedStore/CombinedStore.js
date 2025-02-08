import authreducers from "../redux-features/auth"
import bookreducers from "../redux-features/book"
import userSlice from "../redux-features/user"

import { combineReducers } from "@reduxjs/toolkit"

export const combinedReducers = combineReducers({
    auth: authreducers,
    book: bookreducers,
    user: userSlice,
})