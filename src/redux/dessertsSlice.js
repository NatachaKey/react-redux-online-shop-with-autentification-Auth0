import { createSlice } from '@reduxjs/toolkit';

export const dessertsSlice = createSlice({
    name: 'desserts',
    initialState: {
        selectedCategory: 'ALL'
    },
    reducers: {
    filterCategory: (state, action)=>{
        state.selectedCategory = action.payload;
    }
    },
})

export const getSelectedCategory =state =>state.desserts.selectedCategory;
export const { filterCategory }= dessertsSlice.actions;
export default dessertsSlice.reducer;