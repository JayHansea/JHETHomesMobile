import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightBlue,
    height: SIZES.height * 0.15,
    padding: SIZES.small,
    marginVertical: SIZES.medium,
    borderRadius: SIZES.xSmall,
    ...SHADOWS.small,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    width: "25%",
    height: "100%",
    backgroundColor: COLORS.white,
    padding: SIZES.xSmall,
    borderRadius: SIZES.xSmall,
    marginRight: SIZES.small, // Add some spacing between image and text
  },
  image: {
    width: "100%",
    height: "100%", // Ensure the image takes up the full height of the container
  },
  textContainer: { justifyContent: "space-between" },
  quantity: {
    flexDirection: "row",
  },
  quantityButton: {
    borderColor: COLORS.gray,
    borderWidth: 1,
    paddingHorizontal: 6,
    marginRight: 6,
  },
  deleteButton: {
    marginRight: SIZES.small,
  },
  emptyCartText: {
    height: SIZES.height * 0.6,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
