import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import styles from "./Home.Style";
import reusable from "../../components/reusables/styles/Reusable.Style";
import Welcome from "../../components/home/welcome/Welcome";
import Sales from "../../components/home/salesProduct/Sales";
import Products from "../../components/home/products/Products";

const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <SafeAreaView style={reusable.container}>
        <Welcome navigation={navigation} />
        <Sales />
        <Products />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
