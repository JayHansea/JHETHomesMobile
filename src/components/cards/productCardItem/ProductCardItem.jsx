import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import styles from "./ProductCardItem.Style";
import ReusableText from "../../reusables/text/ReusableText";
import { SIZES, COLORS } from "../../../constants/theme";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const ProductCardItem = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Pressable style={styles.card}>
      <View style={styles.favoriteContainer}>
        <Pressable onPress={toggleFavorite}>
          <MaterialIcons
            name={isFavorite ? "favorite" : "favorite-outline"}
            size={24}
            color={COLORS.red}
          />
        </Pressable>
      </View>
      <Image
        source={product.product_photo}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.title}>
        <ReusableText
          numberOfLines={2}
          style={styles.title}
          text={product.product_title}
          fontSize={SIZES.medium}
        />
      </View>
      <View style={styles.priceView}>
        <Text style={styles.productPrice}>{product.product_price}</Text>
        <Pressable>
          <AntDesign name="pluscircleo" size={24} color={COLORS.primary} />
        </Pressable>
      </View>
    </Pressable>
  );
};

export default ProductCardItem;