import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    paddingVertical: SIZES.medium,
    backgroundColor: COLORS.white,
  },
  cartDetails: {
    backgroundColor: COLORS.lightBlue,
    marginBottom: SIZES.medium,
    padding: SIZES.small,
    borderRadius: SIZES.xSmall,
    ...SHADOWS.small,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 3,
  },
  total: {
    fontWeight: "bold",
    fontSize: SIZES.medium,
  },
  button: {
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    padding: SIZES.small,
    borderRadius: SIZES.xSmall,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
  },
});

export default styles;
