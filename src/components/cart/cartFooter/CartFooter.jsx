import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./CartFooter.Style";

const CartFooter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cartDetails}>
        <View style={styles.textContainer}>
          <Text>Sub Total (2 Items):</Text>
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
