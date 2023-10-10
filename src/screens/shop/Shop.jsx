import { SafeAreaView, View } from "react-native";
import React from "react";
import SearchBar from "../../components/reusables/searchBar/SearchBar";
import reusable from "../../components/reusables/styles/Reusable.Style";
import styles from "./Shop.Styles";

const Shop = () => {
  return (
    <SafeAreaView style={reusable.container}>
      <View style={styles.searchContainer}>
        <SearchBar />
      </View>
    </SafeAreaView>
  );
};

export default Shop;
