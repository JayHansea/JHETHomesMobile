import { View, Text, Pressable, ImageBackground } from "react-native";
import React from "react";
import styles from "./SalesCard.Style";
import ReusableText from "../../reusables/text/ReusableText";
import { COLORS, SIZES } from "../../../constants/theme";

const SalesCard = ({ primeProducts }) => {
  return (
    <View style={styles.cardContainer}>
      {primeProducts.map((product, index) => (
        <Pressable key={index} style={styles.card}>
          <ImageBackground
            source={product.product_photo}
            resizeMode="contain"
            style={styles.image}
          ></ImageBackground>
          <View style={styles.title}>
            <ReusableText
              numberOfLines={3}
              style={styles.title}
              text={product.product_title}
              fontSize={SIZES.medium}
            />
          </View>
          <View style={styles.priceView}>
            <Text style={styles.discountPrice}>{product.product_price}</Text>
            <Text style={styles.priceSeperator}> - </Text>
            <Text style={styles.originalPrice}>
              {product.product_original_price}
            </Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default SalesCard;
