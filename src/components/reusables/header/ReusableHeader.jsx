import { View, Text } from "react-native";
import React from "react";
import ReusableText from "../text/ReusableText";
import { COLORS, SIZES } from "../../../constants/theme";
import styles from "./ReusableHeader.Style";

const ReusableHeader = ({ header, link }) => {
  return (
    <View>
      <View style={styles.salesTextContainer}>
        <ReusableText
          text={header}
          fontSize={SIZES.xLarge}
          color={COLORS.secondary}
        />
        <ReusableText
          text={link}
          fontSize={SIZES.small}
          color={COLORS.primary}
        />
      </View>
    </View>
  );
};

export default ReusableHeader;
