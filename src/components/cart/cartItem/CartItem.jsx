import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles from "./CartItem.Style";
import ReusableText from "../../reusables/text/ReusableText";
import { COLORS, SIZES } from "../../../constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { TempProductData } from "../../../data/TempData";
import { formatPrice } from "../../../utils";

const CartItem = ({ image, name, price, quantity }) => {
  const dispatch = useDispatch();

  const incrementCartItem = () => {};

  const decrementCartItem = () => {};

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
            maxWidth={"80%"}
          />
          <ReusableText
            numberOfLines={1}
            text={price}
            style={styles.text}
            fontWeight={"bold"}
            fontSize={SIZES.medium}
          />
          <View style={styles.row}>
            <View style={styles.quantity}>
              <Pressable
                onPress={() => decrementCartItem(item.product_id)}
                style={styles.quantityButton}
              >
                <Text>-</Text>
              </Pressable>
              <Pressable style={styles.quantityButton}>
                <Text>{quantity}</Text>
              </Pressable>
              <Pressable
                onPress={() => incrementCartItem(item.product_id)}
                style={styles.quantityButton}
              >
                <Text>+</Text>
              </Pressable>
            </View>
            <View>
              <Pressable style={styles.deleteButton}>
                <MaterialIcons
                  name="delete-outline"
                  size={24}
                  color={COLORS.gray}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
