import React, { useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import styles from "./SalesCard.Style";
import ReusableText from "../../reusables/text/ReusableText";
import { COLORS, SIZES } from "../../../constants/theme";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const SalesCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <View style={styles.cardContainer}>
      <Pressable>
        <View style={styles.card}>
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
          <View style={styles.priceNAddView}>
            <View style={styles.priceView}>
              <Text style={styles.discountPrice}>{product.product_price}</Text>
              <Text style={styles.priceSeperator}> - </Text>
              <Text style={styles.originalPrice}>
                {product.product_original_price}
              </Text>
            </View>
            <Pressable>
              <AntDesign name="pluscircleo" size={24} color={COLORS.primary} />
            </Pressable>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default SalesCard;
