import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import styles from "./Home.Style";
import reusable from "../../components/reusables/styles/Reusable.Style";
import Welcome from "../../components/home/welcome/Welcome";
import Sales from "../../components/home/salesProduct/Sales";
import Products from "../../components/home/products/Products";
import ToastMessage from "../../components/toast/ToastMessage";

const Home = ({ navigation }) => {
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
