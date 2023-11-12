import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: SIZES.height * 0.28,
    justifyContent: "space-between",
    padding: SIZES.medium,
    backgroundColor: COLORS.white,
  },
  cartDetails: {
    backgroundColor: COLORS.lightBlue,
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
