import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ReusableText = ({
  text,
  fontSize,
  fontWeight,
  color,
  numberOfLines,
  maxWidth,
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={styles.textStyle(fontSize, fontWeight, color, maxWidth)}
    >
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: (fontSize, fontWeight, color, maxWidth) => ({
    fontSize: fontSize,
    fontWeight: fontWeight,
    color: color,
    maxWidth: maxWidth,
  }),
});

export default ReusableText;
