import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../../constants/theme";

const styles = StyleSheet.create({
  cardContainer: {
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.xSmall,
  },
  card: {
    width: SIZES.width / 1.8,
    padding: SIZES.medium,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  favoriteContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingBottom: SIZES.xSmall,
  },
  image: {
    width: SIZES.width / 2.12,
    height: 130,
  },
  title: {
    width: SIZES.width / 2.12,
    marginTop: SIZES.medium,
  },
  priceView: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: SIZES.small,
    flexWrap: "wrap",
  },
  discountPrice: {
    color: COLORS.green,
    fontSize: SIZES.large,
  },
  priceSeperator: {
    fontSize: SIZES.large,
  },
  originalPrice: {
    textDecorationLine: "line-through",
    fontSize: SIZES.medium,
    color: COLORS.red,
  },
});

export default styles;
