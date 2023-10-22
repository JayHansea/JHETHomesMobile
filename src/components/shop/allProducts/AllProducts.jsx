import { View, Text } from "react-native";
import React from "react";
import AllProductCards from "../../cards/allProductCards/AllProductCards";
import { TempProductData } from "../../../data/TempData";

const AllProducts = () => {
  const products = TempProductData.products;

  return (
    <View>
      <AllProductCards products={products} />
    </View>
  );
};

export default AllProducts;
