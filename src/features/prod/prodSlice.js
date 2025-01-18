import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import prodService from "./prodService";

const initialState = {
    allProducts: [], // Todos los productos
    prod: [],        // Productos de la página actual
    currentPage: 1,
    itemsPerPage: 10, // Productos por página
};

export const fetchProducts = createAsyncThunk("products/fetchAll", async () => {
    return await prodService.getAll();
});

export const prodSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setPage(state, action) {
            const { page } = action.payload;
            state.currentPage = page;
            const startIndex = (page - 1) * state.itemsPerPage;
            const endIndex = startIndex + state.itemsPerPage;
            state.prod = state.allProducts.slice(startIndex, endIndex);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload;
            const startIndex = 0;
            const endIndex = state.itemsPerPage;
            state.prod = action.payload.slice(startIndex, endIndex);
        });
    },
});

export const { setPage } = prodSlice.actions;
export default prodSlice.reducer;
