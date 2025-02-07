import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, googleProvider } from "../firebase/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";

const initialState = {
    auth: {
        pending: false,
        data: null,
        error: null,
    }
}

export const signInWithGoogle = createAsyncThunk(
    "signInWithGoogle",
    async () => {
        await signInWithPopup(auth, googleProvider);
        window.location.href = "/";
    }
)

export const signUp = createAsyncThunk(
    "signUp",
    async ({ email, password }) => {
        await createUserWithEmailAndPassword(auth, email, password);
        window.location.href = "/";
    }
)

export const signIn = createAsyncThunk(
    "signIn",
    async ({ email, password }) => {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "/";
    }
)

export const logOut = createAsyncThunk(
    "logOut",
    async () => {
        signOut(auth);
        window.location.href = "/signin";
    }
)


export const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(signUp.pending, (state, action) => {
            state.auth.pending = true;
            state.auth.error = null;
        });
        builder.addCase(signUp.fulfilled, (state, action) => {
            state.auth.pending = false;
            state.auth.data = action.payload;
        });
        builder.addCase(signUp.rejected, (state, action) => {
            state.auth.pending = false;
            state.auth.error = action.error;
        });


        builder.addCase(signInWithGoogle.pending, (state, action) => {
            state.auth.pending = true;
            state.auth.error = null;
        });
        builder.addCase(signInWithGoogle.fulfilled, (state, action) => {
            state.auth.pending = false;
            state.auth.data = action.payload;
        });
        builder.addCase(signInWithGoogle.rejected, (state, action) => {
            state.auth.pending = false;
            state.auth.error = action.error;
        });


        builder.addCase(signIn.pending, (state, action) => {
            state.auth.pending = true;
            state.auth.error = null;
        });
        builder.addCase(signIn.fulfilled, (state, action) => {
            state.auth.pending = false;
            state.auth.data = action.payload;
        });
        builder.addCase(signIn.rejected, (state, action) => {
            state.auth.pending = false;
            state.auth.error = action.error;
        });



        builder.addCase(logOut.pending, (state, action) => {
            state.auth.pending = true;
            state.auth.error = null;
        });
        builder.addCase(logOut.fulfilled, (state, action) => {
            state.auth.pending = false;
            state.auth.data = action.payload;
        });
        builder.addCase(logOut.rejected, (state, action) => {
            state.auth.pending = false;
            state.auth.error = action.error;
        });
    }
});



export const { } = authSlice.actions;
export default authSlice.reducer;