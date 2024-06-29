import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  useColorScheme,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
  TouchableOpacity,
  Modal,
  Pressable,
  Button,
  TextInput,
} from "react-native";
import Video from "react-native-video";
import homeStyle from "./styles/homeStyle.js";

const screenWidth = Dimensions.get("window").width;

function AccountScreen({ navigation }) {
  return (
    <View style={accountStyle.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          gap: 35,
          backgroundColor: "#0b0b0b",
          position: "absolute",
          height: 65,
          paddingBottom: 3,
          paddingLeft: 15,
          width: screenWidth,
          alignItems: "center",
        }}
      >
        <Image
          source={require("./assets/close.png")}
          style={[accountStyle.Icon, { width: 21, height: 21, marginLeft: 5 }]}
        ></Image>
        <Text style={[accountStyle.Text, { fontSize: 17 }]}>Account</Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: 90,
          marginLeft: 16,
          gap: 15,
        }}
      >
        <Image
          source={require("./assets/channels4_profile.jpg")}
          style={{ width: 57, height: 57, borderRadius: 100 }}
        ></Image>
        <View>
          <Text style={accountStyle.Text}>Pradhyum</Text>
          <Text style={accountStyle.Text}>pradhyumshivhare8@gmail.com</Text>
          <Text
            style={[accountStyle.Text, { color: "#7295bf", marginTop: 10 }]}
          >
            Manage your Google Account
          </Text>
        </View>
      </View>

      <View style={{ position: "absolute", marginTop: 200, gap: 35 }}>
        <View style={accountStyle.optionCont}>
          <Image
            source={require("./assets/switch-acc.png")}
            style={accountStyle.Icon}
          ></Image>
          <Text style={accountStyle.Text}>Your Channel</Text>
        </View>

        <View style={accountStyle.optionCont}>
          <Image
            source={require("./assets/switch-acc.png")}
            style={accountStyle.Icon}
          ></Image>
          <Text style={accountStyle.Text}>Switch Account</Text>
        </View>
        <View style={accountStyle.intersection}></View>

        <View style={accountStyle.optionCont}>
          <Image
            source={require("./assets/studio.png")}
            style={accountStyle.Icon}
          ></Image>
          <Text style={accountStyle.Text}>Youtube Studio</Text>
        </View>
        <View style={accountStyle.optionCont}>
          <Image
            source={require("./assets/membership.png")}
            style={accountStyle.Icon}
          ></Image>
          <Text style={accountStyle.Text}>Purchases and memberships</Text>
        </View>
        <View style={accountStyle.intersection}></View>
        <View style={accountStyle.optionCont}>
          <Image
            source={require("./assets/settings.png")}
            style={accountStyle.Icon}
          ></Image>
          <Text style={accountStyle.Text}>Settings</Text>
        </View>
        <View style={accountStyle.optionCont}>
          <Image
            source={require("./assets/language.png")}
            style={accountStyle.Icon}
          ></Image>
          <Text style={accountStyle.Text}>Language: English</Text>
        </View>
        <View style={accountStyle.intersection}></View>
        <View style={accountStyle.optionCont}>
          <Image
            source={require("./assets/help.png")}
            style={accountStyle.Icon}
          ></Image>
          <Text style={accountStyle.Text}>Help</Text>
        </View>
        <View style={accountStyle.optionCont}>
          <Image
            source={require("./assets/signout.png")}
            style={accountStyle.Icon}
          ></Image>
          <Text style={accountStyle.Text}>Sign out</Text>
        </View>
      </View>
    </View>
  );
}

const accountStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
  },
  Text: {
    color: "#fff",
    fontSize: 15,
  },
  Icon: {
    width: 25,
    height: 25,
  },
  optionCont: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 20,
    gap: 25,
    alignItems: "center",
  },
  intersection: {
    width: screenWidth,
    backgroundColor: "grey",
    height: 0.8,
    marginTop: -12,
    marginBottom: -12,
  },
});

export default AccountScreen;
