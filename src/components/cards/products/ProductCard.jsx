import React from "react";
import { View } from "react-native";
import styles from "./ProductCard.Style";
import ProductCardItem from "../productCardItem/ProductCardItem";

const ProductCard = ({ products }) => {
  return (
    <View style={styles.cardContainer}>
      {products.map((product, index) => (
        <ProductCardItem key={index} product={product} />
      ))}
    </View>
  );
};

export default ProductCard;
