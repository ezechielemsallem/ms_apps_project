import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getData } from '../apis/imagesDisplayerAPI'


const initialState = {
    images: [],  //images array
    totalPages: 0 // pages numbers with the pagination
};


export const getDataAsync = createAsyncThunk(
  'imagesDisplayer/getData',
  async ({currentPage, category, sortedBy, order}) => {
    const response = await getData(currentPage, category, sortedBy, order);
    return response.data;
  }
);


export const imagesDisplayerSlice = createSlice({
  name: 'imagesDisplayer',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataAsync.fulfilled, (state, action) => {
        state.images = action.payload.images
        state.totalPages = action.payload.totalPages
      })
  },
});




export const selectImages = (state) => state.imagesDisplayer.images
export const selectTotalPage = (state) => state.imagesDisplayer.totalPages
export default imagesDisplayerSlice.reducer;