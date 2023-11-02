import { View } from "react-native";
import React from "react";
import styles from "./AllProductCards.Style";
import ProductCardItem from "../productCardItem/ProductCardItem";

const AllProductCards = ({ products }) => {
  return (
    <View style={styles.cardContainer}>
      {products.map((product, index) => (
        <ProductCardItem key={index} product={product} />
      ))}
    </View>
  );
};

export default AllProductCards;
