import { View, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import styles from "./SearchBar.Style";
import { COLORS } from "../../../constants/theme";

const SearchBar = () => {
  return (
    <View style={styles.searchWrapper}>
      <Feather name="search" size={24} color={COLORS.gray} />
      <TextInput style={styles.searchInput} placeholder="Search products" />
    </View>
  );
};

export default SearchBar;
