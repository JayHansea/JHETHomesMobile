import { SafeAreaView, ScrollView, Text, View } from "react-native";
import React from "react";
import styles from "./Cart.Style";
import reusable from "../../components/reusables/styles/Reusable.Style";
import CartItem from "../../components/cart/cartItem/CartItem";
import CartFooter from "../../components/cart/cartFooter/CartFooter";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  const quantity = useSelector((state) => state.cart.totalQuantity);
  console.log(quantity);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={[reusable.container, styles.container]}>
          {cartItems.length === 0 ? (
            <View style={styles.emptyCartText}>
              <Text>Your cart is empty</Text>
              <Text>Visit Shop to add product(s) to your cart</Text>
            </View>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product_id}
                image={item.product_photo}
                name={item.product_title}
                price={`$${item.totalPrice}`}
                quantity={item.quantity}
              />
            ))
          )}
        </View>
      </ScrollView>
      <CartFooter quantity={quantity} />
    </SafeAreaView>
  );
};

export default Cart;
