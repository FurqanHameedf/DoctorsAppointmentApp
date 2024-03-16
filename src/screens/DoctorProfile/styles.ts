import { StyleSheet } from "react-native";
import { COLORS, h } from "../../constants";

const styles = StyleSheet.create({
  container: {
    padding: h("2%"),
    flex: 1,
    marginVertical: h("4%"),
    backgroundColor: "#ffff",
    // marginBottom: h("15%"),
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: h("2%"),
    // marginBottom: h("4%"),
  },
  DocImage: {
    height: 110,
    width: 110,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: COLORS.white,
  },
  nameTxt: {
    fontSize: 22,
    fontWeight: "500",
    marginTop: h("4%"),
    marginBottom: h("1%"),
    color: COLORS.secondary,
  },
  specialityTxt: {
    color: "#6B779A",
    fontWeight: "500",
    fontSize: 17,
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingHorizontal: h("1%"),
  },
  detailBox: {
    alignItems: "center",
    // justifyContent: "center",
    width: 110,
    backgroundColor: COLORS.white,
    height: 140,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginBottom: h("2%"),
    elevation: 2.5,
  },
  iconContainer: {
    height: 65,
    justifyContent: "flex-end",
    width: 55,
    alignItems: "center",
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    padding: h(".8%"),
  },
  img: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
  title: {
    marginTop: h("2%"),
    color: COLORS.secondary,
    fontWeight: "500",
    fontSize: 15,
  },
  Descp: {
    marginVertical: h("0.8%"),
    color: "#6B779A",
    fontWeight: "500",
    fontSize: 12,
  },
  heading: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: h("2.5%"),
  },
  DescriptionTxt: {
    fontSize: 13,
    color: "#6B779A",
    marginTop: 8,
    lineHeight: 20,
    letterSpacing: 0.4,
  },
  lowerContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    marginVertical: h("1%"),
  },
  iconBox: {
    height: 70,
    width: 70,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
  },
  iconImg: {
    height: 25,
    width: 25,
    resizeMode: "contain",
  },
  btnContainer: {
    padding: h("2.2%"),
    backgroundColor: COLORS.primary1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: h("4%"),
  },
  btnTxt: {
    color: COLORS.white,
  },
});

export default styles;
