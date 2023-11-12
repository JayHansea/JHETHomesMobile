import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./CartFooter.Style";

const CartFooter = ({ quantity }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cartDetails}>
        <View style={styles.textContainer}>
          <Text>{`Sub Total (${
            quantity <= 1 ? `${quantity} item` : `${quantity} items`
          })`}</Text>
          <Text>$100.00</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>Delivery:</Text>
          <Text>$20.00</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.total}>Total:</Text>
          <Text style={styles.total}>$120.00</Text>
        </View>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </View>
  );
};

export default CartFooter;
