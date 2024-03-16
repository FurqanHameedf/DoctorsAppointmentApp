import {
  View,
  Text,
  ScrollView,
  Touchable,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import Header from "./components/Header";
import CalendarStrip from "react-native-calendar-strip";
import { COLORS, EvilIcons, FONT_SIZES, h, w } from "../../constants";
import moment from "moment";
import { Dropdown } from "react-native-element-dropdown";

const Booking = () => {
  const [date, setDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState();
  const [gender, setGender] = useState({});
  const [isFocus, setIsFocus] = useState();
  const [isFocusName, setIsFocusName] = useState(false);
  const [isFocusAge, setIsFocusAge] = useState(false);
  const [isFocusMessage, setIsFocusMessage] = useState(false);

  const handleDateChange = (date: any) => {
    const inputDate = new Date(date);
    setDate(moment(inputDate).format("YYYY-MM-DD"));
  };

  const timeSlot = [
    { time: "09:00 AM", i: 1 },
    { time: "09:30 AM", i: 2 },
    { time: "10:00 AM", i: 3 },
    { time: "12:00 PM", i: 4 },
  ];

  const genderData = [
    { label: "male", value: 0 },
    { label: "female", value: 1 },
    { label: "rather not to say", value: 2 },
  ];

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flexGrow: 1 }}>
        <Header />
        <CalendarStrip
          style={{
            height: 85,
            marginTop: h("3%"),
          }}
          onDateSelected={handleDateChange}
          selectedDate={new Date()}
          calendarHeaderStyle={{
            width: "100%",
            alignItems: "flex-start",
            textAlign: "left",
            fontSize: 18,
            fontWeight: "500",
          }}
          calendarHeaderContainerStyle={{
            width: "100%",
            height: 35,
            borderRadius: 5,
          }}
          innerStyle={{
            borderRadius: 5,
            flex: 1,
            //   height: 150,
            //   backgroundColor: "#000",
          }}
          dayContainerStyle={{
            borderRadius: 5,
            padding: 5,
            borderWidth: 1,
            borderColor: "#F1F2F5",
            //   backgroundColor: COLORS.white,
          }}
          scrollable={true}
          iconStyle={{ display: "none" }}
          dateNameStyle={{
            color: COLORS.secondary,
            fontSize: 10,
            height: 17,
            paddingTop: 5,
          }}
          dateNumberStyle={{
            color: COLORS.secondary,
            fontSize: 22,
            paddingBottom: 2,
          }}
          highlightDateNameStyle={{
            color: COLORS.white,
            fontSize: 10,
            paddingTop: 5,
          }}
          highlightDateNumberStyle={{
            color: COLORS.white,
            fontSize: 22,
            borderBottomWidth: 1,
            borderBottomColor: "#F1F2F5",
          }}
          highlightDateContainerStyle={{
            backgroundColor: COLORS.primary1,
          }}
        />
        <Text style={styles.heading}>Available Time</Text>
        <ScrollView
          contentContainerStyle={{
            paddingVertical: h("1%"),
            //   backgroundColor: COLORS.black,
            height: 80,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {timeSlot?.map((item: any, i: any) => (
            <TouchableOpacity
              // key={i}
              style={[
                styles.item,
                {
                  marginLeft: i === 0 ? 0 : w("3%"),
                  backgroundColor:
                    selectedSlot == item.time
                      ? COLORS.primary1
                      : COLORS.primary2,
                },
              ]}
              onPress={() => setSelectedSlot(item.time)}
            >
              <View style={styles.row}>
                <EvilIcons
                  name="clock"
                  color={selectedSlot == item.time ? COLORS.white : "#6B779A"}
                  size={w("4%")}
                  style={{ marginBottom: 5, marginRight: 2 }}
                />
                <Text
                  style={[
                    styles.txtContent,
                    {
                      color:
                        selectedSlot == item.time ? COLORS.white : "#6B779A",
                    },
                  ]}
                >
                  {item.time}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text style={styles.heading}>Patients Details</Text>
        <Text style={styles.inputHeading}>Full Name</Text>
        <View
          style={[
            styles.inputContainer,
            {
              borderColor: isFocusName ? COLORS.primary1 : COLORS.transparent,
              borderWidth: isFocusName ? 1 : 0,
              backgroundColor: isFocusName ? COLORS.white : COLORS.primary2,
            },
          ]}
        >
          <TextInput
            onFocus={() => setIsFocusName(true)}
            onBlur={() => setIsFocusName(false)}
            style={styles.search}
            placeholder="John Duo "
          />
        </View>
        <Text style={styles.inputHeading}>Age</Text>
        <View
          style={[
            styles.inputContainer,
            {
              borderColor: isFocusAge ? COLORS.primary1 : COLORS.transparent,
              borderWidth: isFocusAge ? 1 : 0,
              backgroundColor: isFocusAge ? COLORS.white : COLORS.primary2,
            },
          ]}
        >
          <TextInput
            onFocus={() => setIsFocusAge(true)}
            onBlur={() => setIsFocusAge(false)}
            style={styles.search}
            placeholder="26 years "
          />
        </View>
        <Text style={styles.inputHeading}>Gender</Text>
        <Dropdown
          style={styles.dropdownType}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.placeholderStyle}
          data={genderData}
          labelField="label"
          valueField="value"
          placeholder={"Select title"}
          value={gender}
          onChange={(item: any) => {
            setGender({ label: item?.label, value: item?.value });
          }}
          renderItem={({ label, value }: any) => {
            return (
              <View
                style={{
                  padding: h("1.5%"),
                  backgroundColor:
                    gender?.label === label ? COLORS.primary1 : COLORS.white,
                }}
              >
                <Text
                  style={{
                    ...styles.itemTextStyle,
                    color:
                      gender.label === label ? COLORS.white : COLORS.secondary,
                  }}
                >
                  {label}
                </Text>
              </View>
            );
          }}
        />
        <Text style={styles.inputHeading}>Write your problem</Text>
        <View
          style={[
            styles.inputContainer,
            {
              borderColor: isFocusMessage
                ? COLORS.primary1
                : COLORS.transparent,
              borderWidth: isFocusMessage ? 1 : 0,
              backgroundColor: isFocusMessage ? COLORS.white : COLORS.primary2,
              marginBottom: h("2%"),
            },
          ]}
        >
          <TextInput
            onFocus={() => setIsFocusMessage(true)}
            onBlur={() => setIsFocusMessage(false)}
            multiline={true}
            numberOfLines={5}
            style={styles.search}
            placeholder="write your problem "
            textAlignVertical="top"
          />
        </View>
        <TouchableOpacity
          // onPress={() => navigation.navigate("Booking")}
          activeOpacity={0.8}
          style={styles.btnContainer}
        >
          <Text style={styles.btnTxt}>Book Appointment</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Booking;
