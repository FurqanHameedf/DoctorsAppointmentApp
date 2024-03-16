import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { IMAGES, Ionicons, Entypo, COLORS, h } from "../../../constants";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTxt}>Welcome, Toluwani</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.wrapper}>
          <Image source={IMAGES.calendar} style={styles.headImg} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo
            name="dots-three-vertical"
            size={18}
            color={COLORS.secondary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  headImg: {
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
  headerTxt: {
    fontSize: 18,
    color: COLORS.secondary,
    fontWeight: "500",
  },
  wrapper: {
    padding: h("1%"),
    borderColor: "#C9E0F8",
    borderWidth: 0.8,
    borderRadius: 10,
  },
});

export default Header;
