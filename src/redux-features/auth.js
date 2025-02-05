import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        name: "Naimur Rahman",
    },
    reducers: {

        login: (state, action) => {
            console.log(action.payload);
            console.log("I am working");
        }

    },
})


export const { login } = authSlice.actions;
export default authSlice.reducer;