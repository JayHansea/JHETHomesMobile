import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import styles from "./Home.Style";
import reusable from "../../components/reusables/styles/Reusable.Style";
import Welcome from "../../components/home/welcome/Welcome";
import Sales from "../../components/home/salesProduct/Sales";
import Products from "../../components/home/products/Products";
import { useSelector, useDispatch } from "react-redux";
import ToastMessage from "../../components/toast/ToastMessage";
import { toastActions } from "../../store/toast-slice";

const Home = ({ navigation }) => {
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

  useEffect(() => {
    addToCart(); // Trigger the async function when the cart changes
  }, [cart, dispatch]);

  return (
    <View>
      <ScrollView>
        <SafeAreaView style={[reusable.container, styles.container]}>
          <Welcome navigation={navigation} />
          <Sales />
          <Products />
        </SafeAreaView>
      </ScrollView>
      <ToastMessage />
    </View>
  );
};

export default Home;
