import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { Ionicons, Entypo, COLORS, h } from "../../../constants";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.wrapper}
        >
          <Ionicons name="arrow-back" size={18} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Entypo
            name="dots-three-vertical"
            size={18}
            color={COLORS.secondary}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
