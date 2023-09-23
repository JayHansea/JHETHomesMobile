import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ReusableText from "../../reusables/text/ReusableText";
import { COLORS, SIZES } from "../../../constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./Welcome.Style";

const Welcome = () => {
  return (
    <View>
      <View style={styles.greetingsContainer}>
        <ReusableText
          text={"Welcome User"}
          fontSize={SIZES.large}
          color={COLORS.primary}
        />
        <TouchableOpacity>
          <MaterialIcons
            name="notifications-active"
            size={24}
            color={COLORS.gray}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
