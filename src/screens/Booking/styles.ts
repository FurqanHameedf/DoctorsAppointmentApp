import { StyleSheet } from "react-native";
import { COLORS, FONTS, FONT_SIZES, h, shadow, w } from "../../constants";

const styles = StyleSheet.create({
  container: {
    padding: h("2%"),
    flex: 1,
    marginVertical: h("4%"),
    backgroundColor: "#ffff",
    // height: "100%",
    marginBottom: h("2%"),
  },
  item: {
    backgroundColor: COLORS.white,
    alignItems: "center",
    padding: h("1.6%"),
    borderRadius: 10,
    // ...shadow,
    height: 50,
    justifyContent: "center",
    borderColor: "#F1F2F5",
    borderWidth: 1,
    marginTop: h("1%"),
  },
  itemSlot: {
    backgroundColor: COLORS.white,
    alignItems: "center",
    padding: h("1.6%"),
    borderRadius: 10,
    ...shadow,
    width: w("35%"),
    marginVertical: h(".5%"),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  txtContent: {
    // fontFamily: FONTS.medium,
    fontSize: FONT_SIZES.regular,
  },
  txtSlot: {
    // fontFamily: FONTS.medium,
    fontSize: FONT_SIZES.regular,
    color: COLORS.black,
  },
  heading: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: h("2.5%"),
  },
  inputContainer: {
    padding: h("1.6%"),
    marginTop: h("1.2%"),
    backgroundColor: COLORS.primary2,
    flexDirection: "row",
    // alignItems: "center",
    borderRadius: 10,
  },
  search: {
    marginLeft: 5,
    flex: 1,
  },
  inputHeading: {
    // fontFamily: FONTS.medium,
    fontSize: FONT_SIZES.regular,
    color: "#6B779A",
    marginTop: h("2%"),
  },
  dropdownType: {
    height: h("6.5%"),
    borderRadius: 10,
    paddingLeft: w("4%"),
    paddingHorizontal: w("2%"),
    // borderWidth: 0.8,
    marginTop: h("1%"),
    backgroundColor: COLORS.primary2,
  },
  placeholderStyle: {
    color: COLORS.secondary50,
    fontWeight: "400",
    // fontFamily: FONTS.regular,
    fontSize: FONT_SIZES.small,
  },
  itemTextStyle: {
    color: COLORS.primary1,
    fontWeight: "400",
    // fontFamily: FONTS.medium,
    fontSize: FONT_SIZES.small,
  },
  selectedTextStyle: {
    color: COLORS.secondary,
    fontWeight: "400",
    // fontFamily: FONTS.medium,
    fontSize: 16,
  },
  btnContainer: {
    padding: h("2.2%"),
    backgroundColor: COLORS.primary1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    // marginBottom: h("4%"),
  },
  btnTxt: {
    color: COLORS.white,
  },
});

export default styles;
