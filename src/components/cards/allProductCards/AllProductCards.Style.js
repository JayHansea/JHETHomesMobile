import { StyleSheet } from "react-native";
import { SIZES } from "../../../constants/theme";

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: SIZES.xSmall,
    marginTop: SIZES.medium,
  },
});

export default styles;
