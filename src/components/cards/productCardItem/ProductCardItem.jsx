import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import styles from "./ProductCardItem.Style";
import ReusableText from "../../reusables/text/ReusableText";
import { SIZES, COLORS } from "../../../constants/theme";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { formatPrice } from "../../../utils";
import { toastActions } from "../../../store/toast-slice";

const ProductCardItem = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const addToCart = async () => {
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
            product_title: product.product_title,
            product_photo: product.product_photo,
            product_price: formatPrice(product.product_price),
            product_id: product.asin,
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

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Pressable style={styles.card}>
      <View style={styles.favoriteContainer}>
        <Pressable onPress={toggleFavorite}>
          <MaterialIcons
            name={isFavorite ? "favorite" : "favorite-outline"}
            size={24}
            color={COLORS.red}
          />
        </Pressable>
      </View>
      <Image
        source={product.product_photo}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.title}>
        <ReusableText
          numberOfLines={2}
          style={styles.title}
          text={product.product_title}
          fontSize={SIZES.medium}
        />
      </View>
      <View style={styles.priceView}>
        <Text style={styles.productPrice}>{product.product_price}</Text>
        <Pressable onPress={addToCart}>
          <AntDesign name="pluscircleo" size={24} color={COLORS.primary} />
        </Pressable>
      </View>
    </Pressable>
  );
};

export default ProductCardItem;
