import { SafeAreaView, ScrollView, Text, View } from "react-native";
import React from "react";
import styles from "./Cart.Style";
import reusable from "../../components/reusables/styles/Reusable.Style";
import CartItem from "../../components/cart/cartItem/CartItem";
import CartFooter from "../../components/cart/cartFooter/CartFooter";

const Cart = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={[reusable.container, styles.container]}>
          <CartItem />
        </View>
      </ScrollView>
      <CartFooter />
    </SafeAreaView>
  );
};

export default Cart;
