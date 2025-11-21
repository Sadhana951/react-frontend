import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  plants: [
    { id: '1', name: 'Aloe Vera', price: 299, category: 'Succulents', thumbnail: 'alovera.webg' },
    { id: '2', name: 'Boston Fern', price: 399, category: 'Ferns', thumbnail: 'virat.jpg' },
    // Add 6 unique plants total
  ],
};

const plantSlice = createSlice({
  name: 'plants',
  initialState,
  reducers: {},
});

export default plantSlice.reducer;
