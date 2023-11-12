import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    height: SIZES.height,
  },
  emptyCartText: {
    height: SIZES.height * 0.6,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
