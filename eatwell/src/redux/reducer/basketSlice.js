import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getBasketThunk = createAsyncThunk("/basket/get", async () => {
    const card = await axios.get("http://localhost:5000/pro");
    return card.data
})

export const postBasketThunk = createAsyncThunk("/basket/post", async (data) => {
    await axios.post("http://localhost:5000/pro", data)
    return data
})

export const deleteBasketThunk = createAsyncThunk("/basket/delete", async (id) => {
    await axios.delete(`http://localhost:5000/pro/${id}`)
    return id
})

const basketSlice = createSlice({
    name: "card",
    initialState: {
        data: []
    },
    reducers: {},
    extraReducers: builder => {
        builder

            .addCase(getBasketThunk.pending, (state, action) => {
                state.loading = true
            })

            .addCase(getBasketThunk.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })

            .addCase(getBasketThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            .addCase(postBasketThunk.fulfilled, (state, action) => {
                state.loading = false
                state.data.push(action.payload)
            })

            .addCase(deleteBasketThunk.fulfilled, (state, action) => {
                state.loading = false
                state.data = state.data.filter(item => item.id != action.payload)
            })
    }
})

export default basketSlice.reducer