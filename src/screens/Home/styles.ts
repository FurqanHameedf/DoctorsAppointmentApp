import { StyleSheet } from "react-native";
import { COLORS, h } from "../../constants";

const styles = StyleSheet.create({
  container: {
    padding: h("2%"),
    flex: 1,
    marginVertical: h("4%"),
  },
  banner: {
    height: 340,
    backgroundColor: COLORS.primary1,
    marginTop: h("4%"),
    borderRadius: 25,
    padding: h("2%"),
    elevation: 10,
  },
  bannerTitle: {
    fontSize: 40,
    color: COLORS.white,
    fontWeight: "500",
  },
  bannerTxt: {
    fontSize: 16,
    color: COLORS.white,
    // fontWeight: "500",
  },
  bannerImg: {
    height: 210,
    width: 220,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 12,
  },
  btnContainer: {
    backgroundColor: COLORS.primary2,
    marginVertical: h("3%"),
    padding: h("2%"),
    height: h("10%"),
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btnTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: COLORS.secondary,
  },
  btnTxt: {
    fontSize: 15,
    color: "#6B779A",
    marginTop: 8,
  },
  iconContainer: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "500",
    // marginTop: h("2%"),
    marginBottom: h("2%"),
  },
  flContainer: {
    padding: h("2%"),
    backgroundColor: COLORS.primary2,
    // backgroundColor: "#000",
    marginRight: h("0.8%"),
    borderRadius: 10,
    width: 135,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryImg: {
    height: 40,
    width: 40,
    resizeMode: "contain",
  },
  headerTxt: {
    fontSize: 18,
    color: COLORS.secondary,
    fontWeight: "500",
  },
  categoryTitle: {
    fontSize: 16,
    color: COLORS.secondary,
    fontWeight: "500",
    marginTop: 10,
  },
  categoryTxt: {
    fontSize: 12,
    color: "#6B779A",
    marginTop: 8,
  },
});

export default styles;
