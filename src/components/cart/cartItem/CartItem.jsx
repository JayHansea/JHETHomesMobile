import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles from "./CartItem.Style";
import ReusableText from "../../reusables/text/ReusableText";
import { COLORS, SIZES } from "../../../constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { formatPrice } from "../../../utils";
import { toastActions } from "../../../store/toast-slice";

const CartItem = ({ image, name, price, quantity, id }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const incrementCartItem = async () => {
    try {
      const response = await fetch(
        "https://jhetmart-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (response.ok) {
        // Success: Item added to cart
        dispatch(
          cartActions.addToCart({
            product_title: name,
            product_photo: image,
            product_price: price,
            product_id: id,
          })
        );

        // Dispatch the toast message
        dispatch(
          toastActions.showToast({ message: "Item added to cart successfully" })
        );
      } else {
        // Failure: Unable to add item to cart
        const errorMessage = await response.text(); // Get the error message from the response
        dispatch(
          toastActions.showToast({
            message: `Adding item to cart failed: ${errorMessage}`,
          })
        );
      }
    } catch (error) {
      // Network or other error
      dispatch(
        toastActions.showToast({
          message: `Adding item to cart failed: ${error.message}`,
        })
      );
    }
  };

  const decrementCartItem = async () => {
    try {
      const response = await fetch(
        `https://jhetmart-default-rtdb.firebaseio.com/cartItems/${id}.json`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Success: Item deleted from the database
        dispatch(cartActions.removeFromCart(id)); // Dispatch the deleteItem action from the cart slice

        // Dispatch the toast message
        dispatch(
          toastActions.showToast({
            message: "Item successfully removed from cart",
          })
        );
      } else {
        // Failure: Unable to delete item
        const errorMessage = await response.text();
        dispatch(
          toastActions.showToast({
            message: `Deleting item failed: ${errorMessage}`,
          })
        );
      }
    } catch (error) {
      // Network or other error
      dispatch(
        toastActions.showToast({
          message: `Deleting item failed: ${error.message}`,
        })
      );
    }
  };

  const deleteCartItem = async () => {
    try {
      const response = await fetch(
        `https://jhetmart-default-rtdb.firebaseio.com/cartItems/${id}.json`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Success: Item deleted from the database
        dispatch(cartActions.deleteItem(id)); // Dispatch the deleteItem action from the cart slice

        // Dispatch the toast message
        dispatch(
          toastActions.showToast({
            message: "Item successfully removed from cart",
          })
        );
      } else {
        // Failure: Unable to delete item
        const errorMessage = await response.text();
        dispatch(
          toastActions.showToast({
            message: `Deleting item failed: ${errorMessage}`,
          })
        );
      }
    } catch (error) {
      // Network or other error
      dispatch(
        toastActions.showToast({
          message: `Deleting item failed: ${error.message}`,
        })
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <Image source={image} resizeMode="contain" style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <ReusableText
            numberOfLines={1}
            style={styles.text}
            text={name}
            maxWidth={"70%"}
          />
          <ReusableText
            numberOfLines={1}
            text={`$${formatPrice(price)}`}
            style={styles.text}
            fontWeight={"bold"}
            fontSize={SIZES.medium}
          />
          <View style={[styles.row, styles.justify]}>
            <View style={styles.quantity}>
              <Pressable
                onPress={decrementCartItem}
                style={styles.quantityButton}
              >
                <Text>-</Text>
              </Pressable>
              <Pressable style={styles.quantityButton}>
                <Text>{quantity}</Text>
              </Pressable>
              <Pressable
                onPress={incrementCartItem}
                style={styles.quantityButton}
              >
                <Text>+</Text>
              </Pressable>
            </View>
            <Pressable onPress={deleteCartItem} style={styles.deleteButton}>
              <MaterialIcons
                name="delete-outline"
                size={24}
                color={COLORS.secondary}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
