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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import searchStyle from "./styles/searchStyle.js";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

function SearchScreen({ navigation }) {
  return (
    <View
      style={[
        searchStyle.container,
        { height: screenHeight, width: screenWidth },
      ]}
    >
      <View style={searchStyle.box}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            source={require("./assets/back-arrow.png")}
            style={searchStyle.backArrow}
          />
        </TouchableOpacity>
        <TextInput
          style={searchStyle.textBox}
          placeholder="Search YouTube"
          placeholderTextColor="#888888"
        />
        <View style={searchStyle.microPhoneBackground}>
          <Image
            source={require("./assets/microphone.png")}
            style={searchStyle.microPhone}
          />
        </View>
      </View>

      <View style={searchStyle.box}>
        <View style={searchStyle.boxContent}>
          <Image
            source={require("./assets/backtrack.png")}
            style={searchStyle.recIcon}
          />
          <Text style={searchStyle.recTitle}>election results live</Text>
        </View>
        <View style={searchStyle.boxContent}>
          <Image
            source={require("./assets/hq720.webp")}
            style={searchStyle.historyThumbnail}
          />
          <Image
            source={require("./assets/select-arrow.png")}
            style={searchStyle.recIcon}
          />
        </View>
      </View>

      <View style={searchStyle.box}>
        <View style={searchStyle.boxContent}>
          <Image
            source={require("./assets/backtrack.png")}
            style={searchStyle.recIcon}
          />
          <Text style={searchStyle.recTitle}>election results live</Text>
        </View>
        <View style={searchStyle.boxContent}>
          <Image
            source={require("./assets/hq720.webp")}
            style={searchStyle.historyThumbnail}
          />
          <Image
            source={require("./assets/select-arrow.png")}
            style={searchStyle.recIcon}
          />
        </View>
      </View>

      <View style={searchStyle.box}>
        <View style={searchStyle.boxContent}>
          <Image
            source={require("./assets/backtrack.png")}
            style={searchStyle.recIcon}
          />
          <Text style={searchStyle.recTitle}>election results live</Text>
        </View>
        <View style={searchStyle.boxContent}>
          <Image
            source={require("./assets/hq720.webp")}
            style={searchStyle.historyThumbnail}
          />
          <Image
            source={require("./assets/select-arrow.png")}
            style={searchStyle.recIcon}
          />
        </View>
      </View>

      <View style={searchStyle.box}>
        <View style={searchStyle.boxContent}>
          <Image
            source={require("./assets/backtrack.png")}
            style={searchStyle.recIcon}
          />
          <Text style={searchStyle.recTitle}>election results live</Text>
        </View>
        <View style={searchStyle.boxContent}>
          <Image
            source={require("./assets/hq720.webp")}
            style={searchStyle.historyThumbnail}
          />
          <Image
            source={require("./assets/select-arrow.png")}
            style={searchStyle.recIcon}
          />
        </View>
      </View>

      <View style={searchStyle.box}>
        <View style={searchStyle.boxContent}>
          <Image
            source={require("./assets/backtrack.png")}
            style={searchStyle.recIcon}
          />
          <Text style={searchStyle.recTitle}>election results live</Text>
        </View>
        <View style={searchStyle.boxContent}>
          <Image
            source={require("./assets/hq720.webp")}
            style={searchStyle.historyThumbnail}
          />
          <Image
            source={require("./assets/select-arrow.png")}
            style={searchStyle.recIcon}
          />
        </View>
      </View>

      <View style={searchStyle.box}>
        <View style={searchStyle.boxContent}>
          <Image
            source={require("./assets/backtrack.png")}
            style={searchStyle.recIcon}
          />
          <Text style={searchStyle.recTitle}>election results live</Text>
        </View>
        <View style={searchStyle.boxContent}>
          <Image
            source={require("./assets/hq720.webp")}
            style={searchStyle.historyThumbnail}
          />
          <Image
            source={require("./assets/select-arrow.png")}
            style={searchStyle.recIcon}
          />
        </View>
      </View>

      <View style={searchStyle.box}>
        <View style={searchStyle.boxContent}>
          <Image
            source={require("./assets/backtrack.png")}
            style={searchStyle.recIcon}
          />
          <Text style={searchStyle.recTitle}>election results live</Text>
        </View>
        <View style={searchStyle.boxContent}>
          <Image
            source={require("./assets/hq720.webp")}
            style={searchStyle.historyThumbnail}
          />
          <Image
            source={require("./assets/select-arrow.png")}
            style={searchStyle.recIcon}
          />
        </View>
      </View>

      <View style={searchStyle.box}>
        <View style={searchStyle.boxContent}>
          <Image
            source={require("./assets/backtrack.png")}
            style={searchStyle.recIcon}
          />
          <Text style={searchStyle.recTitle}>election results live</Text>
        </View>
        <View style={searchStyle.boxContent}>
          <Image
            source={require("./assets/hq720.webp")}
            style={searchStyle.historyThumbnail}
          />
          <Image
            source={require("./assets/select-arrow.png")}
            style={searchStyle.recIcon}
          />
        </View>
      </View>

      <View style={searchStyle.box}>
        <View style={searchStyle.boxContent}>
          <Image
            source={require("./assets/backtrack.png")}
            style={searchStyle.recIcon}
          />
          <Text style={searchStyle.recTitle}>election results live</Text>
        </View>
        <View style={searchStyle.boxContent}>
          <Image
            source={require("./assets/hq720.webp")}
            style={searchStyle.historyThumbnail}
          />
          <Image
            source={require("./assets/select-arrow.png")}
            style={searchStyle.recIcon}
          />
        </View>
      </View>

      <View style={searchStyle.box}>
        <View style={searchStyle.boxContent}>
          <Image
            source={require("./assets/backtrack.png")}
            style={searchStyle.recIcon}
          />
          <Text style={searchStyle.recTitle}>election results live</Text>
        </View>
        <View style={searchStyle.boxContent}>
          <Image
            source={require("./assets/hq720.webp")}
            style={searchStyle.historyThumbnail}
          />
          <Image
            source={require("./assets/select-arrow.png")}
            style={searchStyle.recIcon}
          />
        </View>
      </View>

      <View style={searchStyle.box}>
        <View style={searchStyle.boxContent}>
          <Image
            source={require("./assets/backtrack.png")}
            style={searchStyle.recIcon}
          />
          <Text style={searchStyle.recTitle}>election results live</Text>
        </View>
        <View style={searchStyle.boxContent}>
          <Image
            source={require("./assets/hq720.webp")}
            style={searchStyle.historyThumbnail}
          />
          <Image
            source={require("./assets/select-arrow.png")}
            style={searchStyle.recIcon}
          />
        </View>
      </View>

      <View style={searchStyle.box}>
        <View style={searchStyle.boxContent}>
          <Image
            source={require("./assets/backtrack.png")}
            style={searchStyle.recIcon}
          />
          <Text style={searchStyle.recTitle}>election results live</Text>
        </View>
        <View style={searchStyle.boxContent}>
          <Image
            source={require("./assets/hq720.webp")}
            style={searchStyle.historyThumbnail}
          />
          <Image
            source={require("./assets/select-arrow.png")}
            style={searchStyle.recIcon}
          />
        </View>
      </View>
    </View>
  );
}

export default SearchScreen;
