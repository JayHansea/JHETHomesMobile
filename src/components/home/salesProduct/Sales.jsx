import React from "react";
import { View, Text, FlatList } from "react-native";
import ReusableHeader from "../../reusables/header/ReusableHeader";
import SalesCard from "../../cards/sales/SalesCard";
import { TempProductData } from "../../../data/TempData";
import { SIZES } from "../../../constants/theme";

const Sales = () => {
  // Filter products where is_prime is true
  const primeProducts = TempProductData.products.filter(
    (product) => product.is_prime
  );

  return (
    <View>
      <ReusableHeader header={"Promo Sales"} link={"See All"} />
      <FlatList
        data={primeProducts}
        renderItem={({ item }) => <SalesCard product={item} />}
        keyExtractor={(item) => item.asin}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        horizontal
      />
      {/* <SalesCard primeProducts={primeProducts} /> */}
    </View>
  );
};

export default Sales;
