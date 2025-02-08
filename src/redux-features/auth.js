import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, googleProvider, firestore } from "../firebase/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

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
        const info = await signInWithPopup(auth, googleProvider);
        const docRef = doc(firestore, "user", info.user.uid);
        const document = await getDoc(docRef)
        localStorage.setItem("userId", info.user.uid);
        if (!document.exists()) {
            const data = {
                basicInfo: {
                    email: info.user.email,
                },
                cart: [],
                order: []
            }
            await setDoc(docRef, data, { merge: true });
        }
        window.location.href = "/";

    }
)

export const signUp = createAsyncThunk(
    "signUp",
    async ({ email, password }) => {
        const info = await createUserWithEmailAndPassword(auth, email, password);
        localStorage.setItem("userId", info.user.uid);
        const docRef = doc(firestore, "user", info.user.uid);
        const data = {
            basicInfo: {
                email: info.user.email,
            },
            cart: [],
            order: []
        }
        await setDoc(docRef, data);
        window.location.href = "/";
    }
)

export const signIn = createAsyncThunk(
    "signIn",
    async ({ email, password }) => {
        const info = await signInWithEmailAndPassword(auth, email, password);
        localStorage.setItem("userId", info.user.uid);
        window.location.href = "/";
    }
)

export const logOut = createAsyncThunk(
    "logOut",
    async () => {
        signOut(auth);
        localStorage.setItem("userId", null);
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