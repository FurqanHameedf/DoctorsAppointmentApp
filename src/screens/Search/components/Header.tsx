import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { IMAGES, Ionicons, Entypo, COLORS, h } from "../../../constants";
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
        <Text style={styles.headerTxt}>Doctors</Text>

        <TouchableOpacity>
          <Image source={IMAGES.Filter} style={styles.headImg} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="search" size={20} color="#6B779A" />

        <TextInput style={styles.search} placeholder="Search... " />
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
  inputContainer: {
    padding: h("1.6%"),
    marginTop: h("2.5%"),
    backgroundColor: "#F7F8FA",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
  },
  search: {
    marginLeft: 5,
    flex: 1,
  },
});

export default Header;
