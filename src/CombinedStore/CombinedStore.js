import authreducers from "../redux-features/auth"
import checkreducers from "../redux-features/check"
import { combineReducers } from "@reduxjs/toolkit"

export const combinedReducers = combineReducers({
    auth: authreducers,
    check: checkreducers,
})