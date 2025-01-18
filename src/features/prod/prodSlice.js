import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import prodService from "./prodService";

const initialState = {
    products: []
};

export const getAll = createAsyncThunk("products/getAll", async () => {
    try {
        return await prodService.getAll();
    } catch (error) {
        console.error(error);
    }
});

export const prodSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.prod = action.payload;
        });
    }
})

export const { reset } = prodSlice.actions
export default prodSlice.reducer