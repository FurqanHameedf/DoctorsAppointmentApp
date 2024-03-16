import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "./components/Header";
import { COLORS, IMAGES, Ionicons, h } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const navigation = useNavigation();

  const doctorsList = [
    {
      name: "Dr. Bellamy N",
      speciality: "Viralogist",
      rating: "4.5 (135 reviews)",
      image: IMAGES.Doc1,
    },
    {
      name: "Dr. Bellamy N",
      speciality: "Viralogist",
      rating: "4.5 (135 reviews)",
      image: IMAGES.Doc2,
    },
    {
      name: "Dr. Bellamy N",
      speciality: "Viralogist",
      rating: "4.5 (135 reviews)",
      image: IMAGES.Doc3,
    },
    {
      name: "Dr. Bellamy N",
      speciality: "Viralogist",
      rating: "4.5 (135 reviews)",
      image: IMAGES.Doc4,
    },
    {
      name: "Dr. Bellamy N",
      speciality: "Viralogist",
      rating: "4.5 (135 reviews)",
      image: IMAGES.Doc5,
    },
    {
      name: "Dr. Bellamy N",
      speciality: "Viralogist",
      rating: "4.5 (135 reviews)",
      image: IMAGES.Doc6,
    },
    {
      name: "Dr. Bellamy N",
      speciality: "Viralogist",
      rating: "4.5 (135 reviews)",
      image: IMAGES.Doc1,
    },
    {
      name: "Dr. Bellamy N",
      speciality: "Viralogist",
      rating: "4.5 (135 reviews)",
      image: IMAGES.Doc2,
    },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        style={{ marginTop: h("2%") }}
        numColumns={2}
        data={doctorsList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("DoctorProfile")}
            activeOpacity={0.7}
            style={styles.listContainer}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.nameTxt}>{item.name}</Text>
            <Text style={styles.specialtyTxt}>{item.speciality}</Text>

            <View style={styles.ratingContainer}>
              <Ionicons name="star" color="#FDDC3C" size={15} />
              <Text style={styles.ratingTxt}>{item.rating}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: h("2%"),
    flex: 1,
    marginVertical: h("4%"),
    backgroundColor: "#F2F2F2",
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: "contain",
    borderRadius: 50,
  },
  listContainer: {
    height: 200,
    width: "47%",
    backgroundColor: COLORS.white,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 150 },
    shadowOpacity: 5,
    shadowRadius: 1,
    marginBottom: h("2%"),
    padding: h("2%"),
    marginRight: h("2%"),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  nameTxt: {
    marginVertical: h("0.5%"),
    marginTop: h("1%"),
    color: COLORS.secondary,
    fontWeight: "500",
    fontSize: 17,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  ratingTxt: {
    marginVertical: h("0.5%"),
    color: COLORS.secondary,
    fontWeight: "500",
    fontSize: 12,
  },
  specialtyTxt: {
    marginVertical: h("0.2%"),
    color: "#6B779A",
    fontWeight: "500",
    fontSize: 17,
  },
});
export default Search;
