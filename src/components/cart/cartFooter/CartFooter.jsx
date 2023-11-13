import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./CartFooter.Style";

const CartFooter = ({ quantity, total }) => {
  const deliveryFee = (total) => {
    return (2.5 / 100) * total;
  };

  const finalFee = deliveryFee(total) + total;

  return (
    <View style={styles.container}>
      <View style={styles.cartDetails}>
        <View style={styles.textContainer}>
          <Text>{`Sub Total (${
            quantity <= 1 ? `${quantity} item` : `${quantity} items`
          })`}</Text>
          <Text>{`$${total}`}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>Delivery (2.5% of Sub Total):</Text>
          <Text>{`$${deliveryFee(total).toFixed(2)}`}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.total}>Total:</Text>
          <Text style={styles.total}>{`$${finalFee.toFixed(2)}`}</Text>
        </View>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </View>
  );
};

export default CartFooter;
