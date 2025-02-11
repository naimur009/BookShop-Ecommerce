import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { firestore } from "../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const initialState = {
    user: {
        pending: false,
        data: [],
        error: null,
    }
}



export const addTocart = createAsyncThunk(
    "addTocart",
    async (data) => {
        const id = localStorage.getItem("userId")
        const docRef = doc(firestore, "user", id);
        const userData = await getDoc(docRef);
        let cart = userData.data().cart;
        cart.push(data);
        await updateDoc(docRef, { cart })
    }
)

export const fetchCartData = createAsyncThunk(
    "fetchCartData",
    async () => {
        const id = localStorage.getItem("userId")
        const docRef = doc(firestore, "user", id);
        const userData = await getDoc(docRef);
        const data = userData.data().cart;
        return data;
    }
)

export const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCartData.pending, (state, action) => {
            state.user.pending = true;
            state.user.error = null;
        })
        builder.addCase(fetchCartData.fulfilled, (state, action) => {
            state.user.pending = false;
            state.user.data = action.payload;
            state.user.error = null;
        })
        builder.addCase(fetchCartData.rejected, (state, action) => {
            state.user.pending = false;
            state.user.error = action.payload;
        })
    }
});



export const { } = userSlice.actions;
export default userSlice.reducer;