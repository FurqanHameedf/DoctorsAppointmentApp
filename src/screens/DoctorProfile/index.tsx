import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./styles";
import Header from "./components/Header";
import { IMAGES } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const DoctorProfile = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <ImageBackground source={IMAGES.bg}>
        <Header />
        <View style={styles.innerContainer}>
          <Image source={IMAGES.Doc1} style={styles.DocImage} />
          <Text style={styles.nameTxt}>Dr. Mensah T</Text>
          <Text style={styles.specialityTxt}>Viralogist</Text>
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.detailBox}>
            <View
              style={[
                styles.iconContainer,
                {
                  backgroundColor: "#EBF8FE",
                },
              ]}
            >
              <Image source={IMAGES.people} style={styles.img} />
            </View>
            <Text style={styles.title}>1000+</Text>
            <Text style={styles.Descp}>Patients</Text>
          </View>
          <View style={styles.detailBox}>
            <View
              style={[
                styles.iconContainer,
                {
                  backgroundColor: "#FDF1F3",
                },
              ]}
            >
              <Image source={IMAGES.experience} style={styles.img} />
            </View>
            <Text style={styles.title}>10 Yrs</Text>
            <Text style={styles.Descp}>Experience</Text>
          </View>
          <View style={styles.detailBox}>
            <View
              style={[
                styles.iconContainer,
                {
                  backgroundColor: "#FEF6EC",
                },
              ]}
            >
              <Image source={IMAGES.rating} style={styles.img} />
            </View>
            <Text style={styles.title}>4.5</Text>
            <Text style={styles.Descp}>Ratings</Text>
          </View>
        </View>
      </ImageBackground>
      <Text style={styles.heading}>About Doctor</Text>
      <Text style={styles.DescriptionTxt}>
        Dr. Bellamy Nicholas is a top specialist at London Bridge Hospital at
        London. He has achieved several awards and recognition for is
        contribution and service in his own field. He is available for private
        consultation.
      </Text>
      <Text style={styles.heading}>Working time</Text>
      <Text style={styles.DescriptionTxt}>Mon - Sat (08:30 AM - 09:00 PM)</Text>
      <Text style={styles.heading}>Communication</Text>
      <View style={styles.lowerContainer}>
        <View style={[styles.iconBox, { backgroundColor: "#FDF1F3" }]}>
          <Image source={IMAGES.message} style={styles.iconImg} />
        </View>
        <View>
          <Text>Messaging</Text>
          <Text>Chat me up, share photos.</Text>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <View style={[styles.iconBox, { backgroundColor: "#DAF2FD" }]}>
          <Image source={IMAGES.call} style={styles.iconImg} />
        </View>
        <View>
          <Text>Audio Call</Text>
          <Text>Call your doctor directly.</Text>
        </View>
      </View>
      <View style={[styles.lowerContainer, { marginBottom: 25 }]}>
        <View style={[styles.iconBox, { backgroundColor: "#FEF6EC" }]}>
          <Image source={IMAGES.video} style={styles.iconImg} />
        </View>
        <View>
          <Text>Video Call</Text>
          <Text>See your doctor live.</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Booking")}
        activeOpacity={0.8}
        style={styles.btnContainer}
      >
        <Text style={styles.btnTxt}>Book Appointment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DoctorProfile;
