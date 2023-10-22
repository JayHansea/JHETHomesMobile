import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../../constants/theme";

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: SIZES.xSmall,
    marginTop: SIZES.medium,
  },
  card: {
    width: "48%", // Set to 48% to allow for a small gap between the cards
    marginBottom: SIZES.medium,
    padding: SIZES.medium,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    ...SHADOWS.medium,
  },
  favoriteContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingBottom: SIZES.xSmall,
  },
  image: {
    width: "100%", // Take up the entire width of the card
    height: 80,
  },
  title: {
    marginTop: SIZES.medium,
  },
  priceView: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: SIZES.small,
  },
  productPrice: {
    color: COLORS.green,
    fontSize: SIZES.large,
  },
});

export default styles;
