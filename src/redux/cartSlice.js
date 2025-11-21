import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {}, // { plantId: { id, name, price, quantity, thumbnail } }
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const plant = action.payload;
      if (state.items[plant.id]) {
        // Already in cart
        state.items[plant.id].quantity++;
      } else {
        state.items[plant.id] = { ...plant, quantity: 1 };
      }
      state.totalQuantity++;
    },
    incrementItem(state, action) {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity++;
        state.totalQuantity++;
      }
    },
    decrementItem(state, action) {
      const id = action.payload;
      if (state.items[id] && state.items[id].quantity > 1) {
        state.items[id].quantity--;
        state.totalQuantity--;
      } else if (state.items[id]) {
        state.totalQuantity -= state.items[id].quantity;
        delete state.items[id];
      }
    },
    deleteItem(state, action) {
      const id = action.payload;
      if (state.items[id]) {
        state.totalQuantity -= state.items[id].quantity;
        delete state.items[id];
      }
    },
  },
});

export const { addToCart, incrementItem, decrementItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
