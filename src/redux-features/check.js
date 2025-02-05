import { createSlice } from "@reduxjs/toolkit";

export const checkSlice = createSlice({
    name: "check",
    initialState: {
        name: "Naimur Rahman",
    },
    reducers: {

        login: (state, action) => {
            console.log(action.payload);
            console.log("I am checking");
        }

    },
})


export const { login } = checkSlice.actions;
export default checkSlice.reducer;