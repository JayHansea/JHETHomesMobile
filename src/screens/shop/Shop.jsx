import { SafeAreaView, ScrollView, View } from "react-native";
import React from "react";
import SearchBar from "../../components/reusables/searchBar/SearchBar";
import reusable from "../../components/reusables/styles/Reusable.Style";
import styles from "./Shop.Styles";
import AllProducts from "../../components/shop/allProducts/AllProducts";

const Shop = () => {
  return (
    <SafeAreaView style={reusable.container}>
      <View style={styles.searchContainer}>
        <SearchBar />
      </View>
      <ScrollView>
        <AllProducts />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shop;
