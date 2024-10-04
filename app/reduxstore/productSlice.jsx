import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: { price: '', category: '', description: '' },
  productCount: 0,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.product = action.payload;
      state.productCount += 1;
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;