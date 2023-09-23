import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ReusableText = ({ text, fontSize, fontWeight, color }) => {
  return (
    <Text style={styles.textStyle(fontSize, fontWeight, color)}>{text}</Text>
  );
};

const styles = StyleSheet.create({
  textStyle: (fontSize, fontWeight, color) => ({
    fontSize: fontSize,
    fontWeight: fontWeight,
    color: color,
  }),
});

export default ReusableText;
