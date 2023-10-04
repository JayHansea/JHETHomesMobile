import { View, Text } from "react-native";
import React from "react";
import ReusableHeader from "../../reusables/header/ReusableHeader";
import ProductCard from "../../cards/products/ProductCard";
import { TempProductData } from "../../../data/TempData";

const Products = () => {
  const products = TempProductData.products.filter(
    (product) => product.is_prime == false
  );
  return (
    <View>
      <ReusableHeader header={"Products"} link={"See All"} />
      <ProductCard products={products} />
    </View>
  );
};

export default Products;
