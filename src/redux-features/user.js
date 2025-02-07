import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { firestore } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const initialState = {
    user: {
        pending: false,
        data: null,
        error: null,
    }
}

export const addTocart = createAsyncThunk(
    "addTocart",
    async () => {


    }
)

export const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        // builder.addCase(getData.pending, (state, action) => {
        //     state.user.pending = true;
        //     state.user.error = null;
        // })
        // builder.addCase(getData.fulfilled, (state, action) => {
        //     state.user.pending = false;
        //     state.user.data = action.payload;
        //     state.user.error = null;
        // })
        // builder.addCase(getData.rejected, (state, action) => {
        //     state.user.pending = false;
        //     state.user.error = action.payload;
        // })
    }
});



export const { } = userSlice.actions;
export default userSlice.reducer;