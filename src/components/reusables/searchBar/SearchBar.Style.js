import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";

const styles = StyleSheet.create({
  searchWrapper: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: COLORS.lightGray,
    paddingLeft: SIZES.xLarge,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.xLarge,
    height: "100%",
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
});

export default styles;
