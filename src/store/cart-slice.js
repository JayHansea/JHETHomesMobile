import { createSlice } from "@reduxjs/toolkit";
import { formatPrice } from "../utils";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    addToCart(state, action) {
      const { product_title, product_photo, product_price, product_id } =
        action.payload;
      const existingItemIndex = state.itemsList.findIndex(
        (item) => item.product_id === product_id
      );

      if (existingItemIndex !== -1) {
        state.itemsList[existingItemIndex].quantity++;
        state.itemsList[existingItemIndex].totalPrice = formatPrice(
          (
            parseFloat(state.itemsList[existingItemIndex].totalPrice) +
            parseFloat(formatPrice(product_price))
          ).toFixed(2)
        );
      } else {
        state.itemsList.push({
          product_id,
          product_title,
          product_photo,
          product_price: formatPrice(product_price),
          quantity: 1,
          totalPrice: formatPrice(product_price),
        });
      }

      state.totalQuantity++;
    },
    removeFromCart() {},
    setShowCart(state) {
      state.showCart = true;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
