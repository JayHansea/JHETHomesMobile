import React from "react";
import { View, Text } from "react-native";
import ReusableHeader from "../../reusables/header/ReusableHeader";
import SalesCard from "../../cards/sales/SalesCard";
import { TempProductData } from "../../../data/TempData";

const Sales = () => {
  // Filter products where is_prime is true
  const primeProducts = TempProductData.products.filter(
    (product) => product.is_prime
  );

  return (
    <View>
      <ReusableHeader header={"Promo Sales"} link={"See All"} />
      <SalesCard primeProducts={primeProducts} />
    </View>
  );
};

export default Sales;
