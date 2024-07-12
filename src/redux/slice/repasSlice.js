import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    Allrepas: [],
    isLoding :true,
    error:null
};

export const getAllrepas = createAsyncThunk('repas/getAll', async () => {
    const response = await axios.get('http://localhost:4000/repas');
    return response.data;
});


export const addrepas = createAsyncThunk('repas/addRepa', async (data) => {
    const response = await axios.post('http://localhost:4000/repas',data);
    return response;
});
export const updaterepas = createAsyncThunk('repas/updateRepa', async ({ id, data }) => {
    const response = await axios.put(`http://localhost:4000/repas/${id}`, data);
    return response.data; 
});

export const deleterepas = createAsyncThunk('repas/deleteRepa', async (id) => {
    await axios.delete(`http://localhost:4000/repas/${id}`);
    return id; 
});

const repasSlice = createSlice({
    name: "repas",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllrepas.pending, (state, action) => {
                state.isLoding = true;
                state.error=null
            })
            .addCase(getAllrepas.fulfilled, (state, action) => {
                state.Allrepas = action.payload;
                state.isLoding = false;
                state.error=null
            })
            .addCase(getAllrepas.rejected, (state, action) => {
                state.isLoding = false;
                state.error=action.error.message
            })
            .addCase(addrepas.pending, (state, action) => {
                state.isLoding = true;
                state.error=null
            })
            .addCase(addrepas.fulfilled, (state, action) => {
                state.Allrepas.push(action.payload); 
                state.isLoding = false;
                state.error = null; 
            })
            .addCase(addrepas.rejected, (state, action) => {
                state.isLoding = false;
                state.error=action.error.message
            })
            .addCase(updaterepas.pending, (state, action) => {
                state.isLoding = true;
                state.error=null
            })
            .addCase(updaterepas.fulfilled, (state, action) => {
                
                const index = state.Allrepas.findIndex(repa => repa.id === action.payload.id);
                if (index !== -1) {
                    state.Allrepas[index] = action.payload;
                }
                state.isLoding = false;
                state.error = null; 
            })
            .addCase(updaterepas.rejected, (state, action) => {
                state.isLoding = false;
                state.error=action.error.message
            })
            .addCase(deleterepas.pending, (state, action) => {
                state.isLoding = true;
                state.error = null;
            })
            .addCase(deleterepas.fulfilled, (state, action) => {
                state.Allrepas = state.Allrepas.filter(repa => repa.id !== action.payload); 
                state.isLoding = false;
                state.error = null;
            })
            .addCase(deleterepas.rejected, (state, action) => {
                state.isLoding = false;
                state.error = action.error.message;
            });
    }
});

export default repasSlice.reducer;