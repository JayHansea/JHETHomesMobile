import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import styles from "./Home.Style";
import reusable from "../../components/reusables/styles/Reusable.Style";
import Welcome from "../../components/home/welcome/Welcome";
import Sales from "../../components/home/salesProduct/Sales";
import Products from "../../components/home/products/Products";
import { useSelector } from "react-redux";

const Home = ({ navigation }) => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  console.log(cartItems);
  return (
    <ScrollView>
      <SafeAreaView style={[reusable.container, styles.container]}>
        <Welcome navigation={navigation} />
        <Sales />
        <Products />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
