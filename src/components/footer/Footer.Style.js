import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    height: SIZES.height * 0.25,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: 'center',
    marginTop: 20,
  },
  indicator: {
    height: 2.5,
    width: 5,
    backgroundColor: COLORS.gray,
    marginHorizontal: 3,
    borderRadius: 2,
  },
  activeIndicator: {
    width: 20,
    backgroundColor: COLORS.secondary,
  },
  btnContainerWrapper: {
    marginBottom: 20,
  },
  getStartedContainer: {
    height: 50,
  },
  btnContainer: {
    flexDirection: 'row'
  },
  btn: {
    // flex: 1,
    height: 50,
    width: '48%',  
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStartedBtn: {
    // flex: 1,
    width: SIZES.width - 38,
    height: 50,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 15
  }
})

export default styles;