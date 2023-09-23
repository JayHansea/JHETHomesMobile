import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import ReusableText from "../../reusables/text/ReusableText";
import { COLORS, SIZES } from "../../../constants/theme";
import { MaterialIcons, Feather, Ionicons } from "@expo/vector-icons";
import styles from "./Welcome.Style";

const Welcome = ({ navigation }) => {
  return (
    <View>
      <View style={styles.greetingsContainer}>
        <ReusableText
          text={"Welcome User"}
          fontSize={SIZES.large}
          color={COLORS.primary}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
          <MaterialIcons
            name="notifications-active"
            size={24}
            color={COLORS.gray}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <Feather name="search" size={24} color={COLORS.gray} />
          <TextInput style={styles.searchInput} placeholder="Search products" />
        </View>

        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => navigation.navigate("Filter")}
        >
          <Ionicons name="filter-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
