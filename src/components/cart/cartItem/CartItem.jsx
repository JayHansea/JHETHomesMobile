import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles from "./CartItem.Style";
import ReusableText from "../../reusables/text/ReusableText";
import { COLORS, SIZES } from "../../../constants/theme";
import { MaterialIcons } from "@expo/vector-icons";

const CartItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../../assets/product_images/product_index_9.jpg")}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <ReusableText
            numberOfLines={1}
            style={styles.text}
            text={
              "Apple iPhone 12 Pro, 256GB, Pacific Blue - Fully Unlocked (Renewed)"
            }
            maxWidth={"80%"}
          />
          <ReusableText
            numberOfLines={1}
            text={"$539.99"}
            style={styles.text}
            fontWeight={"bold"}
            fontSize={SIZES.medium}
          />
          <View style={styles.row}>
            <View style={styles.quantity}>
              <Pressable style={styles.quantityButton}>
                <Text>-</Text>
              </Pressable>
              <Pressable style={styles.quantityButton}>
                <Text>1</Text>
              </Pressable>
              <Pressable style={styles.quantityButton}>
                <Text>+</Text>
              </Pressable>
            </View>
            <View>
              <Pressable style={styles.deleteButton}>
                <MaterialIcons
                  name="delete-outline"
                  size={24}
                  color={COLORS.gray}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
