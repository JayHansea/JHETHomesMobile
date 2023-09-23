import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  imageStyle: {
    height: "75%",
    width: SIZES.width,
    resizeMode: "cover",
    borderBottomRightRadius: 200,
    borderBottomLeftRadius: 200,
  },
  title: {
    color: COLORS.secondary,
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 30,
    textAlign: "center",
  },
  description: {
    color: COLORS.secondary,
    fontSize: 13,
    marginTop: 10,
    maxWidth: SIZES.width * 0.9,
    textAlign: "center",
    lineHeight: 23,
  },
});

export default styles;
