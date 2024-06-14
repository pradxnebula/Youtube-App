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

function ShortsScreen({ navigation }) {
  return (
    <View style={shortsStyle.container}>
      {/* <View style={[homeStyle.navBarBottom, { width: screenWidth }]}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View style={homeStyle.navBtnWrap}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={{ alignItems: "center" }}
            >
              <Image
                source={require("./assets/home-icon.png")}
                style={homeStyle.navIcon}
              />
              <Text style={homeStyle.navBtnText}>Home</Text>
            </TouchableOpacity>
          </View>

          <View style={homeStyle.navBtnWrap}>
            <Image
              source={require("./assets/shorts.png")}
              style={homeStyle.navIcon}
            />
            <Text style={homeStyle.navBtnText}>Shorts</Text>
          </View>
        </View>

        <Image
          source={require("./assets/add_icon.png")}
          style={{ width: 35, height: 35, marginLeft: 20, marginRight: 20 }}
        />

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View style={homeStyle.navBtnWrap}>
            <Image
              source={require("./assets/subscriptions.png")}
              style={homeStyle.navIcon}
            />
            <Text style={homeStyle.navBtnText}>Subscriptions</Text>
          </View>

          <View style={homeStyle.navBtnWrap}>
            <Image
              source={require("./assets/channels4_profile.jpg")}
              style={[homeStyle.navIcon, { borderRadius: 100 }]}
            />
            <Text style={homeStyle.navBtnText}>You</Text>
          </View>
        </View>
      </View> */}
      <Video
        source={require("./assets/short.mp4")}
        style={shortsStyle.video}
        controls={true} // Show media controls
        resizeMode="cover" // Video resize mode
        repeat={false} // Set to true to loop the video
        paused={false} // Control playback state
        muted={false} // Mute the audio
      />
    </View>
  );
}

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const shortsStyle = StyleSheet.create({
  container: {
    width: screenWidth,
    flex: 1,
    height: 0,
    backgroundColor: "black",
  },
  video: {
    width: screenWidth,
    height: 800,
    position: "absolute",
    top: 0,
  },
});

export default ShortsScreen;
