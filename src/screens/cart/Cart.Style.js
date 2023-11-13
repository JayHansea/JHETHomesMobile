import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.medium,
    height: SIZES.height,
  },
  emptyCartText: {
    height: SIZES.height * 0.6,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  summaryContainer: {
    width: "100%",
    height: SIZES.height * 0.45,
  },
});

export default styles;
