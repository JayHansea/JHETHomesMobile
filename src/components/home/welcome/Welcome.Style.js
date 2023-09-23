import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../../constants/theme";

const styles = StyleSheet.create({
  greetingsContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    paddingVertical: SIZES.medium,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.small,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: COLORS.lightGray,
    marginRight: SIZES.small,
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
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
