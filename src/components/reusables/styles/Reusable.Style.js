import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";

const reusable = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.medium,
    backgroundColor: COLORS.white,
  },
});

export default reusable;
