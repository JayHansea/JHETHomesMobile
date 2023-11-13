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
  },
  justify: {
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
  textContainer: {
    justifyContent: "space-between",
    width: SIZES.width * 0.62,
  },
  quantity: {
    flexDirection: "row",
  },
  quantityButton: {
    borderColor: COLORS.gray,
    borderWidth: 1,
    paddingHorizontal: 9,
    paddingVertical: 3,
    marginRight: 6,
    borderRadius: 50,
  },
  deleteButton: {
    marginRight: SIZES.small,
    padding: 2,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 50,
  },
});

export default styles;
