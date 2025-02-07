import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { firestore } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const initialState = {
    book: {
        pending: false,
        data: null,
        error: null,
    }
}

export const getData = createAsyncThunk(
    "getData",
    async () => {
        const collectionRef = collection(firestore, "bookList");
        const rawData = await getDocs(collectionRef);
        const data = [];
        rawData.docs.forEach((book, index) => {
            data[index] = {
                id: book.id,
                tittle: book.data().tittle,
                author: book.data().author,
                category: book.data()?.category,
                price: book.data().price,
                image: book.data().image,
            }
        })
        return data;

    }

)

export const bookSlice = createSlice({
    name: "book",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getData.pending, (state, action) => {
            state.book.pending = true;
            state.book.error = null;
        })
        builder.addCase(getData.fulfilled, (state, action) => {
            state.book.pending = false;
            state.book.data = action.payload;
            state.book.error = null;
        })
        builder.addCase(getData.rejected, (state, action) => {
            state.book.pending = false;
            state.book.error = action.payload;
        })
    }
});



export const { } = bookSlice.actions;
export default bookSlice.reducer;