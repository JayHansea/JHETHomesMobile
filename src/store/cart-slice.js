import { createSlice } from "@reduxjs/toolkit";
import { formatPrice } from "../utils";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const { product_title, product_photo, product_price, product_id } =
        action.payload;
      // Check if the item already exists in the cart
      const existingItem = state.itemsList.find(
        (item) => item.product_id === product_id
      );

      if (existingItem) {
        // If the item already exists, update its quantity and total price
        existingItem.quantity++;
        existingItem.totalPrice = formatPrice(
          (
            parseFloat(existingItem.totalPrice) +
            parseFloat(formatPrice(product_price))
          ).toFixed(2)
        );
      } else {
        // If the item does not exist, add it to the cart
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
    removeFromCart(state, action) {
      const id = action.payload;

      const existingItem = state.itemsList.find(
        (item) => item.product_id === id
      );

      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter(
          (item) => item.product_id !== id
        );
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.product_price;
      }
      state.totalQuantity--;
    },
    deleteItem(state, action) {
      const id = action.payload;
      // Remove the item with the given id from the itemsList
      state.itemsList = state.itemsList.filter(
        (item) => item.product_id !== id
      );

      // Recalculate the totalQuantity based on the remaining items
      state.totalQuantity = state.itemsList.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
