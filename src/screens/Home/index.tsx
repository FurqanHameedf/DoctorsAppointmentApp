import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import Header from "./components/Header";
import { IMAGES, Ionicons } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const data = [
    {
      title: "Neurology",
      desc: "2,029 Doctors",
      image: IMAGES.brain,
    },
    {
      title: "Genetics",
      desc: "1,870 Doctors",
      image: IMAGES.dna,
    },
    {
      title: "Dentistry",
      desc: "1,064 Doctors",
      image: IMAGES.dentist,
    },
    {
      title: "Neurology",
      desc: "2,029 Doctors",
      image: IMAGES.brain,
    },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Covid-19 Healthcare</Text>
        <Text style={styles.bannerTxt}>Book your next online appointments</Text>
        <Image source={IMAGES.bannerImage} style={styles.bannerImg} />
      </View>
      <View style={styles.btnContainer}>
        <View>
          <Text style={styles.btnTitle}>STI Problems?</Text>
          <Text style={styles.btnTxt}>Find suitable specialists here</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Search")}
          style={styles.iconContainer}
        >
          <Ionicons name="arrow-forward" size={20} />
        </TouchableOpacity>
      </View>
      <Text style={styles.heading}>Specialty 😷</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.flContainer}>
            <Image source={item.image} style={styles.categoryImg} />
            <Text style={styles.categoryTitle}>{item.title}</Text>
            <Text style={styles.categoryTxt}>{item.desc}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
