import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import ReusableText from "../../reusables/text/ReusableText";
import SearchBar from "../../reusables/searchBar/SearchBar";
import { COLORS, SIZES } from "../../../constants/theme";
import { MaterialIcons, Feather, Ionicons } from "@expo/vector-icons";
import styles from "./Welcome.Style";

const productCategories = ["All Category", "New", "Refurbished", "Used"];

const Welcome = ({ navigation }) => {
  const [activeProductCategory, setActiveProductCategory] = useState(
    productCategories[0]
  );

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
        <SearchBar />

        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => navigation.navigate("Filter")}
        >
          <Ionicons name="filter-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={productCategories}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeProductCategory, item)}
              onPress={() => {
                setActiveProductCategory(item);
              }}
            >
              <Text style={styles.tabText(activeProductCategory, item)}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
